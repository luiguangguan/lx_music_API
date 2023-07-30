"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _require = require('../api-source'),
  apis = _require.apis;
var leaderboard = require('./leaderboard');
var songList = require('./songList');
var musicSearch = require('./musicSearch');
var pic = require('./pic');
var lyric = require('./lyric');
var hotSearch = require('./hotSearch');
var comment = require('./comment');
// const tipSearch = require('./tipSearch');

var mg = {
  // tipSearch,
  songList: songList,
  musicSearch: musicSearch,
  leaderboard: leaderboard,
  hotSearch: hotSearch,
  comment: comment,
  getMusicUrl: function getMusicUrl(songInfo, type) {
    return apis('mg').getMusicUrl(songInfo, type);
  },
  getLyric: function getLyric(songInfo) {
    return lyric.getLyric(songInfo);
  },
  getPic: function getPic(songInfo) {
    return pic.getPic(songInfo);
  },
  getMusicDetailPageUrl: function getMusicDetailPageUrl(songInfo) {
    return "http://music.migu.cn/v3/music/song/".concat(songInfo.copyrightId);
  }
};
var _default = mg;
exports["default"] = _default;