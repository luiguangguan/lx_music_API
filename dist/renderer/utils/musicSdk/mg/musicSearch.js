"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = exports.createSignature = void 0;
var _require = require('../../request'), httpFetch = _require.httpFetch;
var _require2 = require('../index'), sizeFormate = _require2.sizeFormate, formatPlayTime = _require2.formatPlayTime;
var _require3 = require('../utils'), toMD5 = _require3.toMD5, formatSingerName = _require3.formatSingerName;
var createSignature = function createSignature(time, str) {
    var deviceId = '963B7AA0D21511ED807EE5846EC87D20';
    var signatureMd5 = '6cdc72a439cef99a3418d2a78aa28c73';
    var sign = toMD5("".concat(str).concat(signatureMd5, "yyapp2d16148780a1dcc7408e06336b98cfd50").concat(deviceId).concat(time));
    return {
        sign: sign,
        deviceId: deviceId
    };
};
exports.createSignature = createSignature;
var _default = {
    limit: 20,
    total: 0,
    page: 0,
    allPage: 1,
    // 旧版API
    // musicSearch(str, page, limit) {
    //   const searchRequest = httpFetch(`http://pd.musicapp.migu.cn/MIGUM2.0/v1.0/content/search_all.do?ua=Android_migu&version=5.0.1&text=${encodeURIComponent(str)}&pageNo=${page}&pageSize=${limit}&searchSwitch=%7B%22song%22%3A1%2C%22album%22%3A0%2C%22singer%22%3A0%2C%22tagSong%22%3A0%2C%22mvSong%22%3A0%2C%22songlist%22%3A0%2C%22bestShow%22%3A1%7D`, {
    // searchRequest = httpFetch(`http://pd.musicapp.migu.cn/MIGUM2.0/v1.0/content/search_all.do?ua=Android_migu&version=5.0.1&text=${encodeURIComponent(str)}&pageNo=${page}&pageSize=${limit}&searchSwitch=%7B%22song%22%3A1%2C%22album%22%3A0%2C%22singer%22%3A0%2C%22tagSong%22%3A0%2C%22mvSong%22%3A0%2C%22songlist%22%3A0%2C%22bestShow%22%3A1%7D`, {
    // searchRequest = httpFetch(`http://jadeite.migu.cn:7090/music_search/v2/search/searchAll?sid=4f87090d01c84984a11976b828e2b02c18946be88a6b4c47bcdc92fbd40762db&isCorrect=1&isCopyright=1&searchSwitch=%7B%22song%22%3A1%2C%22album%22%3A0%2C%22singer%22%3A0%2C%22tagSong%22%3A1%2C%22mvSong%22%3A0%2C%22bestShow%22%3A1%2C%22songlist%22%3A0%2C%22lyricSong%22%3A0%7D&pageSize=${limit}&text=${encodeURIComponent(str)}&pageNo=${page}&sort=0`, {
    // searchRequest = httpFetch(`https://app.c.nf.migu.cn/MIGUM2.0/v1.0/content/search_all.do?isCopyright=1&isCorrect=1&pageNo=${page}&pageSize=${limit}&searchSwitch={%22song%22:1,%22album%22:0,%22singer%22:0,%22tagSong%22:0,%22mvSong%22:0,%22songlist%22:0,%22bestShow%22:0}&sort=0&text=${encodeURIComponent(str)}`)
    //   // searchRequest = httpFetch(`http://jadeite.migu.cn:7090/music_search/v2/search/searchAll?sid=4f87090d01c84984a11976b828e2b02c18946be88a6b4c47bcdc92fbd40762db&isCorrect=1&isCopyright=1&searchSwitch=%7B%22song%22%3A1%2C%22album%22%3A0%2C%22singer%22%3A0%2C%22tagSong%22%3A1%2C%22mvSong%22%3A0%2C%22bestShow%22%3A1%2C%22songlist%22%3A0%2C%22lyricSong%22%3A0%7D&pageSize=${limit}&text=${encodeURIComponent(str)}&pageNo=${page}&sort=0`, {
    //     headers: {
    //       // sign: 'c3b7ae985e2206e97f1b2de8f88691e2',
    //       // timestamp: 1578225871982,
    //       // appId: 'yyapp2',
    //       // mode: 'android',
    //       // ua: 'Android_migu',
    //       // version: '6.9.4',
    //       osVersion: 'android 7.0',
    //       'User-Agent': 'okhttp/3.9.1',
    //     },
    //   })
    //   // searchRequest = httpFetch(`https://app.c.nf.migu.cn/MIGUM2.0/v1.0/content/search_all.do?isCopyright=1&isCorrect=1&pageNo=${page}&pageSize=${limit}&searchSwitch={%22song%22:1,%22album%22:0,%22singer%22:0,%22tagSong%22:0,%22mvSong%22:0,%22songlist%22:0,%22bestShow%22:0}&sort=0&text=${encodeURIComponent(str)}`)
    //   return searchRequest.promise.then(({ body }) => body)
    // },
    // handleResult(rawData) {
    //   // console.log(rawData)
    //   let ids = new Set()
    //   const list = []
    //   rawData.forEach(item => {
    //     if (ids.has(item.id)) return
    //     ids.add(item.id)
    //     const types = []
    //     const _types = {}
    //     item.newRateFormats && item.newRateFormats.forEach(type => {
    //       let size
    //       switch (type.formatType) {
    //         case 'PQ':
    //           size = sizeFormate(type.size ?? type.androidSize)
    //           types.push({ type: '128k', size })
    //           _types['128k'] = {
    //             size,
    //           }
    //           break
    //         case 'HQ':
    //           size = sizeFormate(type.size ?? type.androidSize)
    //           types.push({ type: '320k', size })
    //           _types['320k'] = {
    //             size,
    //           }
    //           break
    //         case 'SQ':
    //           size = sizeFormate(type.size ?? type.androidSize)
    //           types.push({ type: 'flac', size })
    //           _types.flac = {
    //             size,
    //           }
    //           break
    //         case 'ZQ':
    //           size = sizeFormate(type.size ?? type.androidSize)
    //           types.push({ type: 'flac24bit', size })
    //           _types.flac24bit = {
    //             size,
    //           }
    //           break
    //       }
    //     })
    //     const albumNInfo = item.albums && item.albums.length
    //       ? {
    //           id: item.albums[0].id,
    //           name: item.albums[0].name,
    //         }
    //       : {}
    //     list.push({
    //       singer: this.getSinger(item.singers),
    //       name: item.name,
    //       albumName: albumNInfo.name,
    //       albumId: albumNInfo.id,
    //       songmid: item.songId,
    //       copyrightId: item.copyrightId,
    //       source: 'mg',
    //       interval: null,
    //       img: item.imgItems && item.imgItems.length ? item.imgItems[0].img : null,
    //       lrc: null,
    //       lrcUrl: item.lyricUrl,
    //       mrcUrl: item.mrcurl,
    //       trcUrl: item.trcUrl,
    //       otherSource: null,
    //       types,
    //       _types,
    //       typeUrl: {},
    //     })
    //   })
    //   return list
    // },
    musicSearch: function musicSearch(str, page, limit) {
        var time = Date.now().toString();
        var signData = createSignature(time, str);
        var searchRequest = httpFetch("https://jadeite.migu.cn/music_search/v3/search/searchAll?isCorrect=1&isCopyright=1&searchSwitch=%7B%22song%22%3A1%2C%22album%22%3A0%2C%22singer%22%3A0%2C%22tagSong%22%3A1%2C%22mvSong%22%3A0%2C%22bestShow%22%3A1%2C%22songlist%22%3A0%2C%22lyricSong%22%3A0%7D&pageSize=".concat(limit, "&text=").concat(encodeURIComponent(str), "&pageNo=").concat(page, "&sort=0"), {
            headers: {
                uiVersion: 'A_music_3.6.1',
                deviceId: signData.deviceId,
                timestamp: time,
                sign: signData.sign,
                channel: '0146921',
                'User-Agent': 'Mozilla/5.0 (Linux; U; Android 11.0.0; zh-cn; MI 11 Build/OPR1.170623.032) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
            }
        });
        return searchRequest.promise.then(function (_ref) {
            var body = _ref.body;
            return body;
        });
    },
    filterData: function filterData(rawData) {
        // console.log(rawData)
        var list = [];
        var ids = new Set();
        rawData.forEach(function (item) {
            item.forEach(function (data) {
                if (!data.songId || !data.copyrightId || ids.has(data.copyrightId))
                    return;
                ids.add(data.copyrightId);
                var types = [];
                var _types = {};
                data.audioFormats && data.audioFormats.forEach(function (type) {
                    var _type$asize, _type$asize2, _type$asize3, _type$asize4;
                    var size;
                    switch (type.formatType) {
                        case 'PQ':
                            size = sizeFormate((_type$asize = type.asize) !== null && _type$asize !== void 0 ? _type$asize : type.isize);
                            types.push({
                                type: '128k',
                                size: size
                            });
                            _types['128k'] = {
                                size: size
                            };
                            break;
                        case 'HQ':
                            size = sizeFormate((_type$asize2 = type.asize) !== null && _type$asize2 !== void 0 ? _type$asize2 : type.isize);
                            types.push({
                                type: '320k',
                                size: size
                            });
                            _types['320k'] = {
                                size: size
                            };
                            break;
                        case 'SQ':
                            size = sizeFormate((_type$asize3 = type.asize) !== null && _type$asize3 !== void 0 ? _type$asize3 : type.isize);
                            types.push({
                                type: 'flac',
                                size: size
                            });
                            _types.flac = {
                                size: size
                            };
                            break;
                        case 'ZQ24':
                            size = sizeFormate((_type$asize4 = type.asize) !== null && _type$asize4 !== void 0 ? _type$asize4 : type.isize);
                            types.push({
                                type: 'flac24bit',
                                size: size
                            });
                            _types.flac24bit = {
                                size: size
                            };
                            break;
                    }
                });
                var img = data.img3 || data.img2 || data.img1 || null;
                if (img && !/https?:/.test(data.img3))
                    img = 'http://d.musicapp.migu.cn' + img;
                list.push({
                    singer: formatSingerName(data.singerList),
                    name: data.name,
                    albumName: data.album,
                    albumId: data.albumId,
                    songmid: data.songId,
                    copyrightId: data.copyrightId,
                    source: 'mg',
                    interval: formatPlayTime(data.duration),
                    img: img,
                    lrc: null,
                    lrcUrl: data.lrcUrl,
                    mrcUrl: data.mrcurl,
                    trcUrl: data.trcUrl,
                    types: types,
                    _types: _types,
                    typeUrl: {}
                });
            });
        });
        return list;
    },
    search: function search(str) {
        var _this = this;
        var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var limit = arguments.length > 2 ? arguments[2] : undefined;
        var retryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        if (++retryNum > 3)
            return Promise.reject(new Error('try max num'));
        if (limit == null)
            limit = this.limit;
        // http://newlyric.kuwo.cn/newlyric.lrc?62355680
        return this.musicSearch(str, page, limit).then(function (result) {
            // console.log(result)
            if (!result || result.code !== '000000')
                return Promise.reject(new Error(result ? result.info : '搜索失败'));
            var songResultData = result.songResultData || {
                resultList: [],
                totalCount: 0
            };
            var list = _this.filterData(songResultData.resultList);
            if (list == null)
                return _this.search(str, page, limit, retryNum);
            _this.total = parseInt(songResultData.totalCount);
            _this.page = page;
            _this.allPage = Math.ceil(_this.total / limit);
            return {
                list: list,
                allPage: _this.allPage,
                limit: limit,
                total: _this.total,
                source: 'mg'
            };
        });
    }
};
exports["default"] = _default;
