"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var leaderboard = require('./leaderboard');
var lyric = require('./lyric');
var songList = require('./songList');
var musicSearch = require('./musicSearch');
var _require = require('../api-source'), apis = _require.apis;
var hotSearch = require('./hotSearch');
var comment = require('./comment');
// const tipSearch = require('./tipSearch');
var tx = {
    // tipSearch,
    leaderboard: leaderboard,
    songList: songList,
    musicSearch: musicSearch,
    hotSearch: hotSearch,
    comment: comment,
    getMusicUrl: function getMusicUrl(songInfo, type) {
        return apis('tx').getMusicUrl(songInfo, type);
    },
    getLyric: function getLyric(songInfo) {
        // let singer = songInfo.singer.indexOf('、') > -1 ? songInfo.singer.split('、')[0] : songInfo.singer
        return lyric.getLyric(songInfo);
    },
    getPic: function getPic(songInfo) {
        return apis('tx').getPic(songInfo);
    },
    getMusicDetailPageUrl: function getMusicDetailPageUrl(songInfo) {
        return "https://y.qq.com/n/yqq/song/".concat(songInfo.songmid, ".html");
    }
};
var _default = tx;
exports["default"] = _default;
