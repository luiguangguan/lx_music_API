"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var leaderboard = require('./leaderboard');
var _require = require('../api-source'),
  apis = _require.apis;
var musicInfo = require('./musicInfo');
var songList = require('./songList');
var _require2 = require('../../request'),
  httpFetch = _require2.httpFetch;
var musicSearch = require('./musicSearch');
var hotSearch = require('./hotSearch');
var bd = {
  leaderboard: leaderboard,
  songList: songList,
  musicSearch: musicSearch,
  hotSearch: hotSearch,
  getMusicUrl: function getMusicUrl(songInfo, type) {
    return apis('bd').getMusicUrl(songInfo, type);
  },
  getPic: function getPic(songInfo) {
    var requestObj = this.getMusicInfo(songInfo);
    return requestObj.promise.then(function (info) {
      return info.pic_premium;
    });
  },
  getLyric: function getLyric(songInfo) {
    var requestObj = this.getMusicInfo(songInfo);
    requestObj.promise = requestObj.promise.then(function (info) {
      return httpFetch(info.lrclink).promise.then(function (resp) {
        return {
          lyric: resp.body,
          tlyric: ''
        };
      });
    });
    return requestObj;
  },
  // getLyric(songInfo) {
  //   return apis('bd').getLyric(songInfo)
  // },
  // getPic(songInfo) {
  //   return apis('bd').getPic(songInfo)
  // },
  getMusicInfo: function getMusicInfo(songInfo) {
    return musicInfo.getMusicInfo(songInfo.songmid);
  },
  getMusicDetailPageUrl: function getMusicDetailPageUrl(songInfo) {
    return "http://music.taihe.com/song/".concat(songInfo.songmid);
  }
};
var _default = bd;
exports["default"] = _default;