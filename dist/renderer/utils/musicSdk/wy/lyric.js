"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr))
    return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
            if (Object(_i) !== _i)
                return;
            _n = !1;
        }
        else
            for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
                ;
    }
    catch (err) {
        _d = !0, _e = err;
    }
    finally {
        try {
            if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
                return;
        }
        finally {
            if (_d)
                throw _e;
        }
    }
    return _arr;
} }
function _arrayWithHoles(arr) { if (Array.isArray(arr))
    return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
            o = it;
        var i = 0;
        var F = function F() { };
        return { s: F, n: function n() { if (i >= o.length)
                return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
} var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try {
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
var _require2 = require('./utils/crypto'), eapi = _require2.eapi;
// const { decodeName } = require('../..');
// const parseLyric = (str, lrc) => {
//   if (!str) return ''
//   str = str.replace(/\r/g, '')
//   let lxlyric = str.replace(/\[((\d+),\d+)\].*/g, str => {
//     let result = str.match(/\[((\d+),\d+)\].*/)
//     let time = parseInt(result[2])
//     let ms = time % 1000
//     time /= 1000
//     let m = parseInt(time / 60).toString().padStart(2, '0')
//     time %= 60
//     let s = parseInt(time).toString().padStart(2, '0')
//     time = `${m}:${s}.${ms}`
//     str = str.replace(result[1], time)
//     let startTime = 0
//     str = str.replace(/\(0,1\) /g, ' ').replace(/\(\d+,\d+\)/g, time => {
//       const [start, end] = time.replace(/^\((\d+,\d+)\)$/, '$1').split(',')
//       time = `<${parseInt(startTime + parseInt(start))},${end}>`
//       startTime = parseInt(startTime + parseInt(end))
//       return time
//     })
//     return str
//   })
//   lxlyric = decodeName(lxlyric)
//   return lxlyric.trim()
// }
var eapiRequest = function eapiRequest(url, data) {
    return httpFetch('https://interface3.music.163.com/eapi/song/lyric/v1', {
        method: 'post',
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
            origin: 'https://music.163.com'
            // cookie: 'os=pc; deviceId=A9C064BB4584D038B1565B58CB05F95290998EE8B025AA2D07AE; osver=Microsoft-Windows-10-Home-China-build-19043-64bit; appver=2.5.2.197409; channel=netease; MUSIC_A=37a11f2eb9de9930cad479b2ad495b0e4c982367fb6f909d9a3f18f876c6b49faddb3081250c4980dd7e19d4bd9bf384e004602712cf2b2b8efaafaab164268a00b47359f85f22705cc95cb6180f3aee40f5be1ebf3148d888aa2d90636647d0c3061cd18d77b7a0; __csrf=05b50d54082694f945d7de75c210ef94; mode=Z7M-KP5(7)GZ; NMTID=00OZLp2VVgq9QdwokUgq3XNfOddQyIAAAF_6i8eJg; ntes_kaola_ad=1',
        },
        form: eapi(url, data)
    });
    // requestObj.promise = requestObj.promise.then(({ body }) => {
    //   // console.log(raw)
    //   console.log(body)
    //   // console.log(eapiDecrypt(raw))
    //   // return eapiDecrypt(raw)
    //   return body
    // })
    // return requestObj
};
var parseTools = {
    rxps: {
        info: /^{"/,
        lineTime: /^\[(\d+),\d+\]/,
        wordTime: /\(\d+,\d+,\d+\)/,
        wordTimeAll: /(\(\d+,\d+,\d+\))/g
    },
    msFormat: function msFormat(timeMs) {
        if (Number.isNaN(timeMs))
            return '';
        var ms = timeMs % 1000;
        timeMs /= 1000;
        var m = parseInt(timeMs / 60).toString().padStart(2, '0');
        timeMs %= 60;
        var s = parseInt(timeMs).toString().padStart(2, '0');
        return "[".concat(m, ":").concat(s, ".").concat(ms, "]");
    },
    parseLyric: function parseLyric(lines) {
        var _this = this;
        var lxlrcLines = [];
        var lrcLines = [];
        var _iterator = _createForOfIteratorHelper(lines), _step;
        try {
            var _loop = function _loop() {
                var line = _step.value;
                line = line.trim();
                var result = _this.rxps.lineTime.exec(line);
                if (!result) {
                    if (line.startsWith('[offset')) {
                        lxlrcLines.push(line);
                        lrcLines.push(line);
                    }
                    return "continue";
                }
                var startMsTime = parseInt(result[1]);
                var startTimeStr = _this.msFormat(startMsTime);
                if (!startTimeStr)
                    return "continue";
                var words = line.replace(_this.rxps.lineTime, '');
                lrcLines.push("".concat(startTimeStr).concat(words.replace(_this.rxps.wordTimeAll, '')));
                var times = words.match(_this.rxps.wordTimeAll);
                if (!times)
                    return "continue";
                times = times.map(function (time) {
                    var result = /\((\d+),(\d+),\d+\)/.exec(time);
                    return "<".concat(Math.max(parseInt(result[1]) - startMsTime, 0), ",").concat(result[2], ">");
                });
                var wordArr = words.split(_this.rxps.wordTime);
                wordArr.shift();
                var newWords = times.map(function (time, index) {
                    return "".concat(time).concat(wordArr[index]);
                }).join('');
                lxlrcLines.push("".concat(startTimeStr).concat(newWords));
            };
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _ret = _loop();
                if (_ret === "continue")
                    continue;
            }
        }
        catch (err) {
            _iterator.e(err);
        }
        finally {
            _iterator.f();
        }
        return {
            lyric: lrcLines.join('\n'),
            lxlyric: lxlrcLines.join('\n')
        };
    },
    parseHeaderInfo: function parseHeaderInfo(str) {
        var _this2 = this;
        str = str.trim();
        str = str.replace(/\r/g, '');
        if (!str)
            return null;
        var lines = str.split('\n');
        return lines.map(function (line) {
            if (!_this2.rxps.info.test(line))
                return line;
            try {
                var info = JSON.parse(line);
                var timeTag = _this2.msFormat(info.t);
                return timeTag ? "".concat(timeTag).concat(info.c.map(function (t) {
                    return t.tx;
                }).join('')) : '';
            }
            catch (_unused) {
                return '';
            }
        });
    },
    getIntv: function getIntv(interval) {
        if (!interval.includes('.'))
            interval += '.0';
        var arr = interval.split(/:|\./);
        while (arr.length < 3)
            arr.unshift('0');
        var _arr2 = _slicedToArray(arr, 3), m = _arr2[0], s = _arr2[1], ms = _arr2[2];
        return parseInt(m) * 3600000 + parseInt(s) * 1000 + parseInt(ms);
    },
    fixTimeTag: function fixTimeTag(lrc, targetlrc) {
        var _this3 = this;
        var lrcLines = lrc.split('\n');
        var targetlrcLines = targetlrc.split('\n');
        var timeRxp = /^\[([\d:.]+)\]/;
        var temp = [];
        var newLrc = [];
        targetlrcLines.forEach(function (line) {
            var result = timeRxp.exec(line);
            if (!result)
                return;
            var words = line.replace(timeRxp, '');
            if (!words.trim())
                return;
            var t1 = _this3.getIntv(result[1]);
            while (lrcLines.length) {
                var lrcLine = lrcLines.shift();
                var lrcLineResult = timeRxp.exec(lrcLine);
                if (!lrcLineResult)
                    continue;
                var t2 = _this3.getIntv(lrcLineResult[1]);
                if (Math.abs(t1 - t2) < 100) {
                    var _lrc = line.replace(timeRxp, lrcLineResult[0]).trim();
                    if (!_lrc)
                        continue;
                    newLrc.push(_lrc);
                    break;
                }
                temp.push(lrcLine);
            }
            lrcLines = [].concat(_toConsumableArray(temp), _toConsumableArray(lrcLines));
            temp = [];
        });
        return newLrc.join('\n');
    },
    parse: function parse(ylrc, ytlrc, yrlrc, lrc, tlrc, rlrc) {
        var info = {
            lyric: '',
            tlyric: '',
            rlyric: '',
            lxlyric: ''
        };
        if (ylrc) {
            var lines = this.parseHeaderInfo(ylrc);
            if (lines) {
                var result = this.parseLyric(lines);
                if (ytlrc) {
                    var _lines = this.parseHeaderInfo(ytlrc);
                    if (_lines) {
                        // if (lines.length == result.lyricLines.length) {
                        info.tlyric = this.fixTimeTag(result.lyric, _lines.join('\n'));
                        // } else info.tlyric = lines.join('\n')
                    }
                }
                if (yrlrc) {
                    var _lines2 = this.parseHeaderInfo(yrlrc);
                    if (_lines2) {
                        // if (lines.length == result.lyricLines.length) {
                        info.rlyric = this.fixTimeTag(result.lyric, _lines2.join('\n'));
                        // } else info.rlyric = lines.join('\n')
                    }
                }
                var timeRxp = /^\[[\d:.]+\]/;
                var headers = lines.filter(function (l) {
                    return timeRxp.test(l);
                }).join('\n');
                info.lyric = "".concat(headers, "\n").concat(result.lyric);
                info.lxlyric = result.lxlyric;
                return info;
            }
        }
        if (lrc) {
            var _lines3 = this.parseHeaderInfo(lrc);
            if (_lines3)
                info.lyric = _lines3.join('\n');
        }
        if (tlrc) {
            var _lines4 = this.parseHeaderInfo(tlrc);
            if (_lines4)
                info.tlyric = _lines4.join('\n');
        }
        if (rlrc) {
            var _lines5 = this.parseHeaderInfo(rlrc);
            if (_lines5)
                info.rlyric = _lines5.join('\n');
        }
        return info;
    }
};
// https://github.com/Binaryify/NeteaseCloudMusicApi/pull/1523/files
// export default songmid => {
//   const requestObj = httpFetch('https://music.163.com/api/linux/forward', {
//     method: 'post',
//     'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
//     form: linuxapi({
//       method: 'POST',
//       url: 'https://music.163.com/api/song/lyric?_nmclfl=1',
//       params: {
//         id: songmid,
//         tv: -1,
//         lv: -1,
//         rv: -1,
//         kv: -1,
//       },
//     }),
//   })
//   requestObj.promise = requestObj.promise.then(({ body }) => {
//     if (body.code !== 200 || !body?.lrc?.lyric) return Promise.reject(new Error('Get lyric failed'))
//     // console.log(body)
//     return {
//       lyric: body.lrc.lyric,
//       tlyric: body.tlyric?.lyric ?? '',
//       rlyric: body.romalrc?.lyric ?? '',
//       // lxlyric: parseLyric(body.klyric.lyric),
//     }
//   })
//   return requestObj
// }
// https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/module/lyric_new.js
var _default = function _default(songmid) {
    var requestObj = eapiRequest('/api/song/lyric/v1', {
        id: songmid,
        cp: false,
        tv: 0,
        lv: 0,
        rv: 0,
        kv: 0,
        yv: 0,
        ytv: 0,
        yrv: 0
    });
    requestObj.promise = requestObj.promise.then(function (_ref) {
        var _body$lrc, _body$yrc, _body$ytlrc, _body$yromalrc, _body$tlyric, _body$romalrc;
        var body = _ref.body;
        // console.log(body)
        if (body.code !== 200 || !(body !== null && body !== void 0 && (_body$lrc = body.lrc) !== null && _body$lrc !== void 0 && _body$lrc.lyric))
            return Promise.reject(new Error('Get lyric failed'));
        var info = parseTools.parse((_body$yrc = body.yrc) === null || _body$yrc === void 0 ? void 0 : _body$yrc.lyric, (_body$ytlrc = body.ytlrc) === null || _body$ytlrc === void 0 ? void 0 : _body$ytlrc.lyric, (_body$yromalrc = body.yromalrc) === null || _body$yromalrc === void 0 ? void 0 : _body$yromalrc.lyric, body.lrc.lyric, (_body$tlyric = body.tlyric) === null || _body$tlyric === void 0 ? void 0 : _body$tlyric.lyric, (_body$romalrc = body.romalrc) === null || _body$romalrc === void 0 ? void 0 : _body$romalrc.lyric);
        // console.log(info)
        if (!info.lyric)
            return Promise.reject(new Error('Get lyric failed'));
        return info;
    });
    return requestObj;
};
exports["default"] = _default;
