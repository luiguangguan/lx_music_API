"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var _require = require('../../request'),
  httpFetch = _require.httpFetch;
var _require2 = require('../index'),
  formatPlayTime = _require2.formatPlayTime,
  decodeName = _require2.decodeName;
var _require3 = require('./util'),
  formatSinger = _require3.formatSinger;
var boardList = [{
  id: 'kw__93',
  name: '飙升榜',
  bangid: '93'
}, {
  id: 'kw__17',
  name: '新歌榜',
  bangid: '17'
}, {
  id: 'kw__16',
  name: '热歌榜',
  bangid: '16'
}, {
  id: 'kw__158',
  name: '抖音热歌榜',
  bangid: '158'
}, {
  id: 'kw__292',
  name: '铃声榜',
  bangid: '292'
}, {
  id: 'kw__284',
  name: '热评榜',
  bangid: '284'
}, {
  id: 'kw__290',
  name: 'ACG新歌榜',
  bangid: '290'
}, {
  id: 'kw__286',
  name: '台湾KKBOX榜',
  bangid: '286'
}, {
  id: 'kw__279',
  name: '冬日暖心榜',
  bangid: '279'
}, {
  id: 'kw__281',
  name: '巴士随身听榜',
  bangid: '281'
}, {
  id: 'kw__255',
  name: 'KTV点唱榜',
  bangid: '255'
}, {
  id: 'kw__280',
  name: '家务进行曲榜',
  bangid: '280'
}, {
  id: 'kw__282',
  name: '熬夜修仙榜',
  bangid: '282'
}, {
  id: 'kw__283',
  name: '枕边轻音乐榜',
  bangid: '283'
}, {
  id: 'kw__278',
  name: '古风音乐榜',
  bangid: '278'
}, {
  id: 'kw__264',
  name: 'Vlog音乐榜',
  bangid: '264'
}, {
  id: 'kw__242',
  name: '电音榜',
  bangid: '242'
}, {
  id: 'kw__187',
  name: '流行趋势榜',
  bangid: '187'
}, {
  id: 'kw__204',
  name: '现场音乐榜',
  bangid: '204'
}, {
  id: 'kw__186',
  name: 'ACG神曲榜',
  bangid: '186'
}, {
  id: 'kw__185',
  name: '最强翻唱榜',
  bangid: '185'
}, {
  id: 'kw__26',
  name: '经典怀旧榜',
  bangid: '26'
}, {
  id: 'kw__104',
  name: '华语榜',
  bangid: '104'
}, {
  id: 'kw__182',
  name: '粤语榜',
  bangid: '182'
}, {
  id: 'kw__22',
  name: '欧美榜',
  bangid: '22'
}, {
  id: 'kw__184',
  name: '韩语榜',
  bangid: '184'
}, {
  id: 'kw__183',
  name: '日语榜',
  bangid: '183'
}, {
  id: 'kw__145',
  name: '会员畅听榜',
  bangid: '145'
}, {
  id: 'kw__153',
  name: '网红新歌榜',
  bangid: '153'
}, {
  id: 'kw__64',
  name: '影视金曲榜',
  bangid: '64'
}, {
  id: 'kw__176',
  name: 'DJ嗨歌榜',
  bangid: '176'
}, {
  id: 'kw__106',
  name: '真声音',
  bangid: '106'
}, {
  id: 'kw__12',
  name: 'Billboard榜',
  bangid: '12'
}, {
  id: 'kw__49',
  name: 'iTunes音乐榜',
  bangid: '49'
}, {
  id: 'kw__180',
  name: 'beatport电音榜',
  bangid: '180'
}, {
  id: 'kw__13',
  name: '英国UK榜',
  bangid: '13'
}, {
  id: 'kw__164',
  name: '百大DJ榜',
  bangid: '164'
}, {
  id: 'kw__246',
  name: 'YouTube音乐排行榜',
  bangid: '246'
}, {
  id: 'kw__265',
  name: '韩国Genie榜',
  bangid: '265'
}, {
  id: 'kw__14',
  name: '韩国M-net榜',
  bangid: '14'
}, {
  id: 'kw__8',
  name: '香港电台榜',
  bangid: '8'
}, {
  id: 'kw__15',
  name: '日本公信榜',
  bangid: '15'
}, {
  id: 'kw__151',
  name: '腾讯音乐人原创榜',
  bangid: '151'
}];
var _default = {
  list: [{
    id: 'kwbiaosb',
    name: '飙升榜',
    bangid: 93
  }, {
    id: 'kwregb',
    name: '热歌榜',
    bangid: 16
  }, {
    id: 'kwhuiyb',
    name: '会员榜',
    bangid: 145
  }, {
    id: 'kwdouyb',
    name: '抖音榜',
    bangid: 158
  }, {
    id: 'kwqsb',
    name: '趋势榜',
    bangid: 187
  }, {
    id: 'kwhuaijb',
    name: '怀旧榜',
    bangid: 26
  }, {
    id: 'kwhuayb',
    name: '华语榜',
    bangid: 104
  }, {
    id: 'kwyueyb',
    name: '粤语榜',
    bangid: 182
  }, {
    id: 'kwoumb',
    name: '欧美榜',
    bangid: 22
  }, {
    id: 'kwhanyb',
    name: '韩语榜',
    bangid: 184
  }, {
    id: 'kwriyb',
    name: '日语榜',
    bangid: 183
  }],
  getUrl: function getUrl(p, l, id) {
    return "http://kbangserver.kuwo.cn/ksong.s?from=pc&fmt=json&pn=".concat(p - 1, "&rn=").concat(l, "&type=bang&data=content&id=").concat(id, "&show_copyright_off=0&pcmp4=1&isbang=1");
  },
  regExps: {},
  limit: 100,
  _requestBoardsObj: null,
  getBoardsData: function getBoardsData() {
    if (this._requestBoardsObj) this._requestBoardsObj.cancelHttp();
    this._requestBoardsObj = httpFetch('http://qukudata.kuwo.cn/q.k?op=query&cont=tree&node=2&pn=0&rn=1000&fmt=json&level=2');
    return this._requestBoardsObj.promise;
  },
  getData: function getData(url) {
    var requestDataObj = httpFetch(url);
    return requestDataObj.promise;
  },
  filterData: function filterData(rawList) {
    // console.log(rawList)
    // console.log(rawList.length, rawList2.length)
    return rawList.map(function (item, inedx) {
      var formats = item.formats.split('|');
      var types = [];
      var _types = {};
      if (formats.includes('MP3128')) {
        types.push({
          type: '128k',
          size: null
        });
        _types['128k'] = {
          size: null
        };
      }
      // if (formats.includes('MP3192')) {
      //   types.push({ type: '192k', size: null })
      //   _types['192k'] = {
      //     size: null,
      //   }
      // }
      if (formats.includes('MP3H')) {
        types.push({
          type: '320k',
          size: null
        });
        _types['320k'] = {
          size: null
        };
      }
      // if (formats.includes('AL')) {
      //   types.push({ type: 'ape', size: null })
      //   _types.ape = {
      //     size: null,
      //   }
      // }
      if (formats.includes('ALFLAC')) {
        types.push({
          type: 'flac',
          size: null
        });
        _types.flac = {
          size: null
        };
      }
      if (formats.includes('HIRFLAC')) {
        types.push({
          type: 'flac24bit',
          size: null
        });
        _types.flac24bit = {
          size: null
        };
      }
      // types.reverse()
      return {
        singer: formatSinger(decodeName(item.artist)),
        name: decodeName(item.name),
        albumName: decodeName(item.album),
        albumId: item.albumid,
        songmid: item.id,
        source: 'kw',
        interval: formatPlayTime(parseInt(item.song_duration)),
        img: item.pic,
        lrc: null,
        otherSource: null,
        types: types,
        _types: _types,
        typeUrl: {}
      };
    });
  },
  filterBoardsData: function filterBoardsData(rawList) {
    // console.log(rawList)
    var list = [];
    var _iterator = _createForOfIteratorHelper(rawList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var board = _step.value;
        if (board.source != '1') continue;
        list.push({
          id: 'kw__' + board.sourceid,
          name: board.name,
          bangid: String(board.sourceid)
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return list;
  },
  getBoards: function getBoards() {
    var _arguments = arguments,
      _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var retryNum;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            retryNum = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;
            // if (++retryNum > 3) return Promise.reject(new Error('try max num'))
            // let response
            // try {
            //   response = await this.getBoardsData()
            // } catch (error) {
            //   return this.getBoards(retryNum)
            // }
            // console.log(response.body)
            // if (response.statusCode !== 200 || !response.body.child) return this.getBoards(retryNum)
            // const list = this.filterBoardsData(response.body.child)
            // // console.log(list)
            // console.log(JSON.stringify(list))
            // this.list = list
            // return {
            //   list,
            //   source: 'kw',
            // }
            _this.list = boardList;
            return _context.abrupt("return", {
              list: boardList,
              source: 'kw'
            });
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  getList: function getList(id, page) {
    var _this2 = this;
    var retryNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (++retryNum > 3) return Promise.reject(new Error('try max num'));
    return this.getData(this.getUrl(page, this.limit, id)).then(function (_ref) {
      var statusCode = _ref.statusCode,
        body = _ref.body;
      // console.log(body)
      if (statusCode !== 200 || !body.musiclist) return _this2.getList(id, page, retryNum);
      // console.log(data1.musiclist, data2.data)
      var total = parseInt(body.num);
      var list = _this2.filterData(body.musiclist);
      return {
        total: total,
        list: list,
        limit: _this2.limit,
        page: page,
        source: 'kw'
      };
    });
  } // getDetailPageUrl(id) {
  //   return `http://www.kuwo.cn/rankList/${id}`
  // },
};
exports["default"] = _default;