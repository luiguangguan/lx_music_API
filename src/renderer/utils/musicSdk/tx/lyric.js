"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.decodeLyric = void 0;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var _require = require('../../request'),
  httpFetch = _require.httpFetch;
var getMusicInfo = require('./musicInfo');
var _require2 = require('@common/rendererIpc'),
  rendererInvoke = _require2.rendererInvoke;
var _require3 = require('@common/ipcNames'),
  WIN_MAIN_RENDERER_EVENT_NAME = _require3.WIN_MAIN_RENDERER_EVENT_NAME;
var songIdMap = new Map();
var promises = new Map();
var decodeLyric = function decodeLyric(lrc, tlrc, rlrc) {
  return rendererInvoke(WIN_MAIN_RENDERER_EVENT_NAME.handle_tx_decode_lyric, {
    lrc: lrc,
    tlrc: tlrc,
    rlrc: rlrc
  });
};
exports.decodeLyric = decodeLyric;
var parseTools = {
  rxps: {
    info: /^{"/,
    lineTime: /^\[(\d+),\d+\]/,
    lineTime2: /^\[([\d:.]+)\]/,
    wordTime: /\(\d+,\d+\)/,
    wordTimeAll: /(\(\d+,\d+\))/g,
    timeLabelFixRxp: /(?:\.0+|0+)$/
  },
  msFormat: function msFormat(timeMs) {
    if (Number.isNaN(timeMs)) return '';
    var ms = timeMs % 1000;
    timeMs /= 1000;
    var m = parseInt(timeMs / 60).toString().padStart(2, '0');
    timeMs %= 60;
    var s = parseInt(timeMs).toString().padStart(2, '0');
    return "[".concat(m, ":").concat(s, ".").concat(String(ms).padStart(3, '0'), "]");
  },
  parseLyric: function parseLyric(lrc) {
    var _this = this;
    lrc = lrc.trim();
    lrc = lrc.replace(/\r/g, '');
    if (!lrc) return {
      lyric: '',
      lxlyric: ''
    };
    var lines = lrc.split('\n');
    var lxlrcLines = [];
    var lrcLines = [];
    var _iterator = _createForOfIteratorHelper(lines),
      _step;
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
          if (_this.rxps.lineTime2.test(line)) {
            // lxlrcLines.push(line)
            lrcLines.push(line);
          }
          return "continue";
        }
        var startMsTime = parseInt(result[1]);
        var startTimeStr = _this.msFormat(startMsTime);
        if (!startTimeStr) return "continue";
        var words = line.replace(_this.rxps.lineTime, '');
        lrcLines.push("".concat(startTimeStr).concat(words.replace(_this.rxps.wordTimeAll, '')));
        var times = words.match(_this.rxps.wordTimeAll);
        if (!times) return "continue";
        times = times.map(function (time) {
          var result = /\((\d+),(\d+)\)/.exec(time);
          return "<".concat(Math.max(parseInt(result[1]) - startMsTime, 0), ",").concat(result[2], ">");
        });
        var wordArr = words.split(_this.rxps.wordTime);
        var newWords = times.map(function (time, index) {
          return "".concat(time).concat(wordArr[index]);
        }).join('');
        lxlrcLines.push("".concat(startTimeStr).concat(newWords));
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
  parseRlyric: function parseRlyric(lrc) {
    lrc = lrc.trim();
    lrc = lrc.replace(/\r/g, '');
    if (!lrc) return {
      lyric: '',
      lxlyric: ''
    };
    var lines = lrc.split('\n');
    var lrcLines = [];
    var _iterator2 = _createForOfIteratorHelper(lines),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var line = _step2.value;
        line = line.trim();
        var result = this.rxps.lineTime.exec(line);
        if (!result) continue;
        var startMsTime = parseInt(result[1]);
        var startTimeStr = this.msFormat(startMsTime);
        if (!startTimeStr) continue;
        var words = line.replace(this.rxps.lineTime, '');
        lrcLines.push("".concat(startTimeStr).concat(words.replace(this.rxps.wordTimeAll, '')));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return lrcLines.join('\n');
  },
  removeTag: function removeTag(str) {
    return str.replace(/^[\S\s]*?LyricContent="/, '').replace(/"\/>[\S\s]*?$/, '');
  },
  getIntv: function getIntv(interval) {
    if (!interval.includes('.')) interval += '.0';
    var arr = interval.split(/:|\./);
    while (arr.length < 3) arr.unshift('0');
    var _arr2 = _slicedToArray(arr, 3),
      m = _arr2[0],
      s = _arr2[1],
      ms = _arr2[2];
    return parseInt(m) * 3600000 + parseInt(s) * 1000 + parseInt(ms);
  },
  fixRlrcTimeTag: function fixRlrcTimeTag(rlrc, lrc) {
    var _this2 = this;
    // console.log(lrc)
    // console.log(rlrc)
    var rlrcLines = rlrc.split('\n');
    var lrcLines = lrc.split('\n');
    // let temp = []
    var newLrc = [];
    rlrcLines.forEach(function (line) {
      var result = _this2.rxps.lineTime2.exec(line);
      if (!result) return;
      var words = line.replace(_this2.rxps.lineTime2, '');
      if (!words.trim()) return;
      var t1 = _this2.getIntv(result[1]);
      while (lrcLines.length) {
        var lrcLine = lrcLines.shift();
        var lrcLineResult = _this2.rxps.lineTime2.exec(lrcLine);
        if (!lrcLineResult) continue;
        var t2 = _this2.getIntv(lrcLineResult[1]);
        if (Math.abs(t1 - t2) < 100) {
          newLrc.push(line.replace(_this2.rxps.lineTime2, lrcLineResult[0]));
          break;
        }
        // temp.push(line)
      }
      // lrcLines = [...temp, ...lrcLines]
      // temp = []
    });

    return newLrc.join('\n');
  },
  fixTlrcTimeTag: function fixTlrcTimeTag(tlrc, lrc) {
    var _this3 = this;
    // console.log(lrc)
    // console.log(tlrc)
    var tlrcLines = tlrc.split('\n');
    var lrcLines = lrc.split('\n');
    // let temp = []
    var newLrc = [];
    tlrcLines.forEach(function (line) {
      var result = _this3.rxps.lineTime2.exec(line);
      if (!result) return;
      var words = line.replace(_this3.rxps.lineTime2, '');
      if (!words.trim()) return;
      var time = result[1];
      if (time.includes('.')) {
        time += ''.padStart(3 - time.split('.')[1].length, '0');
      }
      var t1 = _this3.getIntv(time);
      while (lrcLines.length) {
        var lrcLine = lrcLines.shift();
        var lrcLineResult = _this3.rxps.lineTime2.exec(lrcLine);
        if (!lrcLineResult) continue;
        var t2 = _this3.getIntv(lrcLineResult[1]);
        if (Math.abs(t1 - t2) < 100) {
          newLrc.push(line.replace(_this3.rxps.lineTime2, lrcLineResult[0]));
          break;
        }
        // temp.push(line)
      }
      // lrcLines = [...temp, ...lrcLines]
      // temp = []
    });

    return newLrc.join('\n');
  },
  parse: function parse(lrc, tlrc, rlrc) {
    var info = {
      lyric: '',
      tlyric: '',
      rlyric: '',
      lxlyric: ''
    };
    if (lrc) {
      var _this$parseLyric = this.parseLyric(this.removeTag(lrc)),
        lyric = _this$parseLyric.lyric,
        lxlyric = _this$parseLyric.lxlyric;
      info.lyric = lyric;
      info.lxlyric = lxlyric;
      // console.log(lyric)
      // console.log(lxlyric)
    }

    if (rlrc) info.rlyric = this.fixRlrcTimeTag(this.parseRlyric(this.removeTag(rlrc)), info.lyric);
    if (tlrc) info.tlyric = this.fixTlrcTimeTag(tlrc, info.lyric);
    // console.log(info.lyric)
    // console.log(info.tlyric)
    // console.log(info.rlyric)

    return info;
  }
};
var _default = {
  successCode: 0,
  getSongId: function getSongId(_ref) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var songId, songmid, promise, info;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            songId = _ref.songId, songmid = _ref.songmid;
            if (!songId) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", songId);
          case 3:
            if (!songIdMap.has(songmid)) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return", songIdMap.get(songmid));
          case 5:
            if (!promises.has(songmid)) {
              _context.next = 9;
              break;
            }
            _context.next = 8;
            return promises.get(songmid);
          case 8:
            return _context.abrupt("return", _context.sent.songId);
          case 9:
            promise = getMusicInfo(songmid);
            promises.set(promise);
            _context.next = 13;
            return promise;
          case 13:
            info = _context.sent;
            songIdMap.set(songmid, info.songId);
            promises["delete"](songmid);
            return _context.abrupt("return", info.songId);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  parseLyric: function parseLyric(lrc, tlrc, rlrc) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _yield$decodeLyric, lyric, tlyric, rlyric;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return decodeLyric(lrc, tlrc, rlrc);
          case 2:
            _yield$decodeLyric = _context2.sent;
            lyric = _yield$decodeLyric.lyric;
            tlyric = _yield$decodeLyric.tlyric;
            rlyric = _yield$decodeLyric.rlyric;
            return _context2.abrupt("return", parseTools.parse(lyric, tlyric, rlyric));
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  getLyric: function getLyric(mInfo) {
    var _this4 = this;
    var retryNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (retryNum > 3) return Promise.reject(new Error('Get lyric failed'));
    return {
      cancelHttp: function cancelHttp() {},
      promise: this.getSongId(mInfo).then(function (songId) {
        var requestObj = httpFetch('https://u.y.qq.com/cgi-bin/musicu.fcg', {
          method: 'post',
          headers: {
            referer: 'https://y.qq.com',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
          },
          body: {
            comm: {
              ct: '19',
              cv: '1859',
              uin: '0'
            },
            req: {
              method: 'GetPlayLyricInfo',
              module: 'music.musichallSong.PlayLyricInfo',
              param: {
                format: 'json',
                crypt: 1,
                ct: 19,
                cv: 1873,
                interval: 0,
                lrc_t: 0,
                qrc: 1,
                qrc_t: 0,
                roma: 1,
                roma_t: 0,
                songID: songId,
                trans: 1,
                trans_t: 0,
                type: -1
              }
            }
          }
        });
        return requestObj.promise.then(function (_ref2) {
          var body = _ref2.body;
          // console.log(body)
          if (body.code != _this4.successCode || body.req.code != _this4.successCode) return _this4.getLyric(songId, ++retryNum);
          var data = body.req.data;
          return _this4.parseLyric(data.lyric, data.trans, data.roma);
        });
      })
    };
  }
}; // export default {
//   regexps: {
//     matchLrc: /.+"lyric":"([\w=+/]*)".+/,
//   },
//   getLyric(songmid) {
//     const requestObj = httpFetch(`https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?songmid=${songmid}&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&platform=yqq`, {
//       headers: {
//         Referer: 'https://y.qq.com/portal/player.html',
//       },
//     })
//     requestObj.promise = requestObj.promise.then(({ body }) => {
//       if (body.code != 0 || !body.lyric) return Promise.reject(new Error('Get lyric failed'))
//       return {
//         lyric: decodeName(b64DecodeUnicode(body.lyric)),
//         tlyric: decodeName(b64DecodeUnicode(body.trans)),
//       }
//     })
//     return requestObj
//   },
// }
exports["default"] = _default;