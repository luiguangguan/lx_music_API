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
var _require2 = require('./util'),
  decodeLyric = _require2.decodeLyric,
  lrcTools = _require2.lrcTools;
var _require3 = require('../index'),
  decodeName = _require3.decodeName;

/*
export default {
  formatTime(time) {
    let m = parseInt(time / 60)
    let s = (time % 60).toFixed(2)
    return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s)
  },
  sortLrcArr(arr) {
    const lrcSet = new Set()
    let lrc = []
    let lrcT = []

    for (const item of arr) {
      if (lrcSet.has(item.time)) {
        const tItem = lrc.pop()
        tItem.time = lrc[lrc.length - 1].time
        lrcT.push(tItem)
        lrc.push(item)
      } else {
        lrc.push(item)
        lrcSet.add(item.time)
      }
    }

    if (lrcT.length && lrc.length > lrcT.length) {
      const tItem = lrc.pop()
      tItem.time = lrc[lrc.length - 1].time
      lrcT.push(tItem)
    }

    return {
      lrc,
      lrcT,
    }
  },
  transformLrc(songinfo, lrclist) {
    return `[ti:${songinfo.songName}]\n[ar:${songinfo.artist}]\n[al:${songinfo.album}]\n[by:]\n[offset:0]\n${lrclist ? lrclist.map(l => `[${this.formatTime(l.time)}]${l.lineLyric}\n`).join('') : '暂无歌词'}`
  },
  getLyric(songId) {
    const requestObj = httpFetch(`http://m.kuwo.cn/newh5/singles/songinfoandlrc?musicId=${songId}`)
    requestObj.promise = requestObj.promise.then(({ body }) => {
      // console.log(body)
      if (!body.data?.lrclist?.length) return Promise.reject(new Error('Get lyric failed'))
      let lrcInfo
      try {
        lrcInfo = this.sortLrcArr(body.data.lrclist)
      } catch {
        return Promise.reject(new Error('Get lyric failed'))
      }
      // console.log(body.data.lrclist)
      // console.log(lrcInfo.lrc, lrcInfo.lrcT)
      // console.log({
      //   lyric: decodeName(this.transformLrc(body.data.songinfo, lrc)),
      //   tlyric: decodeName(this.transformLrc(body.data.songinfo, lrcT)),
      // })
      return {
        lyric: decodeName(this.transformLrc(body.data.songinfo, lrcInfo.lrc)),
        tlyric: lrcInfo.lrcT.length ? decodeName(this.transformLrc(body.data.songinfo, lrcInfo.lrcT)) : '',
      }
    })
    return requestObj
  },
}
 */

var buf_key = Buffer.from('yeelion');
var buf_key_len = buf_key.length;
var buildParams = function buildParams(id, isGetLyricx) {
  var params = "user=12345,web,web,web&requester=localhost&req=1&rid=MUSIC_".concat(id);
  if (isGetLyricx) params += '&lrcx=1';
  var buf_str = Buffer.from(params);
  var buf_str_len = buf_str.length;
  var output = new Uint16Array(buf_str_len);
  var i = 0;
  while (i < buf_str_len) {
    var j = 0;
    while (j < buf_key_len && i < buf_str_len) {
      output[i] = buf_key[j] ^ buf_str[i];
      i++;
      j++;
    }
  }
  return Buffer.from(output).toString('base64');
};

// console.log(buildParams('207527604', false))
// console.log(buildParams('207527604', true))

