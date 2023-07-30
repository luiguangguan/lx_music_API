"use strict";

var _require = require('../../request'),
  httpFetch = _require.httpFetch;
var tipSearch = require('./tipSearch');
var musicSearch = require('./musicSearch');
var _require2 = require('./util'),
  formatSinger = _require2.formatSinger,
  getToken = _require2.getToken;
var leaderboard = require('./leaderboard');
var lyric = require('./lyric');
var pic = require('./pic');
var _require3 = require('../api-source'),
  apis = _require3.apis;
var songList = require('./songList');
var hotSearch = require('./hotSearch');
var comment = require('./comment');
var kw = {
  _musicInfoRequestObj: null,
  _musicInfoPromiseCancelFn: null,
  _musicPicRequestObj: null,
  _musicPicPromiseCancelFn: null,
  // context: null,

  // init(context) {
  //   if (this.isInited) return
  //   this.isInited = true
  //   this.context = context

  //   // this.musicSearch.search('我又想你了').then(res => {
  //   //   console.log(res)
  //   // })

  //   // this.getMusicUrl('62355680', '320k').then(url => {
  //   //   console.log(url)
  //   // })
  // },

  tipSearch: tipSearch,
  musicSearch: musicSearch,
  leaderboard: leaderboard,
  songList: songList,
  hotSearch: hotSearch,
  comment: comment,
  getLyric: function getLyric(songInfo, isGetLyricx) {
    // let singer = songInfo.singer.indexOf('、') > -1 ? songInfo.singer.split('、')[0] : songInfo.singer
    return lyric.getLyric(songInfo, isGetLyricx);
  },
  handleMusicInfo: function handleMusicInfo(songInfo) {
    return this.getMusicInfo(songInfo).then(function (info) {
      // console.log(JSON.stringify(info))
      songInfo.name = info.name;
      songInfo.singer = formatSinger(info.artist);
      songInfo.img = info.pic;
      songInfo.albumName = info.album;
      return songInfo;
      // return Object.assign({}, songInfo, {
      //   name: info.name,
      //   singer: formatSinger(info.artist),
      //   img: info.pic,
      //   albumName: info.album,
      // })
    });
  },
  getMusicUrl: function getMusicUrl(songInfo, type) {
    return apis('kw').getMusicUrl(songInfo, type);
  },
  getMusicInfo: function getMusicInfo(songInfo) {
    if (this._musicInfoRequestObj) this._musicInfoRequestObj.cancelHttp();
    this._musicInfoRequestObj = httpFetch("http://www.kuwo.cn/api/www/music/musicInfo?mid=".concat(songInfo.songmid));
    return this._musicInfoRequestObj.promise.then(function (_ref) {
      var body = _ref.body;
      return body.code === 200 ? body.data : Promise.reject(new Error(body.msg));
    });
  },
  getMusicUrls: function getMusicUrls(musicInfo, cb) {
    var tasks = [];
    var songId = musicInfo.songmid;
    musicInfo.types.forEach(function (type) {
      tasks.push(kw.getMusicUrl(songId, type.type).promise);
    });
    Promise.all(tasks).then(function (urlInfo) {
      var typeUrl = {};
      urlInfo.forEach(function (info) {
        typeUrl[info.type] = info.url;
      });
      cb(typeUrl);
    });
  },
  getPic: function getPic(songInfo) {
    return pic.getPic(songInfo);
  },
  getMusicDetailPageUrl: function getMusicDetailPageUrl(songInfo) {
    return "http://www.kuwo.cn/play_detail/".concat(songInfo.songmid);
  },
  init: function init() {
    return getToken();
  }
};
exports = kw;