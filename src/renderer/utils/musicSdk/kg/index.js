"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var leaderboard = require('./leaderboard');
var _require = require('../api-source'),
  apis = _require.apis;
var songList = require('./songList');
var musicSearch = require('./musicSearch');
var pic = require('./pic');
var lyric = require('./lyric');
var hotSearch = require('./hotSearch');
var comment = require('./comment');
// const tipSearch = require('./tipSearch');

var kg = {
  // tipSearch,
  leaderboard: leaderboard,
  songList: songList,
  musicSearch: musicSearch,
  hotSearch: hotSearch,
  comment: comment,
  getMusicUrl: function getMusicUrl(songInfo, type) {
    return apis('kg').getMusicUrl(songInfo, type);
  },
  getLyric: function getLyric(songInfo) {
    return lyric.getLyric(songInfo);
  },
  // getLyric(songInfo) {
  //   return apis('kg').getLyric(songInfo)
  // },
  getPic: function getPic(songInfo) {
    return pic.getPic(songInfo);
  },
  getMusicDetailPageUrl: function getMusicDetailPageUrl(songInfo) {
    return "https://www.kugou.com/song/#hash=".concat(songInfo.hash, "&album_id=").concat(songInfo.albumId);
  } // getPic(songInfo) {
  //   return apis('kg').getPic(songInfo)
  // },
};
var _default = kg;
exports["default"] = _default;