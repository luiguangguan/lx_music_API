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
var _require = require('./utils/crypto'),
  weapi = _require.weapi;
var _require2 = require('../../request'),
  httpFetch = _require2.httpFetch;
var musicDetailApi = require('./musicDetail');
var topList = [{
  id: 'wy__19723756',
  name: '飙升榜',
  bangid: '19723756'
}, {
  id: 'wy__3779629',
  name: '新歌榜',
  bangid: '3779629'
}, {
  id: 'wy__2884035',
  name: '原创榜',
  bangid: '2884035'
}, {
  id: 'wy__3778678',
  name: '热歌榜',
  bangid: '3778678'
}, {
  id: 'wy__991319590',
  name: '说唱榜',
  bangid: '991319590'
}, {
  id: 'wy__71384707',
  name: '古典榜',
  bangid: '71384707'
}, {
  id: 'wy__1978921795',
  name: '电音榜',
  bangid: '1978921795'
}, {
  id: 'wy__5453912201',
  name: '黑胶VIP爱听榜',
  bangid: '5453912201'
}, {
  id: 'wy__71385702',
  name: 'ACG榜',
  bangid: '71385702'
}, {
  id: 'wy__745956260',
  name: '韩语榜',
  bangid: '745956260'
}, {
  id: 'wy__10520166',
  name: '国电榜',
  bangid: '10520166'
}, {
  id: 'wy__180106',
  name: 'UK排行榜周榜',
  bangid: '180106'
}, {
  id: 'wy__60198',
  name: '美国Billboard榜',
  bangid: '60198'
}, {
  id: 'wy__3812895',
  name: 'Beatport全球电子舞曲榜',
  bangid: '3812895'
}, {
  id: 'wy__21845217',
  name: 'KTV唛榜',
  bangid: '21845217'
}, {
  id: 'wy__60131',
  name: '日本Oricon榜',
  bangid: '60131'
}, {
  id: 'wy__2809513713',
  name: '欧美热歌榜',
  bangid: '2809513713'
}, {
  id: 'wy__2809577409',
  name: '欧美新歌榜',
  bangid: '2809577409'
}, {
  id: 'wy__27135204',
  name: '法国 NRJ Vos Hits 周榜',
  bangid: '27135204'
}, {
  id: 'wy__3001835560',
  name: 'ACG动画榜',
  bangid: '3001835560'
}, {
  id: 'wy__3001795926',
  name: 'ACG游戏榜',
  bangid: '3001795926'
}, {
  id: 'wy__3001890046',
  name: 'ACG VOCALOID榜',
  bangid: '3001890046'
}, {
  id: 'wy__3112516681',
  name: '中国新乡村音乐排行榜',
  bangid: '3112516681'
}, {
  id: 'wy__5059644681',
  name: '日语榜',
  bangid: '5059644681'
}, {
  id: 'wy__5059633707',
  name: '摇滚榜',
  bangid: '5059633707'
}, {
  id: 'wy__5059642708',
  name: '国风榜',
  bangid: '5059642708'
}, {
  id: 'wy__5338990334',
  name: '潜力爆款榜',
  bangid: '5338990334'
}, {
  id: 'wy__5059661515',
  name: '民谣榜',
  bangid: '5059661515'
}, {
  id: 'wy__6688069460',
  name: '听歌识曲榜',
  bangid: '6688069460'
}, {
  id: 'wy__6723173524',
  name: '网络热歌榜',
  bangid: '6723173524'
}, {
  id: 'wy__6732051320',
  name: '俄语榜',
  bangid: '6732051320'
}, {
  id: 'wy__6732014811',
  name: '越南语榜',
  bangid: '6732014811'
}, {
  id: 'wy__6886768100',
  name: '中文DJ榜',
  bangid: '6886768100'
}, {
  id: 'wy__6939992364',
  name: '俄罗斯top hit流行音乐榜',
  bangid: '6939992364'
}, {
  id: 'wy__7095271308',
  name: '泰语榜',
  bangid: '7095271308'
}, {
  id: 'wy__7356827205',
  name: 'BEAT排行榜',
  bangid: '7356827205'
}, {
  id: 'wy__7325478166',
  name: '编辑推荐榜VOL.44 天才女子摇滚乐队boygenius剖白卑微心迹',
  bangid: '7325478166'
}, {
  id: 'wy__7603212484',
  name: 'LOOK直播歌曲榜',
  bangid: '7603212484'
}, {
  id: 'wy__7775163417',
  name: '赏音榜',
  bangid: '7775163417'
}, {
  id: 'wy__7785123708',
  name: '黑胶VIP新歌榜',
  bangid: '7785123708'
}, {
  id: 'wy__7785066739',
  name: '黑胶VIP热歌榜',
  bangid: '7785066739'
}, {
  id: 'wy__7785091694',
  name: '黑胶VIP爱搜榜',
  bangid: '7785091694'
}];
var _default = {
  limit: 100000,
  list: [{
    id: 'wybsb',
    name: '飙升榜',
    bangid: '19723756'
  }, {
    id: 'wyrgb',
    name: '热歌榜',
    bangid: '3778678'
  }, {
    id: 'wyxgb',
    name: '新歌榜',
    bangid: '3779629'
  }, {
    id: 'wyycb',
    name: '原创榜',
    bangid: '2884035'
  }, {
    id: 'wygdb',
    name: '古典榜',
    bangid: '71384707'
  }, {
    id: 'wydouyb',
    name: '抖音榜',
    bangid: '2250011882'
  }, {
    id: 'wyhyb',
    name: '韩语榜',
    bangid: '745956260'
  }, {
    id: 'wydianyb',
    name: '电音榜',
    bangid: '1978921795'
  }, {
    id: 'wydjb',
    name: '电竞榜',
    bangid: '2006508653'
  }, {
    id: 'wyktvbb',
    name: 'KTV唛榜',
    bangid: '21845217'
  }],
  getUrl: function getUrl(id) {
    return "https://music.163.com/discover/toplist?id=".concat(id);
  },
  regExps: {
    list: /<textarea id="song-list-pre-data" style="display:none;">(.+?)<\/textarea>/
  },
  _requestBoardsObj: null,
  getBoardsData: function getBoardsData() {
    if (this._requestBoardsObj) this._requestBoardsObj.cancelHttp();
    this._requestBoardsObj = httpFetch('https://music.163.com/weapi/toplist', {
      method: 'post',
      form: weapi({})
    });
    return this._requestBoardsObj.promise;
  },
  getData: function getData(id) {
    var requestBoardsDetailObj = httpFetch('https://music.163.com/weapi/v3/playlist/detail', {
      method: 'post',
      form: weapi({
        id: id,
        n: 100000,
        p: 1
      })
    });
    return requestBoardsDetailObj.promise;
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
        // if (board.id == 201) continue
        list.push({
          id: 'wy__' + board.id,
          name: board.name,
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
            // if (response.statusCode !== 200 || response.body.code !== 200) return this.getBoards(retryNum)
            // const list = this.filterBoardsData(response.body.list)
            // console.log(list)
            // console.log(JSON.stringify(list))
            // this.list = list
            // return {
            //   list,
            //   source: 'wy',
            // }
            _this.list = topList;
            return _context.abrupt("return", {
              list: topList,
              source: 'wy'
            });
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  getList: function getList(bangid, page) {
    var _arguments2 = arguments,
      _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var retryNum, resp, musicDetail;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            retryNum = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : 0;
            if (!(++retryNum > 6)) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return", Promise.reject(new Error('try max num')));
          case 3:
            _context2.prev = 3;
            _context2.next = 6;
            return _this2.getData(bangid);
          case 6:
            resp = _context2.sent;
            _context2.next = 16;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](3);
            if (!(_context2.t0.message == 'try max num')) {
              _context2.next = 15;
              break;
            }
            throw _context2.t0;
          case 15:
            return _context2.abrupt("return", _this2.getList(bangid, page, retryNum));
          case 16:
            if (!(resp.statusCode !== 200 || resp.body.code !== 200)) {
              _context2.next = 18;
              break;
            }
            return _context2.abrupt("return", _this2.getList(bangid, page, retryNum));
          case 18:
            _context2.prev = 18;
            _context2.next = 21;
            return musicDetailApi.getList(resp.body.playlist.trackIds.map(function (trackId) {
              return trackId.id;
            }));
          case 21:
            musicDetail = _context2.sent;
            _context2.next = 32;
            break;
          case 24:
            _context2.prev = 24;
            _context2.t1 = _context2["catch"](18);
            console.log(_context2.t1);
            if (!(_context2.t1.message == 'try max num')) {
              _context2.next = 31;
              break;
            }
            throw _context2.t1;
          case 31:
            return _context2.abrupt("return", _this2.getList(bangid, page, retryNum));
          case 32:
            return _context2.abrupt("return", {
              total: musicDetail.list.length,
              list: musicDetail.list,
              limit: _this2.limit,
              page: page,
              source: 'wy'
            });
          case 33:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[3, 9], [18, 24]]);
    }))();
  },
  getDetailPageUrl: function getDetailPageUrl(id) {
    if (typeof id == 'string') id = id.replace('wy__', '');
    return "https://music.163.com/#/discover/toplist?id=".concat(id);
  }
};
exports["default"] = _default;