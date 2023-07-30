"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
// https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/module/song_detail.js
var _require = require('../../request'), httpFetch = _require.httpFetch;
var _require2 = require('./utils/crypto'), weapi = _require2.weapi;
var _default = function _default(songmid) {
    var requestObj = httpFetch('https://music.163.com/weapi/v3/song/detail', {
        method: 'post',
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
            Referer: 'https://music.163.com/song?id=' + songmid,
            origin: 'https://music.163.com'
        },
        form: weapi({
            c: "[{\"id\":".concat(songmid, "}]"),
            ids: "[".concat(songmid, "]")
        })
    });
    requestObj.promise = requestObj.promise.then(function (_ref) {
        var body = _ref.body;
        // console.log(body)
        if (body.code !== 200 || !body.songs.length)
            return Promise.reject('获取歌曲信息失败');
        return body.songs[0];
    });
    return requestObj;
};
exports["default"] = _default;
