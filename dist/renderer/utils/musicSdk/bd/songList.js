"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _require = require('../../request'), httpFetch = _require.httpFetch;
var _require2 = require('../index'), formatPlayTime = _require2.formatPlayTime, toMD5 = _require2.toMD5;
var CryptoJS = require('crypto-js');
var _default = {
    _requestObj_tags: null,
    _requestObj_list: null,
    _requestObj_listRecommend: null,
    limit_list: 30,
    limit_song: 10000,
    successCode: 22000,
    sortList: [{
            name: '最热',
            id: '1'
        }, {
            name: '最新',
            id: '0'
        }],
    regExps: {
        // http://music.taihe.com/songlist/566347741
        listDetailLink: /^.+\/songlist\/(\d+)(?:\?.*|&.*$|#.*$|$)/
    },
    aesPassEncod: function aesPassEncod(jsonData) {
        var timestamp = Math.floor(Date.now() / 1000);
        var privateKey = toMD5('baidu_taihe_music_secret_key' + timestamp).substr(8, 16);
        var key = CryptoJS.enc.Utf8.parse(privateKey);
        var iv = CryptoJS.enc.Utf8.parse(privateKey);
        var arrData = [];
        var strData = '';
        for (var _key in jsonData)
            arrData.push(_key);
        arrData.sort();
        for (var i = 0; i < arrData.length; i++) {
            var _key2 = arrData[i];
            strData += (i === 0 ? '' : '&') + _key2 + '=' + encodeURIComponent(jsonData[_key2]);
        }
        var JsonFormatter = {
            stringify: function stringify(cipherParams) {
                var jsonObj = {
                    ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)
                };
                if (cipherParams.iv) {
                    jsonObj.iv = cipherParams.iv.toString();
                }
                if (cipherParams.salt) {
                    jsonObj.s = cipherParams.salt.toString();
                }
                return jsonObj;
            },
            parse: function parse(jsonStr) {
                var jsonObj = JSON.parse(jsonStr);
                var cipherParams = CryptoJS.lib.CipherParams.create({
                    ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
                });
                if (jsonObj.iv) {
                    cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv);
                }
                if (jsonObj.s) {
                    cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s);
                }
                return cipherParams;
            }
        };
        var encrypted = CryptoJS.AES.encrypt(strData, key, {
            iv: iv,
            blockSize: 16,
            mode: CryptoJS.mode.CBC,
            format: JsonFormatter
        });
        var ciphertext = encrypted.toString().ct;
        var sign = toMD5('baidu_taihe_music' + ciphertext + timestamp);
        var jsonRet = {
            timestamp: timestamp,
            param: ciphertext,
            sign: sign
        };
        return jsonRet;
    },
    createUrl: function createUrl(param, method) {
        var data = this.aesPassEncod(param);
        return "http://musicmini.qianqian.com/v1/restserver/ting?method=".concat(method, "&time=").concat(Date.now(), "&timestamp=").concat(data.timestamp, "&param=").concat(data.param, "&sign=").concat(data.sign);
    },
    getTagsUrl: function getTagsUrl() {
        return this.createUrl({
            from: 'qianqianmini',
            type: 'diy',
            version: '10.1.8'
        }, 'baidu.ting.ugcdiy.getChannels');
    },
    getListUrl: function getListUrl(sortType, tagName, page) {
        return this.createUrl({
            channelname: tagName || '全部',
            from: 'qianqianmini',
            offset: (page - 1) * this.limit_list,
            order_type: sortType,
            size: this.limit_list,
            version: '10.1.8'
        }, 'baidu.ting.ugcdiy.getChanneldiy');
    },
    getListDetailUrl: function getListDetailUrl(list_id, page) {
        return this.createUrl({
            list_id: list_id,
            offset: (page - 1) * this.limit_song,
            size: this.limit_song,
            withcount: '1',
            withsong: '1'
        }, 'baidu.ting.ugcdiy.getBaseInfo');
    },
    // 获取标签
    getTags: function getTags() {
        var _this = this;
        var tryNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        if (this._requestObj_tags)
            this._requestObj_tags.cancelHttp();
        if (tryNum > 2)
            return Promise.reject(new Error('try max num'));
        this._requestObj_tags = httpFetch(this.getTagsUrl());
        return this._requestObj_tags.promise.then(function (_ref) {
            var body = _ref.body;
            if (body.error_code !== _this.successCode)
                return _this.getTags(++tryNum);
            return {
                hotTag: _this.filterInfoHotTag(body.result.hot),
                tags: _this.filterTagInfo(body.result.tags),
                source: 'bd'
            };
        });
    },
    filterInfoHotTag: function filterInfoHotTag(rawList) {
        return rawList.map(function (item) {
            return {
                name: item,
                id: item,
                source: 'bd'
            };
        });
    },
    filterTagInfo: function filterTagInfo(rawList) {
        return rawList.map(function (type) {
            return {
                name: type.first,
                list: type.second.map(function (item) {
                    return {
                        parent_id: type.first,
                        parent_name: type.first,
                        id: item,
                        name: item,
                        source: 'bd'
                    };
                })
            };
        });
    },
    // 获取列表数据
    getList: function getList(sortId, tagId, page) {
        var _this2 = this;
        var tryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        if (this._requestObj_list)
            this._requestObj_list.cancelHttp();
        if (tryNum > 2)
            return Promise.reject(new Error('try max num'));
        this._requestObj_list = httpFetch(this.getListUrl(sortId, tagId, page));
        return this._requestObj_list.promise.then(function (_ref2) {
            var body = _ref2.body;
            if (body.error_code !== _this2.successCode)
                return _this2.getList(sortId, tagId, page, ++tryNum);
            return {
                list: _this2.filterList(body.diyInfo),
                total: body.nums,
                page: page,
                limit: _this2.limit_list,
                source: 'bd'
            };
        });
    },
    /**
     * 格式化播放数量
     * @param {*} num
     */
    formatPlayCount: function formatPlayCount(num) {
        if (num > 100000000)
            return parseInt(num / 10000000) / 10 + '亿';
        if (num > 10000)
            return parseInt(num / 1000) / 10 + '万';
        return num;
    },
    filterList: function filterList(rawData) {
        var _this3 = this;
        return rawData.map(function (item) {
            return {
                play_count: _this3.formatPlayCount(item.listen_num),
                id: String(item.list_id),
                author: item.username,
                name: item.title,
                // time: item.publish_time,
                img: item.list_pic_large || item.list_pic,
                grade: item.grade,
                desc: item.desc || item.tag,
                source: 'bd'
            };
        });
    },
    // 获取歌曲列表内的音乐
    getListDetail: function getListDetail(id, page) {
        var _this4 = this;
        var tryNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        if (tryNum > 2)
            return Promise.reject(new Error('try max num'));
        if (/[?&:/]/.test(id))
            id = id.replace(this.regExps.listDetailLink, '$1');
        var requestObj_listDetail = httpFetch(this.getListDetailUrl(id, page));
        return requestObj_listDetail.promise.then(function (_ref3) {
            var body = _ref3.body;
            if (body.error_code !== _this4.successCode)
                return _this4.getListDetail(id, page, ++tryNum);
            var listData = _this4.filterData(body.result.songlist);
            return {
                list: listData,
                page: page,
                limit: _this4.limit_song,
                total: body.result.song_num,
                source: 'bd',
                info: {
                    name: body.result.info.list_title,
                    img: body.result.info.list_pic,
                    desc: body.result.info.list_desc,
                    author: body.result.info.userinfo.username,
                    play_count: _this4.formatPlayCount(body.result.listen_num)
                }
            };
        });
    },
    filterData: function filterData(rawList) {
        // console.log(rawList)
        return rawList.map(function (item) {
            var types = [];
            var _types = {};
            var size = null;
            var itemTypes = item.all_rate.split(',');
            if (itemTypes.includes('128')) {
                types.push({
                    type: '128k',
                    size: size
                });
                _types['128k'] = {
                    size: size
                };
            }
            if (itemTypes.includes('320')) {
                types.push({
                    type: '320k',
                    size: size
                });
                _types['320k'] = {
                    size: size
                };
            }
            if (itemTypes.includes('flac')) {
                types.push({
                    type: 'flac',
                    size: size
                });
                _types.flac = {
                    size: size
                };
            }
            // types.reverse()
            return {
                singer: item.author.replace(',', '、'),
                name: item.title,
                albumName: item.album_title,
                albumId: item.album_id,
                source: 'bd',
                interval: formatPlayTime(parseInt(item.file_duration)),
                songmid: item.song_id,
                img: item.pic_s500,
                lrc: null,
                types: types,
                _types: _types,
                typeUrl: {}
            };
        });
    }
}; // getList
// getTags
// getListDetail
exports["default"] = _default;
