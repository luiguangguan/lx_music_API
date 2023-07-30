"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var leaderboard = require('./leaderboard');
var _require = require('../api-source'), apis = _require.apis;
var _getLyric = require('./lyric');
var getMusicInfo = require('./musicInfo');
var musicSearch = require('./musicSearch');
var songList = require('./songList');
var hotSearch = require('./hotSearch');
var comment = require('./comment');
// const tipSearch = require('./tipSearch');
var wy = {
    // tipSearch,
    leaderboard: leaderboard,
    musicSearch: musicSearch,
    songList: songList,
    hotSearch: hotSearch,
    comment: comment,
    getMusicUrl: function getMusicUrl(songInfo, type) {
        return apis('wy').getMusicUrl(songInfo, type);
    },
    getLyric: function getLyric(songInfo) {
        return _getLyric(songInfo.songmid);
    },
    getPic: function getPic(songInfo) {
        var requestObj = getMusicInfo(songInfo.songmid);
        return requestObj.promise.then(function (info) {
            return info.al.picUrl;
        });
    },
    getMusicDetailPageUrl: function getMusicDetailPageUrl(songInfo) {
        return "https://music.163.com/#/song?id=".concat(songInfo.songmid);
    }
};
var _default = wy;
exports["default"] = _default;
