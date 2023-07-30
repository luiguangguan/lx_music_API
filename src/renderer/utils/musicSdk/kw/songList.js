"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var _require = require('../../request'),
  httpFetch = _require.httpFetch;
var _require2 = require('../index'),
  formatPlayTime = _require2.formatPlayTime,
  decodeName = _require2.decodeName;
var _require3 = require('./util'),
  formatSinger = _require3.formatSinger,
  objStr2JSON = _require3.objStr2JSON;
var album = require('./album');
var _default = {
  _requestObj_tags: null,
  _requestObj_hotTags: null,
  _requestObj_list: null,
  limit_list: 36,
  limit_song: 10000,
  successCode: 200,
  sortList: [{
    name: '最新',
    id: 'new'
  }, {
    name: '最热',
    id: 'hot'
  }],
  regExps: {
    mInfo: /level:(\w+),bitrate:(\d+),format:(\w+),size:([\w.]+)/,
    // http://www.kuwo.cn/playlist_detail/2886046289
    // https://m.kuwo.cn/h5app/playlist/2736267853?t=qqfriend
    listDetailLink: /^.+\/playlist(?:_detail)?\/(\d+)(?:\?.*|&.*$|#.*$|$)/
  },
  tagsUrl: 'http://wapi.kuwo.cn/api/pc/classify/playlist/getTagList?cmd=rcm_keyword_playlist&user=0&prod=kwplayer_pc_9.0.5.0&vipver=9.0.5.0&source=kwplayer_pc_9.0.5.0&loginUid=0&loginSid=0&appUid=76039576',
  hotTagUrl: 'http://wapi.kuwo.cn/api/pc/classify/playlist/getRcmTagList?loginUid=0&loginSid=0&appUid=76039576',
  getListUrl: function getListUrl(_ref) {
    var sortId = _ref.sortId,
      id = _ref.id,
      type = _ref.type,
      page = _ref.page;
    if (!id) return "http://wapi.kuwo.cn/api/pc/classify/playlist/getRcmPlayList?loginUid=0&loginSid=0&appUid=76039576&&pn=".concat(page, "&rn=").concat(this.limit_list, "&order=").concat(sortId);
    switch (type) {
      case '10000':
        return "http://wapi.kuwo.cn/api/pc/classify/playlist/getTagPlayList?loginUid=0&loginSid=0&appUid=76039576&pn=".concat(page, "&id=").concat(id, "&rn=").concat(this.limit_list);
      case '43':
        return "http://mobileinterfaces.kuwo.cn/er.s?type=get_pc_qz_data&f=web&id=".concat(id, "&prod=pc");
    }
    // http://wapi.kuwo.cn/api/pc/classify/playlist/getTagPlayList?loginUid=0&loginSid=0&appUid=76039576&id=173&pn=1&rn=100
  },
  getListDetailUrl: function getListDetailUrl(id, page) {
    // http://nplserver.kuwo.cn/pl.svc?op=getlistinfo&pid=2858093057&pn=0&rn=100&encode=utf8&keyset=pl2012&identity=kuwo&pcmp4=1&vipver=MUSIC_9.0.5.0_W1&newver=1
    return "http://nplserver.kuwo.cn/pl.svc?op=getlistinfo&pid=".concat(id, "&pn=").concat(page - 1, "&rn=").concat(this.limit_song, "&encode=utf8&keyset=pl2012&identity=kuwo&pcmp4=1&vipver=MUSIC_9.0.5.0_W1&newver=1");
    // http://mobileinterfaces.kuwo.cn/er.s?type=get_pc_qz_data&f=web&id=140&prod=pc
  },
  // http://nplserver.kuwo.cn/pl.svc?op=getlistinfo&pid=2849349915&pn=0&rn=100&encode=utf8&keyset=pl2012&identity=kuwo&pcmp4=1&vipver=MUSIC_9.0.5.0_W1&newver=1
  // 获取标签
  getTag: function getTag() {
    var _this = this;
    var tryNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (this._requestObj_tags) this._requestObj_tags.cancelHttp();
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    this._requestObj_tags = httpFetch(this.tagsUrl);
    return this._requestObj_tags.promise.then(function (_ref2) {
      var body = _ref2.body;
      if (body.code !== _this.successCode) return _this.getTag(++tryNum);
      return _this.filterTagInfo(body.data);
    });
  },
  // 获取标签
  getHotTag: function getHotTag() {
    var _this2 = this;
    var tryNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (this._requestObj_hotTags) this._requestObj_hotTags.cancelHttp();
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    this._requestObj_hotTags = httpFetch(this.hotTagUrl);
    return this._requestObj_hotTags.promise.then(function (_ref3) {
      var body = _ref3.body;
      if (body.code !== _this2.successCode) return _this2.getHotTag(++tryNum);
      return _this2.filterInfoHotTag(body.data[0].data);
    });
  },
  filterInfoHotTag: function filterInfoHotTag(rawList) {
    return rawList.map(function (item) {
      return {
        id: "".concat(item.id, "-").concat(item.digest),
        name: item.name,
        source: 'kw'
      };
    });
  },
  filterTagInfo: function filterTagInfo(rawList) {
    return rawList.map(function (type) {
      return {
        name: type.name,
        list: type.data.map(function (item) {
          return {
            parent_id: type.id,
            parent_name: type.name,
            id: "".concat(item.id, "-").concat(item.digest),
            name: item.name,
            source: 'kw'
          };
        })
      };
    });
  },
  // 获取列表数据
  getList: function getList(sortId, tagId, page) {
    var _this3 = this;
    var tryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (this._requestObj_list) this._requestObj_list.cancelHttp();
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    var id;
    var type;
    if (tagId) {
      var arr = tagId.split('-');
      id = arr[0];
      type = arr[1];
    } else {
      id = null;
    }
    this._requestObj_list = httpFetch(this.getListUrl({
      sortId: sortId,
      id: id,
      type: type,
      page: page
    }));
    return this._requestObj_list.promise.then(function (_ref4) {
      var body = _ref4.body;
      if (!id || type == '10000') {
        if (body.code !== _this3.successCode) return _this3.getList(sortId, tagId, page, ++tryNum);
        return {
          list: _this3.filterList(body.data.data),
          total: body.data.total,
          page: body.data.pn,
          limit: body.data.rn,
          source: 'kw'
        };
      } else if (!body.length) {
        return _this3.getList(sortId, tagId, page, ++tryNum);
      }
      return {
        list: _this3.filterList2(body),
        total: 1000,
        page: page,
        limit: 1000,
        source: 'kw'
      };
    });
  },
  /**
   * 格式化播放数量
   * @param {*} num
   */
  formatPlayCount: function formatPlayCount(num) {
    if (num > 100000000) return parseInt(num / 10000000) / 10 + '亿';
    if (num > 10000) return parseInt(num / 1000) / 10 + '万';
    return num;
  },
  filterList: function filterList(rawData) {
    var _this4 = this;
    return rawData.map(function (item) {
      return {
        play_count: _this4.formatPlayCount(item.listencnt),
        id: "digest-".concat(item.digest, "__").concat(item.id),
        author: item.uname,
        name: item.name,
        // time: item.publish_time,
        total: item.total,
        img: item.img,
        grade: item.favorcnt / 10,
        desc: item.desc,
        source: 'kw'
      };
    });
  },
  filterList2: function filterList2(rawData) {
    var _this5 = this;
    // console.log(rawData)
    var list = [];
    rawData.forEach(function (item) {
      if (!item.label) return;
      list.push.apply(list, _toConsumableArray(item.list.map(function (item) {
        return {
          play_count: item.play_count && _this5.formatPlayCount(item.listencnt),
          id: "digest-".concat(item.digest, "__").concat(item.id),
          author: item.uname,
          name: item.name,
          total: item.total,
          // time: item.publish_time,
          img: item.img,
          grade: item.favorcnt && item.favorcnt / 10,
          desc: item.desc,
          source: 'kw'
        };
      })));
    });
    return list;
  },
  getListDetailDigest8: function getListDetailDigest8(id, page) {
    var _this6 = this;
    var tryNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    var requestObj = httpFetch(this.getListDetailUrl(id, page));
    return requestObj.promise.then(function (_ref5) {
      var body = _ref5.body;
      if (body.result !== 'ok') return _this6.getListDetail(id, page, ++tryNum);
      return {
        list: _this6.filterListDetail(body.musiclist),
        page: page,
        limit: body.rn,
        total: body.total,
        source: 'kw',
        info: {
          name: body.title,
          img: body.pic,
          desc: body.info,
          author: body.uname,
          play_count: _this6.formatPlayCount(body.playnum)
        }
      };
    });
  },
  getListDetailDigest5Info: function getListDetailDigest5Info(id) {
    var _this7 = this;
    var tryNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    var requestObj = httpFetch("http://qukudata.kuwo.cn/q.k?op=query&cont=ninfo&node=".concat(id, "&pn=0&rn=1&fmt=json&src=mbox&level=2"));
    return requestObj.promise.then(function (_ref6) {
      var statusCode = _ref6.statusCode,
        body = _ref6.body;
      if (statusCode != 200 || !body.child) return _this7.getListDetail(id, ++tryNum);
      // console.log(body)
      return body.child.length ? body.child[0].sourceid : null;
    });
  },
  getListDetailDigest5Music: function getListDetailDigest5Music(id, page) {
    var _this8 = this;
    var tryNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    var requestObj = httpFetch("http://nplserver.kuwo.cn/pl.svc?op=getlistinfo&pid=".concat(id, "&pn=").concat(page - 1, "}&rn=").concat(this.limit_song, "&encode=utf-8&keyset=pl2012&identity=kuwo&pcmp4=1"));
    return requestObj.promise.then(function (_ref7) {
      var body = _ref7.body;
      // console.log(body)
      if (body.result !== 'ok') return _this8.getListDetail(id, page, ++tryNum);
      return {
        list: _this8.filterListDetail(body.musiclist),
        page: page,
        limit: body.rn,
        total: body.total,
        source: 'kw',
        info: {
          name: body.title,
          img: body.pic,
          desc: body.info,
          author: body.uname,
          play_count: _this8.formatPlayCount(body.playnum)
        }
      };
    });
  },
  getListDetailDigest5: function getListDetailDigest5(id, page, retryNum) {
    var _this9 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var detailId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this9.getListDetailDigest5Info(id, retryNum);
          case 2:
            detailId = _context.sent;
            return _context.abrupt("return", _this9.getListDetailDigest5Music(detailId, page, retryNum));
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  filterBDListDetail: function filterBDListDetail(rawList) {
    return rawList.map(function (item) {
      var types = [];
      var _types = {};
      var _iterator = _createForOfIteratorHelper(item.audios),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _info$size;
          var info = _step.value;
          info.size = (_info$size = info.size) === null || _info$size === void 0 ? void 0 : _info$size.toLocaleUpperCase();
          switch (info.bitrate) {
            case '4000':
              types.push({
                type: 'flac24bit',
                size: info.size
              });
              _types.flac24bit = {
                size: info.size
              };
              break;
            case '2000':
              types.push({
                type: 'flac',
                size: info.size
              });
              _types.flac = {
                size: info.size
              };
              break;
            case '320':
              types.push({
                type: '320k',
                size: info.size
              });
              _types['320k'] = {
                size: info.size
              };
              break;
            case '192':
            case '128':
              types.push({
                type: '128k',
                size: info.size
              });
              _types['128k'] = {
                size: info.size
              };
              break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      types.reverse();
      return {
        singer: item.artists.map(function (s) {
          return s.name;
        }).join('、'),
        name: item.name,
        albumName: item.album,
        albumId: item.albumId,
        songmid: item.id,
        source: 'kw',
        interval: formatPlayTime(item.duration),
        img: item.albumPic,
        releaseDate: item.releaseDate,
        lrc: null,
        otherSource: null,
        types: types,
        _types: _types,
        typeUrl: {}
      };
    });
  },
  getReqId: function getReqId() {
    function t() {
      return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
    }
    return t() + t() + t() + t() + t() + t() + t() + t();
  },
  getListDetailMusicListByBDListInfo: function getListDetailMusicListByBDListInfo(id, source) {
    var _this10 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _yield$httpFetch$prom, infoData;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return httpFetch("https://bd-api.kuwo.cn/api/service/playlist/info/".concat(id, "?reqId=").concat(_this10.getReqId(), "&source=").concat(source), {
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
                plat: 'h5'
              }
            }).promise["catch"](function () {
              return {
                code: 0
              };
            });
          case 2:
            _yield$httpFetch$prom = _context2.sent;
            infoData = _yield$httpFetch$prom.body;
            if (!(infoData.code != 200)) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return", null);
          case 6:
            return _context2.abrupt("return", {
              name: infoData.data.name,
              img: infoData.data.pic,
              desc: infoData.data.description,
              author: infoData.data.creatorName,
              play_count: infoData.data.playNum
            });
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  getListDetailMusicListByBDUserPub: function getListDetailMusicListByBDUserPub(id) {
    var _this11 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _yield$httpFetch$prom2, infoData;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return httpFetch("https://bd-api.kuwo.cn/api/ucenter/users/pub/".concat(id, "?reqId=").concat(_this11.getReqId()), {
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
                plat: 'h5'
              }
            }).promise["catch"](function () {
              return {
                code: 0
              };
            });
          case 2:
            _yield$httpFetch$prom2 = _context3.sent;
            infoData = _yield$httpFetch$prom2.body;
            if (!(infoData.code != 200)) {
              _context3.next = 6;
              break;
            }
            return _context3.abrupt("return", null);
          case 6:
            return _context3.abrupt("return", {
              name: infoData.data.userInfo.nickname + '喜欢的音乐',
              img: infoData.data.userInfo.headImg,
              desc: '',
              author: infoData.data.userInfo.nickname,
              play_count: ''
            });
          case 7:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  getListDetailMusicListByBDList: function getListDetailMusicListByBDList(id, source, page) {
    var _arguments = arguments,
      _this12 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var tryNum, _yield$httpFetch$prom3, listData;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            tryNum = _arguments.length > 3 && _arguments[3] !== undefined ? _arguments[3] : 0;
            _context4.next = 3;
            return httpFetch("https://bd-api.kuwo.cn/api/service/playlist/".concat(id, "/musicList?reqId=").concat(_this12.getReqId(), "&source=").concat(source, "&pn=").concat(page, "&rn=").concat(_this12.limit_song), {
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
                plat: 'h5'
              }
            }).promise["catch"](function () {
              if (tryNum > 2) return Promise.reject(new Error('try max num'));
              return _this12.getListDetailMusicListByBDList(id, source, page, ++tryNum);
            });
          case 3:
            _yield$httpFetch$prom3 = _context4.sent;
            listData = _yield$httpFetch$prom3.body;
            if (!(listData.code !== 200)) {
              _context4.next = 7;
              break;
            }
            return _context4.abrupt("return", Promise.reject(new Error('failed')));
          case 7:
            return _context4.abrupt("return", {
              list: _this12.filterBDListDetail(listData.data.list),
              page: page,
              limit: listData.data.pageSize,
              total: listData.data.total,
              source: 'kw'
            });
          case 8:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  getListDetailMusicListByBD: function getListDetailMusicListByBD(id, page) {
    var _this13 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _exec, _exec2, _exec3;
      var uid, listId, source, task, _yield$Promise$all, _yield$Promise$all2, listData, info;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            uid = (_exec = /uid=(\d+)/.exec(id)) === null || _exec === void 0 ? void 0 : _exec[1];
            listId = (_exec2 = /playlistId=(\d+)/.exec(id)) === null || _exec2 === void 0 ? void 0 : _exec2[1];
            source = (_exec3 = /source=(\d+)/.exec(id)) === null || _exec3 === void 0 ? void 0 : _exec3[1];
            if (listId) {
              _context5.next = 5;
              break;
            }
            return _context5.abrupt("return", Promise.reject(new Error('failed')));
          case 5:
            task = [_this13.getListDetailMusicListByBDList(listId, source, page)];
            _context5.t0 = source;
            _context5.next = _context5.t0 === '4' ? 9 : _context5.t0 === '5' ? 11 : 13;
            break;
          case 9:
            task.push(_this13.getListDetailMusicListByBDListInfo(listId, source));
            return _context5.abrupt("break", 13);
          case 11:
            task.push(_this13.getListDetailMusicListByBDUserPub(uid !== null && uid !== void 0 ? uid : listId));
            return _context5.abrupt("break", 13);
          case 13:
            _context5.next = 15;
            return Promise.all(task);
          case 15:
            _yield$Promise$all = _context5.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            listData = _yield$Promise$all2[0];
            info = _yield$Promise$all2[1];
            listData.info = info !== null && info !== void 0 ? info : {
              name: '',
              img: '',
              desc: '',
              author: '',
              play_count: ''
            };
            // console.log(listData)
            return _context5.abrupt("return", listData);
          case 21:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  },
  // 获取歌曲列表内的音乐
  getListDetail: function getListDetail(id, page) {
    var retryNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    // console.log(id)
    // https://h5app.kuwo.cn/m/bodian/collection.html?uid=000&playlistId=000&source=5&ownerId=000
    // https://h5app.kuwo.cn/m/bodian/collection.html?uid=000&playlistId=000&source=4&ownerId=
    if (/\/bodian\//.test(id)) return this.getListDetailMusicListByBD(id, page);
    if (/[?&:/]/.test(id)) id = id.replace(this.regExps.listDetailLink, '$1');else if (/^digest-/.test(id)) {
      var _id$split = id.split('__'),
        _id$split2 = _slicedToArray(_id$split, 2),
        digest = _id$split2[0],
        _id = _id$split2[1];
      digest = digest.replace('digest-', '');
      id = _id;
      switch (digest) {
        case '8':
          break;
        case '13':
          return album.getAlbumListDetail(id, page, retryNum);
        case '5':
        default:
          return this.getListDetailDigest5(id, page, retryNum);
      }
    }
    return this.getListDetailDigest8(id, page, retryNum);
  },
  filterListDetail: function filterListDetail(rawData) {
    var _this14 = this;
    // console.log(rawData)
    return rawData.map(function (item) {
      var infoArr = item.N_MINFO.split(';');
      var types = [];
      var _types = {};
      var _iterator2 = _createForOfIteratorHelper(infoArr),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var info = _step2.value;
          info = info.match(_this14.regExps.mInfo);
          if (info) {
            switch (info[2]) {
              case '4000':
                types.push({
                  type: 'flac24bit',
                  size: info[4]
                });
                _types.flac24bit = {
                  size: info[4].toLocaleUpperCase()
                };
                break;
              case '2000':
                types.push({
                  type: 'flac',
                  size: info[4]
                });
                _types.flac = {
                  size: info[4].toLocaleUpperCase()
                };
                break;
              case '320':
                types.push({
                  type: '320k',
                  size: info[4]
                });
                _types['320k'] = {
                  size: info[4].toLocaleUpperCase()
                };
                break;
              case '192':
              case '128':
                types.push({
                  type: '128k',
                  size: info[4]
                });
                _types['128k'] = {
                  size: info[4].toLocaleUpperCase()
                };
                break;
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      types.reverse();
      return {
        singer: formatSinger(decodeName(item.artist)),
        name: decodeName(item.name),
        albumName: decodeName(item.album),
        albumId: item.albumid,
        songmid: item.id,
        source: 'kw',
        interval: formatPlayTime(parseInt(item.duration)),
        img: null,
        lrc: null,
        otherSource: null,
        types: types,
        _types: _types,
        typeUrl: {}
      };
    });
  },
  getTags: function getTags() {
    return Promise.all([this.getTag(), this.getHotTag()]).then(function (_ref8) {
      var _ref9 = _slicedToArray(_ref8, 2),
        tags = _ref9[0],
        hotTag = _ref9[1];
      return {
        tags: tags,
        hotTag: hotTag,
        source: 'kw'
      };
    });
  },
  getDetailPageUrl: function getDetailPageUrl(id) {
    if (/[?&:/]/.test(id)) id = id.replace(this.regExps.listDetailLink, '$1');else if (/^digest-/.test(id)) {
      var result = id.split('__');
      id = result[1];
    }
    return "http://www.kuwo.cn/playlist_detail/".concat(id);
  },
  search: function search(text, page) {
    var _this15 = this;
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
    return httpFetch("http://search.kuwo.cn/r.s?all=".concat(encodeURIComponent(text), "&pn=").concat(page - 1, "&rn=").concat(limit, "&rformat=json&encoding=utf8&ver=mbox&vipver=MUSIC_8.7.7.0_BCS37&plat=pc&devid=28156413&ft=playlist&pay=0&needliveshow=0")).promise.then(function (_ref10) {
      var body = _ref10.body;
      body = objStr2JSON(body);
      // console.log(body)
      return {
        list: body.abslist.map(function (item) {
          return {
            play_count: _this15.formatPlayCount(item.playcnt),
            id: String(item.playlistid),
            author: decodeName(item.nickname),
            name: decodeName(item.name),
            total: item.songnum,
            // time: item.publish_time,
            img: item.pic,
            desc: decodeName(item.intro),
            source: 'kw'
          };
        }),
        limit: limit,
        total: parseInt(body.TOTAL),
        source: 'kw'
      };
    });
  }
}; // getList
// getTags
// getListDetail
exports["default"] = _default;