"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _require = require('../../request'),
  httpFetch = _require.httpFetch;
var _require2 = require('../index'),
  formatPlayTime = _require2.formatPlayTime,
  sizeFormate = _require2.sizeFormate;
var _require3 = require('../utils'),
  formatSingerName = _require3.formatSingerName;
var _default = {
  limit: 50,
  total: 0,
  page: 0,
  allPage: 1,
  successCode: 0,
  musicSearch: function musicSearch(str, page, limit) {
    var _this = this;
    var retryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (retryNum > 5) return Promise.reject(new Error('搜索失败'));
    // searchRequest = httpFetch(`https://c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=sizer.yqq.song_next&searchid=49252838123499591&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=${page}&n=${limit}&w=${encodeURIComponent(str)}&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0`)
    // const searchRequest = httpFetch(`https://shc.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&remoteplace=txt.yqq.top&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=${page}&n=${limit}&w=${encodeURIComponent(str)}&cv=4747474&ct=24&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&uin=0&hostUin=0&loginUin=0`)
    var searchRequest = httpFetch('https://u.y.qq.com/cgi-bin/musicu.fcg', {
      method: 'post',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)'
      },
      body: {
        comm: {
          ct: 11,
          cv: '1003006',
          v: '1003006',
          os_ver: '12',
          phonetype: '0',
          devicelevel: '31',
          tmeAppID: 'qqmusiclight',
          nettype: 'NETWORK_WIFI'
        },
        req: {
          module: 'music.search.SearchCgiService',
          method: 'DoSearchForQQMusicLite',
          param: {
            query: str,
            search_type: 0,
            num_per_page: limit,
            page_num: page,
            nqc_flag: 0,
            grp: 1
          }
        }
      }
    });
    // searchRequest = httpFetch(`http://ioscdn.kugou.com/api/v3/search/song?keyword=${encodeURIComponent(str)}&page=${page}&pagesize=${this.limit}&showtype=10&plat=2&version=7910&tag=1&correct=1&privilege=1&sver=5`)
    return searchRequest.promise.then(function (_ref) {
      var body = _ref.body;
      // console.log(body)
      if (body.code != _this.successCode || body.req.code != _this.successCode) return _this.musicSearch(str, page, limit, ++retryNum);
      return body.req.data;
    });
  },
  handleResult: function handleResult(rawList) {
    // console.log(rawList)
    var list = [];
    rawList.forEach(function (item) {
      var _item$file, _item$album$mid, _item$album, _item$singer;
      if (!((_item$file = item.file) !== null && _item$file !== void 0 && _item$file.media_mid)) return;
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
      list.push({
        singer: formatSingerName(item.singer, 'name'),
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
      });
    });
    // console.log(list)
    return list;
  },
  search: function search(str) {
    var _this2 = this;
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var limit = arguments.length > 2 ? arguments[2] : undefined;
    if (limit == null) limit = this.limit;
    // http://newlyric.kuwo.cn/newlyric.lrc?62355680
    return this.musicSearch(str, page, limit).then(function (_ref2) {
      var body = _ref2.body,
        meta = _ref2.meta;
      var list = _this2.handleResult(body.item_song);
      _this2.total = meta.estimate_sum;
      _this2.page = page;
      _this2.allPage = Math.ceil(_this2.total / limit);
      return Promise.resolve({
        list: list,
        allPage: _this2.allPage,
        limit: limit,
        total: _this2.total,
        source: 'tx'
      });
    });
  }
};
exports["default"] = _default;