"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var _require = require('../../request'),
  httpFetch = _require.httpFetch;
var _require2 = require('./musicInfo'),
  _getMusicInfo = _require2.getMusicInfo;
var _require3 = require('./utils/mrc'),
  decrypt = _require3.decrypt;
var mrcTools = {
  rxps: {
    lineTime: /^\s*\[(\d+),\d+\]/,
    wordTime: /\(\d+,\d+\)/,
    wordTimeAll: /(\(\d+,\d+\))/g
  },
  parseLyric: function parseLyric(str) {
    var _this = this;
    str = str.replace(/\r/g, '');
    var lines = str.split('\n');
    var lxlrcLines = [];
    var lrcLines = [];
    var _iterator = _createForOfIteratorHelper(lines),
      _step;
    try {
      var _loop = function _loop() {
        var line = _step.value;
        if (line.length < 6) return "continue";
        var result = _this.rxps.lineTime.exec(line);
        if (!result) return "continue";
        var startTime = parseInt(result[1]);
        var time = startTime;
        var ms = time % 1000;
        time /= 1000;
        var m = parseInt(time / 60).toString().padStart(2, '0');
        time %= 60;
        var s = parseInt(time).toString().padStart(2, '0');
        time = "".concat(m, ":").concat(s, ".").concat(ms);
        var words = line.replace(_this.rxps.lineTime, '');
        lrcLines.push("[".concat(time, "]").concat(words.replace(_this.rxps.wordTimeAll, '')));
        var times = words.match(_this.rxps.wordTimeAll);
        if (!times) return "continue";
        times = times.map(function (time) {
          var result = /\((\d+),(\d+)\)/.exec(time);
          return "<".concat(parseInt(result[1]) - startTime, ",").concat(result[2], ">");
        });
        var wordArr = words.split(_this.rxps.wordTime);
        var newWords = times.map(function (time, index) {
          return "".concat(time).concat(wordArr[index]);
        }).join('');
        lxlrcLines.push("[".concat(time, "]").concat(newWords));
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _ret = _loop();
        if (_ret === "continue") continue;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return {
      lyric: lrcLines.join('\n'),
      lxlyric: lxlrcLines.join('\n')
    };
  },
  getText: function getText(url) {
    var _this2 = this;
    var tryNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var requestObj = httpFetch(url, {
      headers: {
        Referer: 'https://app.c.nf.migu.cn/',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
        channel: '0146921'
      }
    });
    return requestObj.promise.then(function (_ref) {
      var statusCode = _ref.statusCode,
        body = _ref.body;
      if (statusCode == 200) return body;
      if (tryNum > 5 || statusCode == 404) return Promise.reject('歌词获取失败');
      return _this2.getText(url, ++tryNum);
    });
  },
  getMrc: function getMrc(url) {
    var _this3 = this;
    return this.getText(url).then(function (text) {
      return _this3.parseLyric(decrypt(text));
    });
  },
  getLrc: function getLrc(url) {
    return this.getText(url).then(function (text) {
      return {
        lxlyric: '',
        lyric: text
      };
    });
  },
  getTrc: function getTrc(url) {
    if (!url) return Promise.resolve('');
    return this.getText(url);
  },
  getMusicInfo: function getMusicInfo(songInfo) {
    return songInfo.mrcUrl == null ? _getMusicInfo(songInfo.copyrightId) : songInfo;
  },
  getLyric: function getLyric(songInfo) {
    var _this4 = this;
    return {
      promise: this.getMusicInfo(songInfo).then(function (info) {
        var p;
        if (info.mrcUrl) p = _this4.getMrc(info.mrcUrl);else if (info.lrcUrl) p = _this4.getLrc(info.lrcUrl);
        if (p == null) return Promise.reject('获取歌词失败');
        return Promise.all([p, _this4.getTrc(info.trcUrl)]).then(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
            lrcInfo = _ref3[0],
            tlyric = _ref3[1];
          lrcInfo.tlyric = tlyric;
          return lrcInfo;
        });
      }),
      cancelHttp: function cancelHttp() {}
    };
  }
};
var _default = {
  getLyricWeb: function getLyricWeb(songInfo) {
    var _this5 = this;
    var tryNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // console.log(songInfo.copyrightId)
    if (songInfo.lrcUrl) {
      var requestObj = httpFetch(songInfo.lrcUrl);
      requestObj.promise = requestObj.promise.then(function (_ref4) {
        var body = _ref4.body,
          statusCode = _ref4.statusCode;
        if (statusCode !== 200) {
          if (tryNum > 5) return Promise.reject('歌词获取失败');
          var tryRequestObj = _this5.getLyricWeb(songInfo, ++tryNum);
          requestObj.cancelHttp = tryRequestObj.cancelHttp.bind(tryRequestObj);
          return tryRequestObj.promise;
        }
        return {
          lyric: body,
          tlyric: ''
        };
      });
      return requestObj;
    } else {
      var _requestObj = httpFetch("https://music.migu.cn/v3/api/music/audioPlayer/getLyric?copyrightId=".concat(songInfo.copyrightId), {
        headers: {
          Referer: 'https://music.migu.cn/v3/music/player/audio?from=migu'
        }
      });
      _requestObj.promise = _requestObj.promise.then(function (_ref5) {
        var body = _ref5.body;
        if (body.returnCode !== '000000' || !body.lyric) {
          if (tryNum > 5) return Promise.reject(new Error('Get lyric failed'));
          var tryRequestObj = _this5.getLyricWeb(songInfo, ++tryNum);
          _requestObj.cancelHttp = tryRequestObj.cancelHttp.bind(tryRequestObj);
          return tryRequestObj.promise;
        }
        return {
          lyric: body.lyric,
          tlyric: ''
        };
      });
      return _requestObj;
    }
  },
  getLyric: function getLyric(songInfo) {
    var _this6 = this;
    var requestObj = mrcTools.getLyric(songInfo);
    requestObj.promise = requestObj.promise["catch"](function () {
      var webRequestObj = _this6.getLyricWeb(songInfo);
      requestObj.cancelHttp = webRequestObj.cancelHttp.bind(webRequestObj);
      return webRequestObj.promise;
    });
    return requestObj;
  }
};
exports["default"] = _default;