var timeExp = /^\[([\d:.]*)\]{1}/g;
var existTimeExp = /\[\d{1,2}:.*\d{1,4}\]/;
var _default = {
  /* sortLrcArr(arr) {
    const lrcSet = new Set()
    let lrc = []
    let lrcT = []
    let markIndex = []
    for (const item of arr) {
      if (lrcSet.has(item.time)) {
        if (lrc.length < 2) continue
        const index = lrc.findIndex(l => l.time == item.time)
        markIndex.push(index)
        if (index == lrc.length - 1) {
          lrcT.push({ ...lrc[index], time: item.time })
          lrc.push(item)
        } else {
          lrcT.push({ ...lrc[index], time: lrc[index + 1].time })
          if (item.text) {
            //   const lastIndex = lrc.length - 1
            //   markIndex.push(lastIndex)
            //   lrcT.push({ ...lrc[lastIndex], time: lrc[lastIndex - 1].time })
            lrc.push(item)
          }
        }
      } else {
        lrc.push(item)
        lrcSet.add(item.time)
      }
    }
      // console.log(markIndex)
    markIndex = Array.from(new Set(markIndex))
    for (let index = markIndex.length - 1; index >= 0; index--) {
      lrc.splice(markIndex[index], 1)
    }
      // if (lrcT.length) {
    //   if (lrc.length * 0.4 < lrcT.length) { // 翻译数量需大于歌词数量的0.4倍，否则认为没有翻译
    //     const tItem = lrc.pop()
    //     tItem.time = lrc[lrc.length - 1].time
    //     lrcT.push(tItem)
    //   } else {
    //     lrc = arr
    //     lrcT = []
    //   }
    // }
      console.log(lrc, lrcT)
      return {
      lrc,
      lrcT,
    }
  }, */
  sortLrcArr: function sortLrcArr(arr) {
    var lrcSet = new Set();
    var lrc = [];
    var lrcT = [];
    var _iterator = _createForOfIteratorHelper(arr),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        if (lrcSet.has(item.time)) {
          if (lrc.length < 2) continue;
          var tItem = lrc.pop();
          tItem.time = lrc[lrc.length - 1].time;
          lrcT.push(tItem);
          lrc.push(item);
        } else {
          lrc.push(item);
          lrcSet.add(item.time);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (lrcT.length > lrc.length * 0.3) {
      throw new Error('failed');
      // if (lrc.length * 0.4 < lrcT.length) { // 翻译数量需大于歌词数量的0.4倍，否则认为没有翻译
      //   const tItem = lrc.pop()
      //   tItem.time = lrc[lrc.length - 1].time
      //   lrcT.push(tItem)
      // } else {
      //   lrc = arr
      //   lrcT = []
      // }
    }

    return {
      lrc: lrc,
      lrcT: lrcT
    };
  },
  transformLrc: function transformLrc(tags, lrclist) {
    return "".concat(tags.join('\n'), "\n").concat(lrclist ? lrclist.map(function (l) {
      return "[".concat(l.time, "]").concat(l.text, "\n");
    }).join('') : '暂无歌词');
  },
  parseLrc: function parseLrc(lrc) {
    var lines = lrc.split(/\r\n|\r|\n/);
    var tags = [];
    var lrcArr = [];
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      var result = timeExp.exec(line);
      if (result) {
        var text = line.replace(timeExp, '').trim();
        var time = RegExp.$1;
        if (/\.\d\d$/.test(time)) time += '0';
        lrcArr.push({
          time: time,
          text: text
        });
      } else if (lrcTools.rxps.tagLine.test(line)) {
        tags.push(line);
      }
    }
    var lrcInfo = this.sortLrcArr(lrcArr);
    return {
      lyric: decodeName(this.transformLrc(tags, lrcInfo.lrc)),
      tlyric: lrcInfo.lrcT.length ? decodeName(this.transformLrc(tags, lrcInfo.lrcT)) : ''
    };
  },
  // getLyric2(musicInfo, isGetLyricx = true) {
  //   const requestObj = httpFetch(`http://newlyric.kuwo.cn/newlyric.lrc?${buildParams(musicInfo.songmid, isGetLyricx)}`)
  //   requestObj.promise = requestObj.promise.then(({ statusCode, body, raw }) => {
  //     if (statusCode != 200) return Promise.reject(new Error(JSON.stringify(body)))
  //     return decodeLyric({ lrcBase64: raw.toString('base64'), isGetLyricx }).then(base64Data => {
  //       let lrcInfo
  //       console.log(Buffer.from(base64Data, 'base64').toString())
  //       try {
  //         lrcInfo = this.parseLrc(Buffer.from(base64Data, 'base64').toString())
  //       } catch {
  //         return Promise.reject(new Error('Get lyric failed'))
  //       }
  //       if (lrcInfo.tlyric) lrcInfo.tlyric = lrcInfo.tlyric.replace(lrcTools.rxps.wordTimeAll, '')
  //       lrcInfo.lxlyric = lrcTools.parse(lrcInfo.lyric)
  //       // console.log(lrcInfo.lyric)
  //       // console.log(lrcInfo.tlyric)
  //       // console.log(lrcInfo.lxlyric)
  //       // console.log(JSON.stringify(lrcInfo))
  //     })
  //   })
  //   return requestObj
  // },
  getLyric: function getLyric(musicInfo) {
    var _this = this;
    var isGetLyricx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    // this.getLyric2(musicInfo)
    var requestObj = httpFetch("http://newlyric.kuwo.cn/newlyric.lrc?".concat(buildParams(musicInfo.songmid, isGetLyricx)));
    requestObj.promise = requestObj.promise.then(function (_ref) {
      var statusCode = _ref.statusCode,
        body = _ref.body,
        raw = _ref.raw;
      if (statusCode != 200) return Promise.reject(new Error(JSON.stringify(body)));
      return decodeLyric({
        lrcBase64: raw.toString('base64'),
        isGetLyricx: isGetLyricx
      }).then(function (base64Data) {
        // let lrcInfo
        // try {
        //   lrcInfo = this.parseLrc(Buffer.from(base64Data, 'base64').toString())
        // } catch {
        //   return Promise.reject(new Error('Get lyric failed'))
        // }
        var lrcInfo;
        // console.log(Buffer.from(base64Data, 'base64').toString())
        try {
          lrcInfo = _this.parseLrc(Buffer.from(base64Data, 'base64').toString());
        } catch (err) {
          return Promise.reject(new Error('Get lyric failed'));
        }
        // console.log(lrcInfo)
        if (lrcInfo.tlyric) lrcInfo.tlyric = lrcInfo.tlyric.replace(lrcTools.rxps.wordTimeAll, '');
        try {
          lrcInfo.lxlyric = lrcTools.parse(lrcInfo.lyric);
        } catch (_unused) {
          lrcInfo.lxlyric = '';
        }
        lrcInfo.lyric = lrcInfo.lyric.replace(lrcTools.rxps.wordTimeAll, '');
        if (!existTimeExp.test(lrcInfo.lyric)) return Promise.reject(new Error('Get lyric failed'));
        // console.log(lrcInfo)
        return lrcInfo;
      });
    });
    return requestObj;
  }
};
exports["default"] = _default;