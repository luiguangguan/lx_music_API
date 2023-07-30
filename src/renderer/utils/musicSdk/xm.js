"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// const { apis } = require('../api-source');
// const leaderboard = require('./leaderboard');
// const songList = require('./songList');
// const musicSearch = require('./musicSearch');
// const pic = require('./pic');
// const lyric = require('./lyric');
// const hotSearch = require('./hotSearch');
// const comment = require('./comment');
// const musicInfo = require('./musicInfo');
// const { closeVerifyModal } = require('./util');

var xm = {
  // songList,
  // musicSearch,
  // leaderboard,
  // hotSearch,
  // closeVerifyModal,
  comment: {
    getComment: function getComment() {
      return Promise.reject(new Error('fail'));
    },
    getHotComment: function getHotComment() {
      return Promise.reject(new Error('fail'));
    }
  },
  getMusicUrl: function getMusicUrl(songInfo, type) {
    return {
      promise: Promise.reject(new Error('fail'))
    };
    // return apis('xm').getMusicUrl(songInfo, type)
  },
  getLyric: function getLyric(songInfo) {
    return {
      promise: Promise.reject(new Error('fail'))
    };
    // return lyric.getLyric(songInfo)
  },
  getPic: function getPic(songInfo) {
    return Promise.reject(new Error('fail'));
    // return pic.getPic(songInfo)
  } // getMusicDetailPageUrl(songInfo) {
  //   if (songInfo.songStringId) return `https://www.xiami.com/song/${songInfo.songStringId}`
  //   musicInfo.getMusicInfo(songInfo).then(({ data }) => {
  //     songInfo.songStringId = data.songStringId
  //   })
  //   return `https://www.xiami.com/song/${songInfo.songmid}`
  // },
  // init() {
  //   getToken()
  // },
};
var _default = xm;
exports["default"] = _default;