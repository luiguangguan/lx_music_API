"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _require = require('../../request'), httpFetch = _require.httpFetch;
var _require2 = require('../index'), formatPlayTime = _require2.formatPlayTime, sizeFormate = _require2.sizeFormate;
var getSinger = function getSinger(singers) {
    var arr = [];
    singers.forEach(function (singer) {
        arr.push(singer.name);
    });
    return arr.join('、');
};
var _default = function _default(songmid) {
    var requestObj = httpFetch('https://u.y.qq.com/cgi-bin/musicu.fcg', {
        method: 'post',
        headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)'
        },
        body: {
            comm: {
                ct: '19',
                cv: '1859',
                uin: '0'
            },
            req: {
                module: 'music.pf_song_detail_svr',
                method: 'get_song_detail_yqq',
                param: {
                    song_type: 0,
                    song_mid: songmid
                }
            }
        }
    });
    return requestObj.promise.then(function (_ref) {
        var _item$file, _item$album$mid, _item$album, _item$singer;
        var body = _ref.body;
        // console.log(body)
        if (body.code != 0 || body.req.code != 0)
            return Promise.reject('获取歌曲信息失败');
        var item = body.req.data.track_info;
        if (!((_item$file = item.file) !== null && _item$file !== void 0 && _item$file.media_mid))
            return null;
        var types = [];
        var _types = {};
        var file = item.file;
        if (file.size_128mp3 != 0) {
            var size = sizeFormate(file.size_128mp3);
            types.push({
                type: '128k',
                size: size
            });
            _types['128k'] = {
                size: size
            };
        }
        if (file.size_320mp3 !== 0) {
            var _size = sizeFormate(file.size_320mp3);
            types.push({
                type: '320k',
                size: _size
            });
            _types['320k'] = {
                size: _size
            };
        }
        if (file.size_flac !== 0) {
            var _size2 = sizeFormate(file.size_flac);
            types.push({
                type: 'flac',
                size: _size2
            });
            _types.flac = {
                size: _size2
            };
        }
        if (file.size_hires !== 0) {
            var _size3 = sizeFormate(file.size_hires);
            types.push({
                type: 'flac24bit',
                size: _size3
            });
            _types.flac24bit = {
                size: _size3
            };
        }
        // types.reverse()
        var albumId = '';
        var albumName = '';
        if (item.album) {
            albumName = item.album.name;
            albumId = item.album.mid;
        }
        return {
            singer: getSinger(item.singer),
            name: item.name,
            albumName: albumName,
            albumId: albumId,
            source: 'tx',
            interval: formatPlayTime(item.interval),
            songId: item.id,
            albumMid: (_item$album$mid = (_item$album = item.album) === null || _item$album === void 0 ? void 0 : _item$album.mid) !== null && _item$album$mid !== void 0 ? _item$album$mid : '',
            strMediaMid: item.file.media_mid,
            songmid: item.mid,
            img: albumId === '' || albumId === '空' ? (_item$singer = item.singer) !== null && _item$singer !== void 0 && _item$singer.length ? "https://y.gtimg.cn/music/photo_new/T001R500x500M000".concat(item.singer[0].mid, ".jpg") : '' : "https://y.gtimg.cn/music/photo_new/T002R500x500M000".concat(albumId, ".jpg"),
            types: types,
            _types: _types,
            typeUrl: {}
        };
    });
};
exports["default"] = _default;
