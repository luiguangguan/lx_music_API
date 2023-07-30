"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
            o = it;
        var i = 0;
        var F = function F() { };
        return { s: F, n: function n() { if (i >= o.length)
                return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
} var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try {
        if (!normalCompletion && it["return"] != null)
            it["return"]();
    }
    finally {
        if (didErr)
            throw err;
    } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o)
    return; if (typeof o === "string")
    return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor)
    n = o.constructor.name; if (n === "Map" || n === "Set")
    return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length)
    len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i]; return arr2; }
var _require = require('../../request'), httpFetch = _require.httpFetch;
var _require2 = require('./util'), decodeLyric = _require2.decodeLyric;
var _require3 = require('../index'), decodeName = _require3.decodeName;
var headExp = /^.*\[id:\$\w+\]\n/;
var parseLyric = function parseLyric(str) {
    str = str.replace(/\r/g, '');
    if (headExp.test(str))
        str = str.replace(headExp, '');
    var trans = str.match(/\[language:([\w=\\/+]+)\]/);
    var lyric;
    var rlyric;
    var tlyric;
    if (trans) {
        str = str.replace(/\[language:[\w=\\/+]+\]\n/, '');
        var json = JSON.parse(Buffer.from(trans[1], 'base64').toString());
        var _iterator = _createForOfIteratorHelper(json.content), _step;
        try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                switch (item.type) {
                    case 0:
                        rlyric = item.lyricContent;
                        break;
                    case 1:
                        tlyric = item.lyricContent;
                        break;
                }
            }
        }
        catch (err) {
            _iterator.e(err);
        }
        finally {
            _iterator.f();
        }
    }
    var i = 0;
    var lxlyric = str.replace(/\[((\d+),\d+)\].*/g, function (str) {
        var _rlyric$i$join, _rlyric$i, _tlyric$i$join, _tlyric$i;
        var result = str.match(/\[((\d+),\d+)\].*/);
        var time = parseInt(result[2]);
        var ms = time % 1000;
        time /= 1000;
        var m = parseInt(time / 60).toString().padStart(2, '0');
        time %= 60;
        var s = parseInt(time).toString().padStart(2, '0');
        time = "".concat(m, ":").concat(s, ".").concat(ms);
        if (rlyric)
            rlyric[i] = "[".concat(time, "]").concat((_rlyric$i$join = (_rlyric$i = rlyric[i]) === null || _rlyric$i === void 0 ? void 0 : _rlyric$i.join('')) !== null && _rlyric$i$join !== void 0 ? _rlyric$i$join : '');
        if (tlyric)
            tlyric[i] = "[".concat(time, "]").concat((_tlyric$i$join = (_tlyric$i = tlyric[i]) === null || _tlyric$i === void 0 ? void 0 : _tlyric$i.join('')) !== null && _tlyric$i$join !== void 0 ? _tlyric$i$join : '');
        i++;
        return str.replace(result[1], time);
    });
    rlyric = rlyric ? rlyric.join('\n') : '';
    tlyric = tlyric ? tlyric.join('\n') : '';
    lxlyric = lxlyric.replace(/<(\d+,\d+),\d+>/g, '<$1>');
    lxlyric = decodeName(lxlyric);
    lyric = lxlyric.replace(/<\d+,\d+>/g, '');
    rlyric = decodeName(rlyric);
    tlyric = decodeName(tlyric);
    return {
        lyric: lyric,
        tlyric: tlyric,
        rlyric: rlyric,
        lxlyric: lxlyric
    };
};
var _default = {
    getIntv: function getIntv(interval) {
        var intvArr = interval.split(':');
        var intv = 0;
        var unit = 1;
        while (intvArr.length) {
            intv += intvArr.pop() * unit;
            unit *= 60;
        }
        return parseInt(intv);
    },
    // getLyric(songInfo, tryNum = 0) {
    //   let requestObj = httpFetch(`http://m.kugou.com/app/i/krc.php?cmd=100&keyword=${encodeURIComponent(songInfo.name)}&hash=${songInfo.hash}&timelength=${songInfo._interval || this.getIntv(songInfo.interval)}&d=0.38664927426725626`, {
    //     headers: {
    //       'KG-RC': 1,
    //       'KG-THash': 'expand_search_manager.cpp:852736169:451',
    //       'User-Agent': 'KuGou2012-9020-ExpandSearchManager',
    //     },
    //   })
    //   requestObj.promise = requestObj.promise.then(({ body, statusCode }) => {
    //     if (statusCode !== 200) {
    //       if (tryNum > 5) return Promise.reject('歌词获取失败')
    //       let tryRequestObj = this.getLyric(songInfo, ++tryNum)
    //       requestObj.cancelHttp = tryRequestObj.cancelHttp.bind(tryRequestObj)
    //       return tryRequestObj.promise
    //     }
    //     return {
    //       lyric: body,
    //       tlyric: '',
    //     }
    //   })
    //   return requestObj
    // },
    searchLyric: function searchLyric(name, hash, time) {
        var _this = this;
        var tryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var requestObj = httpFetch("http://lyrics.kugou.com/search?ver=1&man=yes&client=pc&keyword=".concat(encodeURIComponent(name), "&hash=").concat(hash, "&timelength=").concat(time), {
            headers: {
                'KG-RC': 1,
                'KG-THash': 'expand_search_manager.cpp:852736169:451',
                'User-Agent': 'KuGou2012-9020-ExpandSearchManager'
            }
        });
        requestObj.promise = requestObj.promise.then(function (_ref) {
            var body = _ref.body, statusCode = _ref.statusCode;
            if (statusCode !== 200) {
                if (tryNum > 5)
                    return Promise.reject('歌词获取失败');
                var tryRequestObj = _this.searchLyric(name, hash, time, ++tryNum);
                requestObj.cancelHttp = tryRequestObj.cancelHttp.bind(tryRequestObj);
                return tryRequestObj.promise;
            }
            if (body.candidates.length) {
                var info = body.candidates[0];
                return {
                    id: info.id,
                    accessKey: info.accesskey
                };
            }
            return null;
        });
        return requestObj;
    },
    getLyricDownload: function getLyricDownload(id, accessKey) {
        var _this2 = this;
        var tryNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var requestObj = httpFetch("http://lyrics.kugou.com/download?ver=1&client=pc&id=".concat(id, "&accesskey=").concat(accessKey, "&fmt=krc&charset=utf8"), {
            headers: {
                'KG-RC': 1,
                'KG-THash': 'expand_search_manager.cpp:852736169:451',
                'User-Agent': 'KuGou2012-9020-ExpandSearchManager'
            }
        });
        requestObj.promise = requestObj.promise.then(function (_ref2) {
            var body = _ref2.body, statusCode = _ref2.statusCode;
            if (statusCode !== 200) {
                if (tryNum > 5)
                    return Promise.reject('歌词获取失败');
                var tryRequestObj = _this2.getLyric(id, accessKey, ++tryNum);
                requestObj.cancelHttp = tryRequestObj.cancelHttp.bind(tryRequestObj);
                return tryRequestObj.promise;
            }
            return decodeLyric(body.content).then(function (result) {
                return parseLyric(result);
            });
        });
        return requestObj;
    },
    getLyric: function getLyric(songInfo) {
        var _this3 = this;
        var tryNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var requestObj = this.searchLyric(songInfo.name, songInfo.hash, songInfo._interval || this.getIntv(songInfo.interval));
        requestObj.promise = requestObj.promise.then(function (result) {
            if (!result)
                return Promise.reject(new Error('Get lyric failed'));
            var requestObj2 = _this3.getLyricDownload(result.id, result.accessKey);
            requestObj.cancelHttp = requestObj2.cancelHttp.bind(requestObj2);
            return requestObj2.promise;
        });
        return requestObj;
    }
};
exports["default"] = _default;
