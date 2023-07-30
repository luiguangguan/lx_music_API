"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _require = require('../../request'), httpFetch = _require.httpFetch;
var _require2 = require('../index'), decodeName = _require2.decodeName;
var _require3 = require('./util'), formatSinger = _require3.formatSinger, objStr2JSON = _require3.objStr2JSON;
// let requestObj_list
var _default = {
    limit_list: 36,
    limit_song: 1000,
    filterListDetail: function filterListDetail(rawList, albumName, albumId) {
        // console.log(rawList)
        // console.log(rawList.length, rawList2.length)
        return rawList.map(function (item, inedx) {
            var formats = item.formats.split('|');
            var types = [];
            var _types = {};
            if (formats.includes('MP3128')) {
                types.push({
                    type: '128k',
                    size: null
                });
                _types['128k'] = {
                    size: null
                };
            }
            // if (formats.includes('MP3192')) {
            //   types.push({ type: '192k', size: null })
            //   _types['192k'] = {
            //     size: null,
            //   }
            // }
            if (formats.includes('MP3H')) {
                types.push({
                    type: '320k',
                    size: null
                });
                _types['320k'] = {
                    size: null
                };
            }
            // if (formats.includes('AL')) {
            //   types.push({ type: 'ape', size: null })
            //   _types.ape = {
            //     size: null,
            //   }
            // }
            if (formats.includes('ALFLAC')) {
                types.push({
                    type: 'flac',
                    size: null
                });
                _types.flac = {
                    size: null
                };
            }
            if (formats.includes('HIRFLAC')) {
                types.push({
                    type: 'flac24bit',
                    size: null
                });
                _types.flac24bit = {
                    size: null
                };
            }
            // types.reverse()
            return {
                singer: formatSinger(decodeName(item.artist)),
                name: decodeName(item.name),
                albumName: albumName,
                albumId: albumId,
                songmid: item.id,
                source: 'kw',
                interval: null,
                img: item.pic,
                lrc: null,
                otherSource: null,
                types: types,
                _types: _types,
                typeUrl: {}
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
    getAlbumListDetail: function getAlbumListDetail(id, page) {
        var _this = this;
        var retryNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        if (retryNum > 2)
            return Promise.reject(new Error('try max num'));
        var requestObj_listDetail = httpFetch("http://search.kuwo.cn/r.s?pn=".concat(page - 1, "&rn=").concat(this.limit_song, "&stype=albuminfo&albumid=").concat(id, "&show_copyright_off=0&encoding=utf&vipver=MUSIC_9.1.0"));
        return requestObj_listDetail.promise.then(function (_ref) {
            var statusCode = _ref.statusCode, body = _ref.body;
            if (statusCode !== 200)
                return _this.getAlbumListDetail(id, page, ++retryNum);
            body = objStr2JSON(body);
            // console.log(body)
            if (!body.musiclist)
                return _this.getAlbumListDetail(id, page, ++retryNum);
            body.name = decodeName(body.name);
            return {
                list: _this.filterListDetail(body.musiclist, body.name, body.albumid),
                page: page,
                limit: _this.limit_song,
                total: parseInt(body.songnum),
                source: 'kw',
                info: {
                    name: body.name,
                    img: body.img || body.hts_img,
                    desc: decodeName(body.info),
                    author: decodeName(body.artist)
                    // play_count: this.formatPlayCount(body.playnum),
                }
            };
        });
    } // getAlbumListDetail(id, page, retryNum = 0) {
    //   if (retryNum > 2) return Promise.reject(new Error('try max num'))
    //   return tokenRequest(`http://www.kuwo.cn/api/www/album/albumInfo?albumId=${id}&pn=${page}&rn=${this.limit_song}&httpsStatus=1`).then((resp) => {
    //     return resp.promise.then(({ statusCode, body }) => {
    //       console.log(body)
    //       return Promise.reject(new Error('failed'))
    //       // if (statusCode !== 200) return this.getAlbumListDetail(id, page, ++retryNum)
    //       // const data = body.data
    //       // console.log(data)
    //       // if (!data.musicList) return this.getAlbumListDetail(id, page, ++retryNum)
    //       // return {
    //       //   list: this.filterListDetail(data.musiclist),
    //       //   page,
    //       //   limit: this.limit_song,
    //       //   total: data.total,
    //       //   source: 'kw',
    //       //   info: {
    //       //     name: data.album,
    //       //     img: data.pic,
    //       //     desc: data.albuminfo,
    //       //     author: data.artist,
    //       //     play_count: this.formatPlayCount(data.playCnt),
    //       //   },
    //       // }
    //     })
    //   })
    // },
};
exports["default"] = _default;
