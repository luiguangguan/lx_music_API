"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// import '../../polyfill/array.find'

var _require = require('../../request'),
  httpFetch = _require.httpFetch;
var _require2 = require('../index'),
  formatPlayTime = _require2.formatPlayTime,
  decodeName = _require2.decodeName;
// const { debug } = require('../../utils/env');
var _require3 = require('./util'),
  formatSinger = _require3.formatSinger;
var _default = {
  regExps: {
    mInfo: /level:(\w+),bitrate:(\d+),format:(\w+),size:([\w.]+)/
  },
  limit: 30,
  total: 0,
  page: 0,
  allPage: 1,
  // cancelFn: null,
  musicSearch: function musicSearch(str, page, limit) {
    var musicSearchRequestObj = httpFetch("http://search.kuwo.cn/r.s?client=kt&all=".concat(encodeURIComponent(str), "&pn=").concat(page - 1, "&rn=").concat(limit, "&uid=794762570&ver=kwplayer_ar_9.2.2.1&vipver=1&show_copyright_off=1&newver=1&ft=music&cluster=0&strategy=2012&encoding=utf8&rformat=json&vermerge=1&mobi=1&issubtitle=1"));
    return musicSearchRequestObj.promise;
  },
  // getImg(songId) {
  //   return httpGet(`http://player.kuwo.cn/webmusic/sj/dtflagdate?flag=6&rid=MUSIC_${songId}`)
  // },
  // getLrc(songId) {
  //   return httpGet(`http://mobile.kuwo.cn/mpage/html5/songinfoandlrc?mid=${songId}&flag=0`)
  // },
  handleResult: function handleResult(rawData) {
    var result = [];
    if (!rawData) return result;
    // console.log(rawData)
    for (var i = 0; i < rawData.length; i++) {
      var info = rawData[i];
      var songId = info.MUSICRID.replace('MUSIC_', '');
      // const format = (info.FORMATS || info.formats).split('|')

      if (!info.N_MINFO) {
        console.log('N_MINFO is undefined');
        return null;
      }
      var types = [];
      var _types = {};
      var infoArr = info.N_MINFO.split(';');
      var _iterator = _createForOfIteratorHelper(infoArr),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _info = _step.value;
          _info = _info.match(this.regExps.mInfo);
          if (_info) {
            switch (_info[2]) {
              case '4000':
                types.push({
                  type: 'flac24bit',
                  size: _info[4]
                });
                _types.flac24bit = {
                  size: _info[4].toLocaleUpperCase()
                };
                break;
              case '2000':
                types.push({
                  type: 'flac',
                  size: _info[4]
                });
                _types.flac = {
                  size: _info[4].toLocaleUpperCase()
                };
                break;
              case '320':
                types.push({
                  type: '320k',
                  size: _info[4]
                });
                _types['320k'] = {
                  size: _info[4].toLocaleUpperCase()
                };
                break;
              case '192':
              case '128':
                types.push({
                  type: '128k',
                  size: _info[4]
                });
                _types['128k'] = {
                  size: _info[4].toLocaleUpperCase()
                };
                break;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      types.reverse();
      var interval = parseInt(info.DURATION);
      result.push({
        name: decodeName(info.SONGNAME),
        singer: formatSinger(decodeName(info.ARTIST)),
        source: 'kw',
        // img = (info.album.name === '' || info.album.name === '空')
        //   ? `http://player.kuwo.cn/webmusic/sj/dtflagdate?flag=6&rid=MUSIC_160911.jpg`
        //   : `https://y.gtimg.cn/music/photo_new/T002R500x500M000${info.album.mid}.jpg`
        songmid: songId,
        albumId: decodeName(info.ALBUMID || ''),
        interval: Number.isNaN(interval) ? 0 : formatPlayTime(interval),
        albumName: info.ALBUM ? decodeName(info.ALBUM) : '',
        lrc: null,
        img: null,
        otherSource: null,
        types: types,
        _types: _types,
        typeUrl: {}
      });
    }
    // console.log(result)
    return result;
  },
  search: function search(str) {
    var _this = this;
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var limit = arguments.length > 2 ? arguments[2] : undefined;
    var retryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (retryNum > 2) return Promise.reject(new Error('try max num'));
    if (limit == null) limit = this.limit;
    // http://newlyric.kuwo.cn/newlyric.lrc?62355680
    return this.musicSearch(str, page, limit).then(function (_ref) {
      var result = _ref.body;
      // console.log(result)
      if (!result || result.TOTAL !== '0' && result.SHOW === '0') return _this.search(str, page, limit, ++retryNum);
      var list = _this.handleResult(result.abslist);
      if (list == null) return _this.search(str, page, limit, ++retryNum);
      _this.total = parseInt(result.TOTAL);
      _this.page = page;
      _this.allPage = Math.ceil(_this.total / limit);
      return Promise.resolve({
        list: list,
        allPage: _this.allPage,
        total: _this.total,
        limit: limit,
        source: 'kw'
      });
    });
  }
};
exports["default"] = _default;