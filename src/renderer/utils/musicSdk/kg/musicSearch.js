"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var _require = require('../../request'),
  httpFetch = _require.httpFetch;
var _require2 = require('../index'),
  decodeName = _require2.decodeName,
  formatPlayTime = _require2.formatPlayTime,
  sizeFormate = _require2.sizeFormate;
var _require3 = require('../utils'),
  formatSingerName = _require3.formatSingerName;
var _default = {
  limit: 30,
  total: 0,
  page: 0,
  allPage: 1,
  musicSearch: function musicSearch(str, page, limit) {
    var searchRequest = httpFetch("https://songsearch.kugou.com/song_search_v2?keyword=".concat(encodeURIComponent(str), "&page=").concat(page, "&pagesize=").concat(limit, "&userid=0&clientver=&platform=WebFilter&filter=2&iscorrection=1&privilege_filter=0"));
    return searchRequest.promise.then(function (_ref) {
      var body = _ref.body;
      return body;
    });
  },
  filterData: function filterData(rawData) {
    var types = [];
    var _types = {};
    if (rawData.FileSize !== 0) {
      var size = sizeFormate(rawData.FileSize);
      types.push({
        type: '128k',
        size: size,
        hash: rawData.FileHash
      });
      _types['128k'] = {
        size: size,
        hash: rawData.FileHash
      };
    }
    if (rawData.HQFileSize !== 0) {
      var _size = sizeFormate(rawData.HQFileSize);
      types.push({
        type: '320k',
        size: _size,
        hash: rawData.HQFileHash
      });
      _types['320k'] = {
        size: _size,
        hash: rawData.HQFileHash
      };
    }
    if (rawData.SQFileSize !== 0) {
      var _size2 = sizeFormate(rawData.SQFileSize);
      types.push({
        type: 'flac',
        size: _size2,
        hash: rawData.SQFileHash
      });
      _types.flac = {
        size: _size2,
        hash: rawData.SQFileHash
      };
    }
    if (rawData.ResFileSize !== 0) {
      var _size3 = sizeFormate(rawData.ResFileSize);
      types.push({
        type: 'flac24bit',
        size: _size3,
        hash: rawData.ResFileHash
      });
      _types.flac24bit = {
        size: _size3,
        hash: rawData.ResFileHash
      };
    }
    return {
      singer: decodeName(formatSingerName(rawData.Singers, 'name')),
      name: decodeName(rawData.SongName),
      albumName: decodeName(rawData.AlbumName),
      albumId: rawData.AlbumID,
      songmid: rawData.Audioid,
      source: 'kg',
      interval: formatPlayTime(rawData.Duration),
      _interval: rawData.Duration,
      img: null,
      lrc: null,
      otherSource: null,
      hash: rawData.FileHash,
      types: types,
      _types: _types,
      typeUrl: {}
    };
  },
  handleResult: function handleResult(rawData) {
    var _this = this;
    var ids = new Set();
    var list = [];
    rawData.forEach(function (item) {
      var key = item.Audioid + item.FileHash;
      if (ids.has(key)) return;
      ids.add(key);
      list.push(_this.filterData(item));
      var _iterator = _createForOfIteratorHelper(item.Grp),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var childItem = _step.value;
          var _key = item.Audioid + item.FileHash;
          if (ids.has(_key)) continue;
          ids.add(_key);
          list.push(_this.filterData(childItem));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    return list;
  },
  search: function search(str) {
    var _this2 = this;
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var limit = arguments.length > 2 ? arguments[2] : undefined;
    var retryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (++retryNum > 3) return Promise.reject(new Error('try max num'));
    if (limit == null) limit = this.limit;
    // http://newlyric.kuwo.cn/newlyric.lrc?62355680
    return this.musicSearch(str, page, limit).then(function (result) {
      if (!result || result.error_code !== 0) return _this2.search(str, page, limit, retryNum);
      var list = _this2.handleResult(result.data.lists);
      if (list == null) return _this2.search(str, page, limit, retryNum);
      _this2.total = result.data.total;
      _this2.page = page;
      _this2.allPage = Math.ceil(_this2.total / limit);
      return Promise.resolve({
        list: list,
        allPage: _this2.allPage,
        limit: limit,
        total: _this2.total,
        source: 'kg'
      });
    });
  }
};
exports["default"] = _default;