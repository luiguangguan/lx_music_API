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
  sizeFormate = _require2.sizeFormate;
var _require3 = require('../utils'),
  formatSingerName = _require3.formatSingerName;
var boardList = [{
  id: 'tx__4',
  name: '流行指数榜',
  bangid: '4'
}, {
  id: 'tx__26',
  name: '热歌榜',
  bangid: '26'
}, {
  id: 'tx__27',
  name: '新歌榜',
  bangid: '27'
}, {
  id: 'tx__62',
  name: '飙升榜',
  bangid: '62'
}, {
  id: 'tx__58',
  name: '说唱榜',
  bangid: '58'
}, {
  id: 'tx__57',
  name: '喜力电音榜',
  bangid: '57'
}, {
  id: 'tx__28',
  name: '网络歌曲榜',
  bangid: '28'
}, {
  id: 'tx__5',
  name: '内地榜',
  bangid: '5'
}, {
  id: 'tx__3',
  name: '欧美榜',
  bangid: '3'
}, {
  id: 'tx__59',
  name: '香港地区榜',
  bangid: '59'
}, {
  id: 'tx__16',
  name: '韩国榜',
  bangid: '16'
}, {
  id: 'tx__60',
  name: '抖快榜',
  bangid: '60'
}, {
  id: 'tx__29',
  name: '影视金曲榜',
  bangid: '29'
}, {
  id: 'tx__17',
  name: '日本榜',
  bangid: '17'
}, {
  id: 'tx__52',
  name: '腾讯音乐人原创榜',
  bangid: '52'
}, {
  id: 'tx__36',
  name: 'K歌金曲榜',
  bangid: '36'
}, {
  id: 'tx__61',
  name: '台湾地区榜',
  bangid: '61'
}, {
  id: 'tx__63',
  name: 'DJ舞曲榜',
  bangid: '63'
}, {
  id: 'tx__64',
  name: '综艺新歌榜',
  bangid: '64'
}, {
  id: 'tx__65',
  name: '国风热歌榜',
  bangid: '65'
}, {
  id: 'tx__67',
  name: '听歌识曲榜',
  bangid: '67'
}, {
  id: 'tx__72',
  name: '动漫音乐榜',
  bangid: '72'
}, {
  id: 'tx__73',
  name: '游戏音乐榜',
  bangid: '73'
}, {
  id: 'tx__75',
  name: '有声榜',
  bangid: '75'
}, {
  id: 'tx__131',
  name: '校园音乐人排行榜',
  bangid: '131'
}];
var _default = {
  limit: 300,
  list: [{
    id: 'txlxzsb',
    name: '流行榜',
    bangid: 4
  }, {
    id: 'txrgb',
    name: '热歌榜',
    bangid: 26
  }, {
    id: 'txwlhgb',
    name: '网络榜',
    bangid: 28
  }, {
    id: 'txdyb',
    name: '抖音榜',
    bangid: 60
  }, {
    id: 'txndb',
    name: '内地榜',
    bangid: 5
  }, {
    id: 'txxgb',
    name: '香港榜',
    bangid: 59
  }, {
    id: 'txtwb',
    name: '台湾榜',
    bangid: 61
  }, {
    id: 'txoumb',
    name: '欧美榜',
    bangid: 3
  }, {
    id: 'txhgb',
    name: '韩国榜',
    bangid: 16
  }, {
    id: 'txrbb',
    name: '日本榜',
    bangid: 17
  }, {
    id: 'txtybb',
    name: 'YouTube榜',
    bangid: 128
  }],
  listDetailRequest: function listDetailRequest(id, period, limit) {
    // console.log(id, period, limit)
    return httpFetch('https://u.y.qq.com/cgi-bin/musicu.fcg', {
      method: 'post',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)'
      },
      body: {
        toplist: {
          module: 'musicToplist.ToplistInfoServer',
          method: 'GetDetail',
          param: {
            topid: id,
            num: limit,
            period: period
          }
        },
        comm: {
          uin: 0,
          format: 'json',
          ct: 20,
          cv: 1859
        }
      }
    }).promise;
  },
  regExps: {
    periodList: /<i class="play_cover__btn c_tx_link js_icon_play" data-listkey=".+?" data-listname=".+?" data-tid=".+?" data-date=".+?" .+?<\/i>/g,
    period: /data-listname="(.+?)" data-tid=".*?\/(.+?)" data-date="(.+?)" .+?<\/i>/
  },
  periods: {},
  periodUrl: 'https://c.y.qq.com/node/pc/wk_v15/top.html',
  _requestBoardsObj: null,
  getBoardsData: function getBoardsData() {
    if (this._requestBoardsObj) this._requestBoardsObj.cancelHttp();
    this._requestBoardsObj = httpFetch('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&uin=0&needNewCode=1&platform=h5');
    return this._requestBoardsObj.promise;
  },
  getData: function getData(url) {
    var requestDataObj = httpFetch(url);
    return requestDataObj.promise;
  },
  filterData: function filterData(rawList) {
    // console.log(rawList)
    return rawList.map(function (item) {
      var _item$singer;
      var types = [];
      var _types = {};
      if (item.file.size_128mp3 !== 0) {
        var size = sizeFormate(item.file.size_128mp3);
        types.push({
          type: '128k',
          size: size
        });
        _types['128k'] = {
          size: size
        };
      }
      if (item.file.size_320mp3 !== 0) {
        var _size = sizeFormate(item.file.size_320mp3);
        types.push({
          type: '320k',
          size: _size
        });
        _types['320k'] = {
          size: _size
        };
      }
      if (item.file.size_flac !== 0) {
        var _size2 = sizeFormate(item.file.size_flac);
        types.push({
          type: 'flac',
          size: _size2
        });
        _types.flac = {
          size: _size2
        };
      }
      if (item.file.size_hires !== 0) {
        var _size3 = sizeFormate(item.file.size_hires);
        types.push({
          type: 'flac24bit',
          size: _size3
        });
        _types.flac24bit = {
          size: _size3
        };
      }
      // types.reverse()
      return {
        singer: formatSingerName(item.singer, 'name'),
        name: item.name,
        albumName: item.album.name,
        albumId: item.album.mid,
        source: 'tx',
        interval: formatPlayTime(item.interval),
        songId: item.id,
        albumMid: item.album.mid,
        strMediaMid: item.file.media_mid,
        songmid: item.mid,
        img: item.album.name === '' || item.album.name === '空' ? (_item$singer = item.singer) !== null && _item$singer !== void 0 && _item$singer.length ? "https://y.gtimg.cn/music/photo_new/T001R500x500M000".concat(item.singer[0].mid, ".jpg") : '' : "https://y.gtimg.cn/music/photo_new/T002R500x500M000".concat(item.album.mid, ".jpg"),
        lrc: null,
        otherSource: null,
        types: types,
        _types: _types,
        typeUrl: {}
      };
    });
  },
  getPeriods: function getPeriods(bangid) {
    var _this = this;
    return this.getData(this.periodUrl).then(function (_ref) {
      var html = _ref.body;
      var result = html.match(_this.regExps.periodList);
      if (!result) return Promise.reject(new Error('get data failed'));
      result.forEach(function (item) {
        var result = item.match(_this.regExps.period);
        if (!result) return;
        _this.periods[result[2]] = {
          name: result[1],
          bangid: result[2],
          period: result[3]
        };
      });
      var info = _this.periods[bangid];
      return info && info.period;
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
        // 排除 MV榜
        if (board.id == 201) continue;
        if (board.topTitle.startsWith('巅峰榜·')) {
          board.topTitle = board.topTitle.substring(4, board.topTitle.length);
        }
        if (!board.topTitle.endsWith('榜')) board.topTitle += '榜';
        list.push({
          id: 'tx__' + board.id,
          name: board.topTitle,
          bangid: String(board.id)
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
      _this2 = this;
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
            // // console.log(response.body)
            // if (response.statusCode !== 200 || response.body.code !== 0) return this.getBoards(retryNum)
            // const list = this.filterBoardsData(response.body.data.topList)
            // console.log(list)
            // console.log(JSON.stringify(list))
            // this.list = list
            // return {
            //   list,
            //   source: 'tx',
            // }
            _this2.list = boardList;
            return _context.abrupt("return", {
              list: boardList,
              source: 'tx'
            });
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  getList: function getList(bangid, page) {
    var _this3 = this;
    var retryNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (++retryNum > 3) return Promise.reject(new Error('try max num'));
    bangid = parseInt(bangid);
    var info = this.periods[bangid];
    var p = info ? Promise.resolve(info.period) : this.getPeriods(bangid);
    return p.then(function (period) {
      return _this3.listDetailRequest(bangid, period, _this3.limit).then(function (resp) {
        if (resp.body.code !== 0) return _this3.getList(bangid, page, retryNum);
        return {
          total: resp.body.toplist.data.songInfoList.length,
          list: _this3.filterData(resp.body.toplist.data.songInfoList),
          limit: _this3.limit,
          page: 1,
          source: 'tx'
        };
      });
    });
  },
  getDetailPageUrl: function getDetailPageUrl(id) {
    if (typeof id == 'string') id = id.replace('tx__', '');
    return "https://y.qq.com/n/ryqq/toplist/".concat(id);
  }
};
exports["default"] = _default;