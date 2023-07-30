"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require('../../request'),
  httpFetch = _require.httpFetch;
var _require2 = require('./utils/crypto'),
  weapi = _require2.weapi;
var _require3 = require('../index'),
  dateFormat2 = _require3.dateFormat2;
var emojis = [['大笑', '😃'], ['可爱', '😊'], ['憨笑', '☺️'], ['色', '😍'], ['亲亲', '😙'], ['惊恐', '😱'], ['流泪', '😭'], ['亲', '😚'], ['呆', '😳'], ['哀伤', '😔'], ['呲牙', '😁'], ['吐舌', '😝'], ['撇嘴', '😒'], ['怒', '😡'], ['奸笑', '😏'], ['汗', '😓'], ['痛苦', '😖'], ['惶恐', '😰'], ['生病', '😨'], ['口罩', '😷'], ['大哭', '😂'], ['晕', '😵'], ['发怒', '👿'], ['开心', '😄'], ['鬼脸', '😜'], ['皱眉', '😞'], ['流感', '😢'], ['爱心', '❤️'], ['心碎', '💔'], ['钟情', '💘'], ['星星', '⭐️'], ['生气', '💢'], ['便便', '💩'], ['强', '👍'], ['弱', '👎'], ['拜', '🙏'], ['牵手', '👫'], ['跳舞', '👯‍♀️'], ['禁止', '🙅‍♀️'], ['这边', '💁‍♀️'], ['爱意', '💏'], ['示爱', '👩‍❤️‍👨'], ['嘴唇', '👄'], ['狗', '🐶'], ['猫', '🐱'], ['猪', '🐷'], ['兔子', '🐰'], ['小鸡', '🐤'], ['公鸡', '🐔'], ['幽灵', '👻'], ['圣诞', '🎅'], ['外星', '👽'], ['钻石', '💎'], ['礼物', '🎁'], ['男孩', '👦'], ['女孩', '👧'], ['蛋糕', '🎂'], ['18', '🔞'], ['圈', '⭕'], ['叉', '❌']];
var applyEmoji = function applyEmoji(text) {
  for (var _i = 0, _emojis = emojis; _i < _emojis.length; _i++) {
    var e = _emojis[_i];
    text = text.replaceAll("[".concat(e[0], "]"), e[1]);
  }
  return text;
};
var cursorTools = {
  cache: {},
  getCursor: function getCursor(id, page, limit) {
    var cacheData = this.cache[id];
    if (!cacheData) cacheData = this.cache[id] = {};
    var orderType;
    var cursor;
    var offset;
    if (page == 1) {
      cacheData.page = 1;
      cursor = cacheData.cursor = cacheData.prevCursor = Date.now();
      orderType = 1;
      offset = 0;
    } else if (cacheData.page) {
      cursor = cacheData.cursor;
      if (page > cacheData.page) {
        orderType = 1;
        offset = (page - cacheData.page - 1) * limit;
      } else if (page < cacheData.page) {
        orderType = 0;
        offset = (cacheData.page - page - 1) * limit;
      } else {
        cursor = cacheData.cursor = cacheData.prevCursor;
        offset = cacheData.offset;
        orderType = cacheData.orderType;
      }
    }
    return {
      orderType: orderType,
      cursor: cursor,
      offset: offset
    };
  },
  setCursor: function setCursor(id, cursor, orderType, offset, page) {
    var cacheData = this.cache[id];
    if (!cacheData) cacheData = this.cache[id] = {};
    cacheData.prevCursor = cacheData.cursor;
    cacheData.cursor = cursor;
    cacheData.orderType = orderType;
    cacheData.offset = offset;
    cacheData.page = page;
  }
};
var _default = {
  _requestObj: null,
  _requestObj2: null,
  getComment: function getComment(_ref) {
    var _arguments = arguments,
      _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var songmid, page, limit, id, cursorInfo, _requestObj, _yield$_requestObj$pr, body, statusCode;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            songmid = _ref.songmid;
            page = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 1;
            limit = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : 20;
            if (_this._requestObj) _this._requestObj.cancelHttp();
            id = 'R_SO_4_' + songmid;
            cursorInfo = cursorTools.getCursor(songmid, page, limit);
            _requestObj = httpFetch('https://music.163.com/weapi/comment/resource/comments/get', {
              method: 'post',
              headers: {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
                origin: 'https://music.163.com',
                Refere: 'http://music.163.com/'
              },
              form: weapi({
                cursor: cursorInfo.cursor,
                offset: cursorInfo.offset,
                orderType: cursorInfo.orderType,
                pageNo: page,
                pageSize: limit,
                rid: id,
                threadId: id
              })
            });
            _context.next = 9;
            return _requestObj.promise;
          case 9:
            _yield$_requestObj$pr = _context.sent;
            body = _yield$_requestObj$pr.body;
            statusCode = _yield$_requestObj$pr.statusCode;
            if (!(statusCode != 200 || body.code !== 200)) {
              _context.next = 14;
              break;
            }
            throw new Error('获取评论失败');
          case 14:
            cursorTools.setCursor(songmid, body.data.cursor, cursorInfo.orderType, cursorInfo.offset, page);
            return _context.abrupt("return", {
              source: 'wy',
              comments: _this.filterComment(body.data.comments),
              total: body.data.totalCount,
              page: page,
              limit: limit,
              maxPage: Math.ceil(body.data.totalCount / limit) || 1
            });
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  getHotComment: function getHotComment(_ref2) {
    var _arguments2 = arguments,
      _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _body$total;
      var songmid, page, limit, id, _requestObj2, _yield$_requestObj2$p, body, statusCode, total;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            songmid = _ref2.songmid;
            page = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : 1;
            limit = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : 100;
            if (_this2._requestObj2) _this2._requestObj2.cancelHttp();
            id = 'R_SO_4_' + songmid;
            page = page - 1;
            _requestObj2 = httpFetch("https://music.163.com/weapi/v1/resource/hotcomments/".concat(id), {
              method: 'post',
              headers: {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
                origin: 'https://music.163.com',
                Refere: 'http://music.163.com/'
              },
              form: weapi({
                rid: id,
                limit: limit,
                offset: limit * page,
                beforeTime: Date.now().toString()
              })
            });
            _context2.next = 9;
            return _requestObj2.promise;
          case 9:
            _yield$_requestObj2$p = _context2.sent;
            body = _yield$_requestObj2$p.body;
            statusCode = _yield$_requestObj2$p.statusCode;
            if (!(statusCode != 200 || body.code !== 200)) {
              _context2.next = 14;
              break;
            }
            throw new Error('获取热门评论失败');
          case 14:
            total = (_body$total = body.total) !== null && _body$total !== void 0 ? _body$total : 0;
            return _context2.abrupt("return", {
              source: 'wy',
              comments: _this2.filterComment(body.hotComments),
              total: total,
              page: page,
              limit: limit,
              maxPage: Math.ceil(total / limit) || 1
            });
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  filterComment: function filterComment(rawList) {
    return rawList.map(function (item) {
      var _item$ipLocation, _replyData$ipLocation;
      var data = {
        id: item.commentId,
        text: item.content ? applyEmoji(item.content) : '',
        time: item.time ? item.time : '',
        timeStr: item.time ? dateFormat2(item.time) : '',
        location: (_item$ipLocation = item.ipLocation) === null || _item$ipLocation === void 0 ? void 0 : _item$ipLocation.location,
        userName: item.user.nickname,
        avatar: item.user.avatarUrl,
        userId: item.user.userId,
        likedCount: item.likedCount,
        reply: []
      };
      var replyData = item.beReplied && item.beReplied[0];
      return replyData ? {
        id: item.commentId,
        rootId: replyData.beRepliedCommentId,
        text: replyData.content ? applyEmoji(replyData.content) : '',
        time: item.time,
        timeStr: null,
        location: (_replyData$ipLocation = replyData.ipLocation) === null || _replyData$ipLocation === void 0 ? void 0 : _replyData$ipLocation.location,
        userName: replyData.user.nickname,
        avatar: replyData.user.avatarUrl,
        userId: replyData.user.userId,
        likedCount: null,
        reply: [data]
      } : data;
    });
  }
};
exports["default"] = _default;