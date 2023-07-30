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
var getSongId = require('./songId');
var _require2 = require('../index'),
  dateFormat2 = _require2.dateFormat2;
var _default = {
  _requestObj: null,
  _requestObj2: null,
  _requestObj3: null,
  getComment: function getComment(musicInfo) {
    var _arguments = arguments,
      _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var page, limit, id, _requestObj, _yield$_requestObj$pr, body, statusCode;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            page = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 1;
            limit = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : 10;
            if (_this._requestObj) _this._requestObj.cancelHttp();
            if (musicInfo.songId) {
              _context.next = 10;
              break;
            }
            _context.next = 6;
            return getSongId(musicInfo);
          case 6:
            id = _context.sent;
            if (id) {
              _context.next = 9;
              break;
            }
            throw new Error('获取评论失败');
          case 9:
            musicInfo.songId = id;
          case 10:
            _requestObj = httpFetch("https://music.migu.cn/v3/api/comment/listComments?targetId=".concat(musicInfo.songId, "&pageSize=").concat(limit, "&pageNo=").concat(page), {
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4195.1 Safari/537.36',
                Referer: 'https://music.migu.cn'
              }
            });
            _context.next = 13;
            return _requestObj.promise;
          case 13:
            _yield$_requestObj$pr = _context.sent;
            body = _yield$_requestObj$pr.body;
            statusCode = _yield$_requestObj$pr.statusCode;
            if (!(statusCode != 200 || body.returnCode !== '000000')) {
              _context.next = 18;
              break;
            }
            throw new Error('获取评论失败');
          case 18:
            return _context.abrupt("return", {
              source: 'mg',
              comments: _this.filterComment(body.data.items),
              total: body.data.itemTotal,
              page: page,
              limit: limit,
              maxPage: Math.ceil(body.data.itemTotal / limit) || 1
            });
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  getHotComment: function getHotComment(musicInfo) {
    var _arguments2 = arguments,
      _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var page, limit, id, _requestObj2, _yield$_requestObj2$p, body, statusCode;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            page = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : 1;
            limit = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : 5;
            if (_this2._requestObj2) _this2._requestObj2.cancelHttp();
            if (musicInfo.songId) {
              _context2.next = 10;
              break;
            }
            _context2.next = 6;
            return getSongId(musicInfo);
          case 6:
            id = _context2.sent;
            if (id) {
              _context2.next = 9;
              break;
            }
            throw new Error('获取评论失败');
          case 9:
            musicInfo.songId = id;
          case 10:
            _requestObj2 = httpFetch("https://music.migu.cn/v3/api/comment/listTopComments?targetId=".concat(musicInfo.songId, "&pageSize=").concat(limit, "&pageNo=").concat(page), {
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4195.1 Safari/537.36',
                Referer: 'https://music.migu.cn'
              }
            });
            _context2.next = 13;
            return _requestObj2.promise;
          case 13:
            _yield$_requestObj2$p = _context2.sent;
            body = _yield$_requestObj2$p.body;
            statusCode = _yield$_requestObj2$p.statusCode;
            if (!(statusCode != 200 || body.returnCode !== '000000')) {
              _context2.next = 18;
              break;
            }
            throw new Error('获取热门评论失败');
          case 18:
            return _context2.abrupt("return", {
              source: 'mg',
              comments: _this2.filterComment(body.data.items),
              total: body.data.itemTotal,
              page: page,
              limit: limit,
              maxPage: Math.ceil(body.data.itemTotal / limit) || 1
            });
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  getReplyComment: function getReplyComment(musicInfo, replyId) {
    var _arguments3 = arguments,
      _this3 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var page, limit, _requestObj2, _yield$_requestObj2$p2, body, statusCode;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            page = _arguments3.length > 2 && _arguments3[2] !== undefined ? _arguments3[2] : 1;
            limit = _arguments3.length > 3 && _arguments3[3] !== undefined ? _arguments3[3] : 10;
            if (_this3._requestObj2) _this3._requestObj2.cancelHttp();
            _requestObj2 = httpFetch("https://music.migu.cn/v3/api/comment/listCommentsById?commentId=".concat(replyId, "&pageSize=").concat(limit, "&pageNo=").concat(page), {
              headers: {
                'User-Agent': 'Android712-AndroidPhone-8983-18-0-COMMENT-wifi'
              }
            });
            _context3.next = 6;
            return _requestObj2.promise;
          case 6:
            _yield$_requestObj2$p2 = _context3.sent;
            body = _yield$_requestObj2$p2.body;
            statusCode = _yield$_requestObj2$p2.statusCode;
            if (!(statusCode != 200 || body.returnCode !== '000000')) {
              _context3.next = 11;
              break;
            }
            throw new Error('获取回复评论失败');
          case 11:
            return _context3.abrupt("return", {
              source: 'mg',
              comments: _this3.filterComment(body.data.items)
            });
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  filterComment: function filterComment(rawList) {
    return rawList.map(function (item) {
      return {
        id: item.commentId,
        text: item.body,
        time: item.createTime,
        timeStr: dateFormat2(new Date(item.createTime).getTime()),
        userName: item.author.name,
        avatar: /^\/\//.test(item.author.avatar) ? "http:".concat(item.author.avatar) : item.author.avatar,
        userId: item.author.id,
        likedCount: item.praiseCount,
        replyNum: item.replyTotal,
        reply: item.replyCommentList.map(function (c) {
          return {
            id: c.commentId,
            text: c.body,
            time: c.createTime,
            timeStr: dateFormat2(new Date(c.createTime).getTime()),
            userName: c.author.name,
            avatar: /^\/\//.test(c.author.avatar) ? "http:".concat(c.author.avatar) : c.author.avatar,
            userId: c.author.id,
            likedCount: c.praiseCount,
            replyNum: c.replyTotal
          };
        })
      };
    });
  }
};
exports["default"] = _default;