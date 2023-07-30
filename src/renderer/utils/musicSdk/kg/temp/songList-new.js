"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require('../../../request'),
  httpFetch = _require.httpFetch;
var _require2 = require('../../utils'),
  formatSingerName = _require2.formatSingerName;
var _require3 = require('../../../index'),
  decodeName = _require3.decodeName,
  formatPlayTime = _require3.formatPlayTime,
  sizeFormate = _require3.sizeFormate,
  dateFormat = _require3.dateFormat,
  formatPlayCount = _require3.formatPlayCount;
var _require4 = require('./../util'),
  signatureParams = _require4.signatureParams,
  createHttpFetch = _require4.createHttpFetch;
var _require5 = require('../musicInfo'),
  getMusicInfosByList = _require5.getMusicInfosByList;
var album = require('../album');
var _default = {
  _requestObj_tags: null,
  _requestObj_listInfo: null,
  _requestObj_list: null,
  _requestObj_listRecommend: null,
  listDetailLimit: 10000,
  currentTagInfo: {
    id: undefined,
    info: undefined
  },
  sortList: [{
    name: '推荐',
    id: '5'
  }, {
    name: '最热',
    id: '6'
  }, {
    name: '最新',
    id: '7'
  }, {
    name: '热藏',
    id: '3'
  }, {
    name: '飙升',
    id: '8'
  }],
  cache: new Map(),
  collectionIdListInfoCache: new Map(),
  regExps: {
    listData: /global\.data = (\[.+\]);/,
    listInfo: /global = {[\s\S]+?name: "(.+)"[\s\S]+?pic: "(.+)"[\s\S]+?};/,
    // https://www.kugou.com/yy/special/single/1067062.html
    listDetailLink: /^.+\/(\d+)\.html(?:\?.*|&.*$|#.*$|$)/
  },
  /**
   * 获取歌曲列表内的音乐
   * @param {*} id
   * @param {*} page
   */
  getListDetail: function getListDetail(id, page) {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            id = id.toString();
            if (id.includes('special/single/')) id = id.replace(_this.regExps.listDetailLink, '$1');
            // fix https://www.kugou.com/songlist/xxx/?uid=xxx&chl=qq_client&cover=http%3A%2F%2Fimge.kugou.com%xxx.jpg&iszlist=1
            if (!/https?:/.test(id)) {
              _context.next = 17;
              break;
            }
            if (id.includes('#')) id = id.replace(/#.*$/, '');
            if (!id.includes('global_collection_id')) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return", _this.getUserListDetailByCollectionId(id.replace(/^.*?global_collection_id=(\w+)(?:&.*$|#.*$|$)/, '$1'), page));
          case 6:
            if (!id.includes('chain=')) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", _this.getUserListDetail3(id.replace(/^.*?chain=(\w+)(?:&.*$|#.*$|$)/, '$1'), page));
          case 8:
            if (!id.includes('.html')) {
              _context.next = 16;
              break;
            }
            if (!id.includes('zlist.html')) {
              _context.next = 14;
              break;
            }
            id = id.replace(/^(.*)zlist\.html/, 'https://m3ws.kugou.com/zlist/list');
            if (id.includes('pagesize')) {
              id = id.replace('pagesize=30', 'pagesize=' + _this.listDetailLimit).replace('page=1', 'page=' + page);
            } else {
              id += "&pagesize=".concat(_this.listDetailLimit, "&page=").concat(page);
            }
            _context.next = 16;
            break;
          case 14:
            if (id.includes('song.html')) {
              _context.next = 16;
              break;
            }
            return _context.abrupt("return", _this.getUserListDetail3(id.replace(/.+\/(\w+).html(?:\?.*|&.*$|#.*$|$)/, '$1'), page));
          case 16:
            return _context.abrupt("return", _this.getUserListDetail(id.replace(/^.*?http/, 'http'), page));
          case 17:
            if (!/^\d+$/.test(id)) {
              _context.next = 19;
              break;
            }
            return _context.abrupt("return", _this.getUserListDetailByCode(id, page));
          case 19:
            if (!id.startsWith('gid_')) {
              _context.next = 21;
              break;
            }
            return _context.abrupt("return", _this.getUserListDetailByCollectionId(id.replace('gid_', ''), page));
          case 21:
            if (!id.startsWith('id_')) {
              _context.next = 23;
              break;
            }
            return _context.abrupt("return", _this.getUserListDetailBySpecialId(id.replace('id_', ''), page));
          case 23:
            return _context.abrupt("return", new Error('Failed.'));
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * 获取SpecialId歌单
   * @param {*} id
   */
  getUserListDetailBySpecialId: function getUserListDetailBySpecialId(id, page) {
    var _arguments = arguments,
      _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var tryNum, _yield$httpFetch$prom, body, listData, listInfo, list, name, pic, desc;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            tryNum = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : 0;
            if (!(tryNum > 2)) {
              _context2.next = 3;
              break;
            }
            throw new Error('try max num');
          case 3:
            _context2.next = 5;
            return httpFetch(_this2.getSongListDetailUrl(id)).promise;
          case 5:
            _yield$httpFetch$prom = _context2.sent;
            body = _yield$httpFetch$prom.body;
            listData = body.match(_this2.regExps.listData);
            listInfo = body.match(_this2.regExps.listInfo);
            if (listData) {
              _context2.next = 11;
              break;
            }
            return _context2.abrupt("return", _this2.getListDetailBySpecialId(id, page, ++tryNum));
          case 11:
            _context2.next = 13;
            return getMusicInfosByList(JSON.parse(listData[1]));
          case 13:
            list = _context2.sent;
            if (listInfo) {
              name = listInfo[1];
              pic = listInfo[2];
            }
            desc = _this2.parseHtmlDesc(body);
            return _context2.abrupt("return", {
              list: list,
              page: 1,
              limit: 10000,
              total: list.length,
              source: 'kg',
              info: {
                name: name,
                img: pic,
                desc: desc
                // author: body.result.info.userinfo.username,
                // play_count: formatPlayCount(body.result.listen_num),
              }
            });
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  parseHtmlDesc: function parseHtmlDesc(html) {
    var prefix = '<div class="pc_specail_text pc_singer_tab_content" id="specailIntroduceWrap">';
    var index = html.indexOf(prefix);
    if (index < 0) return null;
    var afterStr = html.substring(index + prefix.length);
    index = afterStr.indexOf('</div>');
    if (index < 0) return null;
    return decodeName(afterStr.substring(0, index));
  },
  /**
   * 使用SpecialId获取CollectionId
   * @param {*} specialId
   */
  getCollectionIdBySpecialId: function getCollectionIdBySpecialId(specialId) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", httpFetch("http://mobilecdnbj.kugou.com/api/v5/special/info?specialid=".concat(specialId), {
              headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; HLK-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Mobile Safari/537.36 EdgA/104.0.1293.70'
              }
            }).promise.then(function (_ref) {
              var body = _ref.body;
              // console.log('getCollectionIdBySpecialId', body)
              if (!body.data.global_specialid) return Promise.reject(new Error('Failed to get global collection id.'));
              return body.data.global_specialid;
            }));
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  /**
   * 获取歌单URL
   * @param {*} sortId
   * @param {*} tagId
   * @param {*} page
   */
  getSongListUrl: function getSongListUrl(sortId, tagId, page) {
    if (tagId == null) tagId = '';
    return "http://www2.kugou.kugou.com/yueku/v9/special/getSpecial?is_ajax=1&cdn=cdn&t=".concat(sortId, "&c=").concat(tagId, "&p=").concat(page);
  },
  getInfoUrl: function getInfoUrl(tagId) {
    return tagId ? "http://www2.kugou.kugou.com/yueku/v9/special/getSpecial?is_smarty=1&cdn=cdn&t=5&c=".concat(tagId) : 'http://www2.kugou.kugou.com/yueku/v9/special/getSpecial?is_smarty=1&';
  },
  getSongListDetailUrl: function getSongListDetailUrl(id) {
    return "http://www2.kugou.kugou.com/yueku/v9/special/single/".concat(id, "-5-9999.html");
  },
  filterInfoHotTag: function filterInfoHotTag(rawData) {
    var result = [];
    if (rawData.status !== 1) return result;
    for (var _i = 0, _Object$keys = Object.keys(rawData.data); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      var tag = rawData.data[key];
      result.push({
        id: tag.special_id,
        name: tag.special_name,
        source: 'kg'
      });
    }
    return result;
  },
  filterTagInfo: function filterTagInfo(rawData) {
    var result = [];
    for (var _i2 = 0, _Object$keys2 = Object.keys(rawData); _i2 < _Object$keys2.length; _i2++) {
      var name = _Object$keys2[_i2];
      result.push({
        name: name,
        list: rawData[name].data.map(function (tag) {
          return {
            parent_id: tag.parent_id,
            parent_name: tag.pname,
            id: tag.id,
            name: tag.name,
            source: 'kg'
          };
        })
      });
    }
    return result;
  },
  filterSongList: function filterSongList(rawData) {
    return rawData.map(function (item) {
      return {
        play_count: item.total_play_count || formatPlayCount(item.play_count),
        id: 'id_' + item.specialid,
        author: item.nickname,
        name: item.specialname,
        time: dateFormat(item.publish_time || item.publishtime, 'Y-M-D'),
        img: item.img || item.imgurl,
        total: item.songcount,
        grade: item.grade,
        desc: item.intro,
        source: 'kg'
      };
    });
  },
  getSongList: function getSongList(sortId, tagId, page) {
    var _this3 = this;
    var tryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (this._requestObj_list) this._requestObj_list.cancelHttp();
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    this._requestObj_list = httpFetch(this.getSongListUrl(sortId, tagId, page));
    return this._requestObj_list.promise.then(function (_ref2) {
      var body = _ref2.body;
      if (!body || body.status !== 1) return _this3.getSongList(sortId, tagId, page, ++tryNum);
      return _this3.filterSongList(body.special_db);
    });
  },
  getSongListRecommend: function getSongListRecommend() {
    var _this4 = this;
    var tryNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (this._requestObj_listRecommend) this._requestObj_listRecommend.cancelHttp();
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    this._requestObj_listRecommend = httpFetch('http://everydayrec.service.kugou.com/guess_special_recommend', {
      method: 'post',
      headers: {
        'User-Agent': 'KuGou2012-8275-web_browser_event_handler'
      },
      body: {
        appid: 1001,
        clienttime: 1566798337219,
        clientver: 8275,
        key: 'f1f93580115bb106680d2375f8032d96',
        mid: '21511157a05844bd085308bc76ef3343',
        platform: 'pc',
        userid: '262643156',
        return_min: 6,
        return_max: 15
      }
    });
    return this._requestObj_listRecommend.promise.then(function (_ref3) {
      var body = _ref3.body;
      if (body.status !== 1) return _this4.getSongListRecommend(++tryNum);
      return _this4.filterSongList(body.data.special_list);
    });
  },
  /**
   * 通过CollectionId获取歌单详情
   * @param {*} id
   */
  getUserListInfoByCollectionId: function getUserListInfoByCollectionId(id) {
    var _this5 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var params;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!(!id || id.length > 1000)) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return", Promise.reject(new Error('get list error')));
          case 2:
            if (!_this5.collectionIdListInfoCache.has(id)) {
              _context4.next = 4;
              break;
            }
            return _context4.abrupt("return", _this5.collectionIdListInfoCache.get(id));
          case 4:
            params = "appid=1058&specialid=0&global_specialid=".concat(id, "&format=jsonp&srcappid=2919&clientver=20000&clienttime=1586163242519&mid=1586163242519&uuid=1586163242519&dfid=-");
            return _context4.abrupt("return", createHttpFetch("https://mobiles.kugou.com/api/v5/special/info_v2?".concat(params, "&signature=").concat(signatureParams(params, 5)), {
              headers: {
                mid: '1586163242519',
                Referer: 'https://m3ws.kugou.com/share/index.php',
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
                dfid: '-',
                clienttime: '1586163242519'
              }
            }).then(function (body) {
              var info = {
                type: body.type,
                userName: body.nickname,
                userAvatar: body.user_avatar,
                imageUrl: body.imgurl,
                desc: body.intro,
                name: body.specialname,
                globalSpecialid: body.global_specialid,
                total: body.songcount,
                playCount: body.playcount
              };
              _this5.collectionIdListInfoCache.set(id, info);
              return info;
            }));
          case 6:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  /**
   * 通过SpecialId获取歌单
   * @param {*} id
   */
  // async getUserListDetailBySpecialId(id, page = 1, limit = 300) {
  //   if (!id || id.length > 1000) return Promise.reject(new Error('get list error.'))
  //   const listInfo = await this.getListInfoBySpecialId(id)
  //   const params = `specialid=${id}&need_sort=1&module=CloudMusic&clientver=11589&pagesize=${limit}&userid=0&page=${page}&type=0&area_code=1&appid=1005`
  //   return createHttpFetch(`http://pubsongs.kugou.com/v2/get_other_list_file?${params}&signature=${signatureParams(params, 2)}`, {
  //     headers: {
  //       'User-Agent': 'Android10-AndroidPhone-11589-201-0-playlist-wifi',
  //     },
  //   }).then(body => {
  //     if (!body.info) return Promise.reject(new Error('Get list failed.'))
  //     const songList = this.filterListByCollectionId(body.info)
  //     return {
  //       list: songList || [],
  //       page,
  //       limit,
  //       total: body.count,
  //       source: 'kg',
  //       info: {
  //         name: listInfo.name,
  //         img: listInfo.image,
  //         desc: listInfo.desc,
  //         // author: listInfo.userName,
  //         // play_count: formatPlayCount(listInfo.playCount),
  //       },
  //     }
  //   })
  // },
  /**
   * 通过CollectionId获取歌单
   * @param {*} id
   */
  getUserListDetailByCollectionId: function getUserListDetailByCollectionId(id) {
    var _arguments2 = arguments,
      _this6 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var page, limit, listInfo, params;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            page = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : 1;
            limit = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : 300;
            if (!(!id || id.length > 1000)) {
              _context5.next = 4;
              break;
            }
            return _context5.abrupt("return", Promise.reject(new Error('ID error.')));
          case 4:
            _context5.next = 6;
            return _this6.getUserListInfoByCollectionId(id);
          case 6:
            listInfo = _context5.sent;
            params = "need_sort=1&module=CloudMusic&clientver=11589&pagesize=".concat(limit, "&global_collection_id=").concat(id, "&userid=0&page=").concat(page, "&type=0&area_code=1&appid=1005");
            return _context5.abrupt("return", createHttpFetch("http://pubsongs.kugou.com/v2/get_other_list_file?".concat(params, "&signature=").concat(signatureParams(params, 2)), {
              headers: {
                'User-Agent': 'Android10-AndroidPhone-11589-201-0-playlist-wifi'
              }
            }).then(function (body) {
              if (!body.info) return Promise.reject(new Error('Get list failed.'));
              var songList = _this6.filterListByCollectionId(body.info);
              return {
                list: songList || [],
                page: page,
                limit: limit,
                total: listInfo.total,
                source: 'kg',
                info: {
                  name: listInfo.name,
                  img: listInfo.imageUrl && listInfo.imageUrl.replace('{size}', 240),
                  desc: listInfo.desc,
                  author: listInfo.userName,
                  play_count: formatPlayCount(listInfo.playCount)
                }
              };
            }));
          case 9:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  },
  /**
   * 过滤GlobalSpecialId歌单数据
   * @param {*} rawData
   */
  filterListByCollectionId: function filterListByCollectionId(rawData) {
    var ids = new Set();
    var list = [];
    rawData.forEach(function (item) {
      if (!item) return;
      if (ids.has(item.hash)) return;
      ids.add(item.hash);
      var types = [];
      var _types = {};
      item.relate_goods.forEach(function (data) {
        var size = sizeFormate(data.size);
        switch (data.level) {
          case 2:
            types.push({
              type: '128k',
              size: size,
              hash: data.hash
            });
            _types['128k'] = {
              size: size,
              hash: data.hash
            };
            break;
          case 4:
            types.push({
              type: '320k',
              size: size,
              hash: data.hash
            });
            _types['320k'] = {
              size: size,
              hash: data.hash
            };
            break;
          case 5:
            types.push({
              type: 'flac',
              size: size,
              hash: data.hash
            });
            _types.flac = {
              size: size,
              hash: data.hash
            };
            break;
          case 6:
            types.push({
              type: 'flac24bit',
              size: size,
              hash: data.hash
            });
            _types.flac24bit = {
              size: size,
              hash: data.hash
            };
            break;
        }
      });
      list.push({
        singer: formatSingerName(item.singerinfo, 'name') || decodeName(item.name).split(' - ')[0].replace(/&/g, '、'),
        name: decodeName(item.name).split(' - ')[1],
        albumName: decodeName(item.albuminfo.name),
        albumId: item.albuminfo.id,
        songmid: item.audio_id,
        source: 'kg',
        interval: formatPlayTime(parseInt(item.timelen) / 1000),
        img: null,
        lrc: null,
        hash: item.hash,
        otherSource: null,
        types: types,
        _types: _types,
        typeUrl: {}
      });
    });
    return list;
  },
  /**
   * 通过酷狗码获取歌单
   * @param {*} id
   * @param {*} page
   */
  getUserListDetailByCode: function getUserListDetailByCode(id) {
    var _arguments3 = arguments,
      _this7 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var page, codeData, codeInfo, songList, list;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            page = _arguments3.length > 1 && _arguments3[1] !== undefined ? _arguments3[1] : 1;
            _context6.next = 3;
            return createHttpFetch('http://t.kugou.com/command/', {
              method: 'POST',
              headers: {
                'KG-RC': 1,
                'KG-THash': 'network_super_call.cpp:3676261689:379',
                'User-Agent': ''
              },
              body: {
                appid: 1001,
                clientver: 9020,
                mid: '21511157a05844bd085308bc76ef3343',
                clienttime: 640612895,
                key: '36164c4015e704673c588ee202b9ecb8',
                data: id
              }
            });
          case 3:
            codeData = _context6.sent;
            if (codeData) {
              _context6.next = 6;
              break;
            }
            return _context6.abrupt("return", Promise.reject(new Error('Get list failed.')));
          case 6:
            codeInfo = codeData.info;
            _context6.t0 = codeInfo.type;
            _context6.next = _context6.t0 === 2 ? 10 : _context6.t0 === 3 ? 13 : 14;
            break;
          case 10:
            if (codeInfo.global_collection_id) {
              _context6.next = 12;
              break;
            }
            return _context6.abrupt("return", _this7.getUserListDetailBySpecialId(codeInfo.id, page));
          case 12:
            return _context6.abrupt("break", 14);
          case 13:
            return _context6.abrupt("return", album.getAlbumDetail(codeInfo.id, page));
          case 14:
            if (!codeInfo.global_collection_id) {
              _context6.next = 16;
              break;
            }
            return _context6.abrupt("return", _this7.getUserListDetailByCollectionId(codeInfo.global_collection_id, page));
          case 16:
            if (!(codeInfo.userid != null)) {
              _context6.next = 24;
              break;
            }
            _context6.next = 19;
            return createHttpFetch('http://www2.kugou.kugou.com/apps/kucodeAndShare/app/', {
              method: 'POST',
              headers: {
                'KG-RC': 1,
                'KG-THash': 'network_super_call.cpp:3676261689:379',
                'User-Agent': ''
              },
              body: {
                appid: 1001,
                clientver: 9020,
                mid: '21511157a05844bd085308bc76ef3343',
                clienttime: 640612895,
                key: '36164c4015e704673c588ee202b9ecb8',
                data: {
                  id: codeInfo.id,
                  type: 3,
                  userid: codeInfo.userid,
                  collect_type: 0,
                  page: 1,
                  pagesize: codeInfo.count
                }
              }
            });
          case 19:
            songList = _context6.sent;
            _context6.next = 22;
            return getMusicInfosByList(songList || codeInfo.list);
          case 22:
            list = _context6.sent;
            return _context6.abrupt("return", {
              list: list,
              page: 1,
              limit: codeInfo.count,
              total: list.length,
              source: 'kg',
              info: {
                name: codeInfo.name,
                img: codeInfo.img_size && codeInfo.img_size.replace('{size}', 240) || codeInfo.img,
                // desc: body.result.info.list_desc,
                author: codeInfo.username
                // play_count: formatPlayCount(info.count),
              }
            });
          case 24:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }))();
  },
  getUserListDetail3: function getUserListDetail3(chain, page) {
    var _this8 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var songInfo, list;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return createHttpFetch("http://m.kugou.com/schain/transfer?pagesize=".concat(_this8.listDetailLimit, "&chain=").concat(chain, "&su=1&page=").concat(page, "&n=0.7928855356604456"), {
              headers: {
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
              }
            });
          case 2:
            songInfo = _context7.sent;
            if (songInfo.list) {
              _context7.next = 9;
              break;
            }
            if (!songInfo.global_collection_id) {
              _context7.next = 8;
              break;
            }
            return _context7.abrupt("return", _this8.getUserListDetailByCollectionId(songInfo.global_collection_id, page));
          case 8:
            return _context7.abrupt("return", _this8.getUserListDetail4(songInfo, chain, page)["catch"](function () {
              return _this8.getUserListDetail5(chain);
            }));
          case 9:
            _context7.next = 11;
            return getMusicInfosByList(songInfo.list);
          case 11:
            list = _context7.sent;
            return _context7.abrupt("return", {
              list: list,
              page: 1,
              limit: _this8.listDetailLimit,
              total: list.length,
              source: 'kg',
              info: {
                name: songInfo.info.name,
                img: songInfo.info.img,
                // desc: body.result.info.list_desc,
                author: songInfo.info.username
                // play_count: formatPlayCount(info.count),
              }
            });
          case 13:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }))();
  },
  getUserListDetailByLink: function getUserListDetailByLink(_ref4, link) {
    var _this9 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var info, listInfo, total, tasks, page, limit, result;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            info = _ref4.info;
            listInfo = info['0'];
            total = listInfo.count;
            tasks = [];
            page = 0;
            while (total) {
              limit = total > 90 ? 90 : total;
              total -= limit;
              page += 1;
              tasks.push(createHttpFetch(link.replace(/pagesize=\d+/, 'pagesize=' + limit).replace(/page=\d+/, 'page=' + page), {
                headers: {
                  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
                  Referer: link
                }
              }).then(function (data) {
                return data.list.info;
              }));
            }
            _context8.next = 8;
            return Promise.all(tasks).then(function (_ref5) {
              var _ref6 = _toArray(_ref5),
                datas = _ref6.slice(0);
              return datas.flat();
            });
          case 8:
            result = _context8.sent;
            _context8.next = 11;
            return getMusicInfosByList(result);
          case 11:
            result = _context8.sent;
            return _context8.abrupt("return", {
              list: result,
              page: page,
              limit: _this9.listDetailLimit,
              total: result.length,
              source: 'kg',
              info: {
                name: listInfo.name,
                img: listInfo.pic && listInfo.pic.replace('{size}', 240),
                // desc: body.result.info.list_desc,
                author: listInfo.list_create_username
                // play_count: formatPlayCount(listInfo.count),
              }
            });
          case 13:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }))();
  },
  createGetListDetail2Task: function createGetListDetail2Task(id, total) {
    var tasks = [];
    var page = 0;
    while (total) {
      var limit = total > 300 ? 300 : total;
      total -= limit;
      page += 1;
      var params = 'appid=1058&global_specialid=' + id + '&specialid=0&plat=0&version=8000&page=' + page + '&pagesize=' + limit + '&srcappid=2919&clientver=20000&clienttime=1586163263991&mid=1586163263991&uuid=1586163263991&dfid=-';
      tasks.push(createHttpFetch("https://mobiles.kugou.com/api/v5/special/song_v2?".concat(params, "&signature=").concat(signatureParams(params, 5)), {
        headers: {
          mid: '1586163263991',
          Referer: 'https://m3ws.kugou.com/share/index.php',
          'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
          dfid: '-',
          clienttime: '1586163263991'
        }
      }).then(function (data) {
        return data.info;
      }));
    }
    return Promise.all(tasks).then(function (_ref7) {
      var _ref8 = _toArray(_ref7),
        datas = _ref8.slice(0);
      return datas.flat();
    });
  },
  getUserListDetail2: function getUserListDetail2(global_collection_id) {
    var _this10 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var id, params, info, songInfo, list;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            id = global_collection_id;
            if (!(id.length > 1000)) {
              _context9.next = 3;
              break;
            }
            throw new Error('get list error');
          case 3:
            params = 'appid=1058&specialid=0&global_specialid=' + id + '&format=jsonp&srcappid=2919&clientver=20000&clienttime=1586163242519&mid=1586163242519&uuid=1586163242519&dfid=-';
            _context9.next = 6;
            return createHttpFetch("https://mobiles.kugou.com/api/v5/special/info_v2?".concat(params, "&signature=").concat(signatureParams(params, 5)), {
              headers: {
                mid: '1586163242519',
                Referer: 'https://m3ws.kugou.com/share/index.php',
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
                dfid: '-',
                clienttime: '1586163242519'
              }
            });
          case 6:
            info = _context9.sent;
            _context9.next = 9;
            return _this10.createGetListDetail2Task(id, info.songcount);
          case 9:
            songInfo = _context9.sent;
            _context9.next = 12;
            return getMusicInfosByList(songInfo);
          case 12:
            list = _context9.sent;
            return _context9.abrupt("return", {
              list: list,
              page: 1,
              limit: _this10.listDetailLimit,
              total: list.length,
              source: 'kg',
              info: {
                name: info.specialname,
                img: info.imgurl && info.imgurl.replace('{size}', 240),
                desc: info.intro,
                author: info.nickname,
                play_count: formatPlayCount(info.playcount)
              }
            });
          case 14:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }))();
  },
  getListInfoByChain: function getListInfoByChain(chain) {
    var _this11 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var _yield$httpFetch$prom2, body, result;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            if (!_this11.cache.has(chain)) {
              _context10.next = 2;
              break;
            }
            return _context10.abrupt("return", _this11.cache.get(chain));
          case 2:
            _context10.next = 4;
            return httpFetch("https://m.kugou.com/share/?chain=".concat(chain, "&id=").concat(chain), {
              headers: {
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
              }
            }).promise;
          case 4:
            _yield$httpFetch$prom2 = _context10.sent;
            body = _yield$httpFetch$prom2.body;
            // console.log(body)
            result = body.match(/var\sphpParam\s=\s({.+?});/);
            if (result) result = JSON.parse(result[1]);
            _this11.cache.set(chain, result);
            return _context10.abrupt("return", result);
          case 10:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }))();
  },
  getUserListDetailByPcChain: function getUserListDetailByPcChain(chain) {
    var _this12 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var key, _yield$httpFetch$prom3, body, result;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            key = "".concat(chain, "_pc_list");
            if (!_this12.cache.has(key)) {
              _context11.next = 3;
              break;
            }
            return _context11.abrupt("return", _this12.cache.get(key));
          case 3:
            _context11.next = 5;
            return httpFetch("http://www.kugou.com/share/".concat(chain, ".html"), {
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
              }
            }).promise;
          case 5:
            _yield$httpFetch$prom3 = _context11.sent;
            body = _yield$httpFetch$prom3.body;
            result = body.match(/var\sdataFromSmarty\s=\s(\[.+?\])/);
            if (result) result = JSON.parse(result[1]);
            _this12.cache.set(chain, result);
            _context11.next = 12;
            return getMusicInfosByList(result);
          case 12:
            result = _context11.sent;
            return _context11.abrupt("return", result);
          case 14:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }))();
  },
  getUserListDetail4: function getUserListDetail4(songInfo, chain, page) {
    var _this13 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      var _list$length;
      var limit, _yield$Promise$all, _yield$Promise$all2, listInfo, list;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            limit = 100;
            _context12.next = 3;
            return Promise.all([_this13.getListInfoByChain(chain), _this13.getUserListDetailBySpecialId(songInfo.id, page, limit)]);
          case 3:
            _yield$Promise$all = _context12.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            listInfo = _yield$Promise$all2[0];
            list = _yield$Promise$all2[1];
            return _context12.abrupt("return", {
              list: list || [],
              page: page,
              limit: limit,
              total: (_list$length = list.length) !== null && _list$length !== void 0 ? _list$length : 0,
              source: 'kg',
              info: {
                name: listInfo.specialname,
                img: listInfo.imgurl && listInfo.imgurl.replace('{size}', 240),
                // desc: body.result.info.list_desc,
                author: listInfo.nickname
                // play_count: formatPlayCount(info.count),
              }
            });
          case 8:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }))();
  },
  getUserListDetail5: function getUserListDetail5(chain) {
    var _this14 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      var _list$length2;
      var _yield$Promise$all3, _yield$Promise$all4, listInfo, list;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return Promise.all([_this14.getListInfoByChain(chain), _this14.getUserListDetailByPcChain(chain)]);
          case 2:
            _yield$Promise$all3 = _context13.sent;
            _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
            listInfo = _yield$Promise$all4[0];
            list = _yield$Promise$all4[1];
            return _context13.abrupt("return", {
              list: list || [],
              page: 1,
              limit: _this14.listDetailLimit,
              total: (_list$length2 = list.length) !== null && _list$length2 !== void 0 ? _list$length2 : 0,
              source: 'kg',
              info: {
                name: listInfo.specialname,
                img: listInfo.imgurl && listInfo.imgurl.replace('{size}', 240),
                // desc: body.result.info.list_desc,
                author: listInfo.nickname
                // play_count: formatPlayCount(info.count),
              }
            });
          case 7:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }))();
  },
  getUserListDetail: function getUserListDetail(link, page) {
    var _arguments4 = arguments,
      _this15 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      var retryNum, requestLink, _yield$requestLink$pr, location, statusCode, body, _link;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            retryNum = _arguments4.length > 2 && _arguments4[2] !== undefined ? _arguments4[2] : 0;
            if (!(retryNum > 3)) {
              _context14.next = 3;
              break;
            }
            return _context14.abrupt("return", Promise.reject(new Error('link try max num')));
          case 3:
            requestLink = httpFetch(link, {
              headers: {
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
                Referer: link
              },
              follow_max: 2
            });
            _context14.next = 6;
            return requestLink.promise;
          case 6:
            _yield$requestLink$pr = _context14.sent;
            location = _yield$requestLink$pr.headers.location;
            statusCode = _yield$requestLink$pr.statusCode;
            body = _yield$requestLink$pr.body;
            if (!(statusCode > 400)) {
              _context14.next = 12;
              break;
            }
            return _context14.abrupt("return", _this15.getUserListDetail(link, page, ++retryNum));
          case 12:
            if (!(typeof body == 'string')) {
              _context14.next = 21;
              break;
            }
            if (!body.includes('"global_collection_id":')) {
              _context14.next = 15;
              break;
            }
            return _context14.abrupt("return", _this15.getUserListDetailByCollectionId(body.replace(/^[\s\S]+?"global_collection_id":"(\w+)"[\s\S]+?$/, '$1'), page));
          case 15:
            if (!body.includes('"albumid":')) {
              _context14.next = 17;
              break;
            }
            return _context14.abrupt("return", album.getAlbumDetail(body.replace(/^[\s\S]+?"albumid":(\w+)[\s\S]+?$/, '$1'), page));
          case 17:
            if (!(body.includes('"album_id":') && link.includes('album/info'))) {
              _context14.next = 19;
              break;
            }
            return _context14.abrupt("return", album.getAlbumDetail(body.replace(/^[\s\S]+?"album_id":(\w+)[\s\S]+?$/, '$1'), page));
          case 19:
            if (!(body.includes('list_id = "') && link.includes('album/info'))) {
              _context14.next = 21;
              break;
            }
            return _context14.abrupt("return", album.getAlbumDetail(body.replace(/^[\s\S]+?list_id = "(\w+)"[\s\S]+?$/, '$1'), page));
          case 21:
            if (!location) {
              _context14.next = 37;
              break;
            }
            if (!location.includes('global_specialid')) {
              _context14.next = 24;
              break;
            }
            return _context14.abrupt("return", _this15.getUserListDetailByCollectionId(location.replace(/^.*?global_specialid=(\w+)(?:&.*$|#.*$|$)/, '$1'), page));
          case 24:
            if (!location.includes('global_collection_id')) {
              _context14.next = 26;
              break;
            }
            return _context14.abrupt("return", _this15.getUserListDetailByCollectionId(location.replace(/^.*?global_collection_id=(\w+)(?:&.*$|#.*$|$)/, '$1'), page));
          case 26:
            if (!location.includes('chain=')) {
              _context14.next = 28;
              break;
            }
            return _context14.abrupt("return", _this15.getUserListDetail3(location.replace(/^.*?chain=(\w+)(?:&.*$|#.*$|$)/, '$1'), page));
          case 28:
            if (!location.includes('.html')) {
              _context14.next = 36;
              break;
            }
            if (!location.includes('zlist.html')) {
              _context14.next = 35;
              break;
            }
            _link = location.replace(/^(.*)zlist\.html/, 'https://m3ws.kugou.com/zlist/list');
            if (_link.includes('pagesize')) {
              _link = _link.replace('pagesize=30', 'pagesize=' + _this15.listDetailLimit).replace('page=1', 'page=' + page);
            } else {
              _link += "&pagesize=".concat(_this15.listDetailLimit, "&page=").concat(page);
            }
            return _context14.abrupt("return", _this15.getUserListDetail(_link, page, ++retryNum));
          case 35:
            return _context14.abrupt("return", _this15.getUserListDetail3(location.replace(/.+\/(\w+).html(?:\?.*|&.*$|#.*$|$)/, '$1'), page));
          case 36:
            return _context14.abrupt("return", _this15.getUserListDetail(location, page, ++retryNum));
          case 37:
            if (!(body.errcode !== 0)) {
              _context14.next = 39;
              break;
            }
            return _context14.abrupt("return", _this15.getUserListDetail(link, page, ++retryNum));
          case 39:
            return _context14.abrupt("return", _this15.getUserListDetailByLink(body, link));
          case 40:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }))();
  },
  // 获取列表信息
  getListInfo: function getListInfo(tagId) {
    var _this16 = this;
    var tryNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (this._requestObj_listInfo) this._requestObj_listInfo.cancelHttp();
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    this._requestObj_listInfo = httpFetch(this.getInfoUrl(tagId));
    return this._requestObj_listInfo.promise.then(function (_ref9) {
      var body = _ref9.body;
      if (body.status !== 1) return _this16.getListInfo(tagId, ++tryNum);
      return {
        limit: body.data.params.pagesize,
        page: body.data.params.p,
        total: body.data.params.total,
        source: 'kg'
      };
    });
  },
  // 获取列表数据
  getList: function getList(sortId, tagId, page) {
    var _this17 = this;
    var tasks = [this.getSongList(sortId, tagId, page)];
    tasks.push(this.currentTagInfo.id === tagId ? Promise.resolve(this.currentTagInfo.info) : this.getListInfo(tagId).then(function (info) {
      _this17.currentTagInfo.id = tagId;
      _this17.currentTagInfo.info = Object.assign({}, info);
      return info;
    }));
    if (!tagId && page === 1 && sortId === this.sortList[0].id) tasks.push(this.getSongListRecommend()); // 如果是所有类别，则顺便获取推荐列表
    return Promise.all(tasks).then(function (_ref10) {
      var _ref11 = _slicedToArray(_ref10, 3),
        list = _ref11[0],
        info = _ref11[1],
        recommendList = _ref11[2];
      if (recommendList) list.unshift.apply(list, _toConsumableArray(recommendList));
      return _objectSpread({
        list: list
      }, info);
    });
  },
  // 获取标签
  getTags: function getTags() {
    var _this18 = this;
    var tryNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (this._requestObj_tags) this._requestObj_tags.cancelHttp();
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    this._requestObj_tags = httpFetch(this.getInfoUrl());
    return this._requestObj_tags.promise.then(function (_ref12) {
      var body = _ref12.body;
      if (body.status !== 1) return _this18.getTags(++tryNum);
      return {
        hotTag: _this18.filterInfoHotTag(body.data.hotTag),
        tags: _this18.filterTagInfo(body.data.tagids),
        source: 'kg'
      };
    });
  },
  getDetailPageUrl: function getDetailPageUrl(id) {
    if (typeof id == 'string') {
      if (/^https?:\/\//.test(id)) return id;
      id = id.replace('id_', '');
    }
    return "https://www.kugou.com/yy/special/single/".concat(id, ".html");
  },
  search: function search(text, page) {
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
    var params = "userid=1384394652&req_custom=1&appid=1005&req_multi=1&version=11589&page=".concat(page, "&filter=0&pagesize=").concat(limit, "&order=0&clienttime=1681779443&iscorrection=1&searchsong=0&keyword=").concat(text, "&mid=288799920684148686226285199951543865551&dfid=3eSBsO1u97EY1zeIZd40hH4p&clientver=11589&platform=AndroidFilter");
    var url = encodeURI("http://complexsearchretry.kugou.com/v1/search/special?".concat(params, "&signature=").concat(signatureParams(params, 1)));
    return createHttpFetch(url).then(function (body) {
      // console.log(body)
      return {
        list: body.lists.map(function (item) {
          return {
            play_count: formatPlayCount(item.total_play_count),
            id: item.gid ? "gid_".concat(item.gid) : "id_".concat(item.specialid),
            author: item.nickname,
            name: item.specialname,
            time: dateFormat(item.publish_time, 'Y-M-D'),
            img: item.img,
            grade: item.grade,
            desc: item.intro,
            total: item.song_count,
            source: 'kg'
          };
        }),
        limit: limit,
        total: body.total,
        source: 'kg'
      };
    });
    // http://msearchretry.kugou.com/api/v3/search/special?version=9209&keyword=%E5%91%A8%E6%9D%B0%E4%BC%A6&pagesize=20&filter=0&page=1&sver=2&with_res_tag=0
    // http://ioscdn.kugou.com/api/v3/search/special?keyword=${encodeURIComponent(text)}&page=${page}&pagesize=${limit}&showtype=10&plat=2&version=7910&correct=1&sver=5
    // http://msearchretry.kugou.com/api/v3/search/special?keyword=${encodeURIComponent(text)}&page=${page}&pagesize=${limit}&showtype=10&filter=0&version=7910&sver=2
  }
}; // getList
// getTags
// getListDetail
exports["default"] = _default;