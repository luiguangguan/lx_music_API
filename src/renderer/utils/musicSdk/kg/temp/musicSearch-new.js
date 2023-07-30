"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _require = require('../index'),
  decodeName = _require.decodeName,
  formatPlayTime = _require.formatPlayTime,
  sizeFormate = _require.sizeFormate;
var _require2 = require('./util'),
  signatureParams = _require2.signatureParams,
  createHttpFetch = _require2.createHttpFetch;
var _require3 = require('../../utils'),
  formatSingerName = _require3.formatSingerName;
var _default = {
  limit: 30,
  total: 0,
  page: 0,
  allPage: 1,
  musicSearch: function musicSearch(str, page, limit) {
    var sign = signatureParams("userid=0&area_code=1&appid=1005&dopicfull=1&page=".concat(page, "&token=0&privilegefilter=0&requestid=0&pagesize=").concat(limit, "&user_labels=&clienttime=0&sec_aggre=1&iscorrection=1&uuid=0&mid=0&keyword=").concat(str, "&dfid=-&clientver=11409&platform=AndroidFilter&tag="), 3);
    return createHttpFetch("https://gateway.kugou.com/complexsearch/v3/search/song?userid=0&area_code=1&appid=1005&dopicfull=1&page=".concat(page, "&token=0&privilegefilter=0&requestid=0&pagesize=").concat(limit, "&user_labels=&clienttime=0&sec_aggre=1&iscorrection=1&uuid=0&mid=0&dfid=-&clientver=11409&platform=AndroidFilter&tag=&keyword=").concat(encodeURIComponent(str), "&signature=").concat(sign), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
        referer: 'https://kugou.com'
      }
    }).then(function (body) {
      return body;
    });
  },
  filterList: function filterList(raw) {
    var ids = new Set();
    var list = [];
    raw.forEach(function (item) {
      if (ids.has(item.Audioid)) return;
      ids.add(item.Audioid);
      var types = [];
      var _types = {};
      if (item.FileSize !== 0) {
        var size = sizeFormate(item.FileSize);
        types.push({
          type: '128k',
          size: size,
          hash: item.FileHash
        });
        _types['128k'] = {
          size: size,
          hash: item.FileHash
        };
      }
      if (item.HQ != undefined) {
        var _size = sizeFormate(item.HQ.FileSize);
        types.push({
          type: '320k',
          size: _size,
          hash: item.HQ.Hash
        });
        _types['320k'] = {
          size: _size,
          hash: item.HQ.Hash
        };
      }
      if (item.SQ != undefined) {
        var _size2 = sizeFormate(item.SQ.FileSize);
        types.push({
          type: 'flac',
          size: _size2,
          hash: item.SQ.Hash
        });
        _types.flac = {
          size: _size2,
          hash: item.SQ.Hash
        };
      }
      if (item.Res != undefined) {
        var _size3 = sizeFormate(item.Res.FileSize);
        types.push({
          type: 'flac24bit',
          size: _size3,
          hash: item.Res.Hash
        });
        _types.flac24bit = {
          size: _size3,
          hash: item.Res.Hash
        };
      }
      list.push({
        singer: decodeName(formatSingerName(item.Singers)),
        name: decodeName(item.SongName),
        albumName: decodeName(item.AlbumName),
        albumId: item.AlbumID,
        songmid: item.Audioid,
        source: 'kg',
        interval: formatPlayTime(item.Duration),
        _interval: item.Duration,
        img: null,
        lrc: null,
        otherSource: null,
        hash: item.FileHash,
        types: types,
        _types: _types,
        typeUrl: {}
      });
    });
    return list;
  },
  handleResult: function handleResult(rawData) {
    var rawList = [];
    rawData.forEach(function (item) {
      rawList.push(item);
      item.Grp.forEach(function (e) {
        return rawList.push(e);
      });
    });
    return this.filterList(rawList);
  },
  search: function search(str) {
    var _this = this;
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var limit = arguments.length > 2 ? arguments[2] : undefined;
    var retryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (++retryNum > 3) return Promise.reject(new Error('try max num'));
    if (limit == null) limit = this.limit;
    return this.musicSearch(str, page, limit).then(function (data) {
      var list = _this.handleResult(data.lists);
      if (!list) return _this.search(str, page, limit, retryNum);
      _this.total = data.total;
      _this.page = page;
      _this.allPage = Math.ceil(_this.total / limit);
      return Promise.resolve({
        list: list,
        allPage: _this.allPage,
        limit: limit,
        total: _this.total,
        source: 'kg'
      });
    });
  }
};
exports["default"] = _default;