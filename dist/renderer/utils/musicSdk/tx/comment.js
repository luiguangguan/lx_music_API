"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
            o = it;
        var i = 0;
        var F = function F() { };
        return { s: F, n: function n() { if (i >= o.length)
                return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
} var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try {
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
function _regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    _regeneratorRuntime = function _regeneratorRuntime() { return exports; };
    var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; }
    try {
        define({}, "");
    }
    catch (err) {
        define = function define(obj, key, value) { return obj[key] = value; };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; }
    function tryCatch(fn, obj, arg) { try {
        return { type: "normal", arg: fn.call(obj, arg) };
    }
    catch (err) {
        return { type: "throw", arg: err };
    } }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() { }
    function GeneratorFunction() { }
    function GeneratorFunctionPrototype() { }
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () { return this; });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); }
    function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) {
        var result = record.arg, value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); });
    } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); }
    function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state)
        throw new Error("Generator is already running"); if ("completed" === state) {
        if ("throw" === method)
            throw arg;
        return doneResult();
    } for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
                if (delegateResult === ContinueSentinel)
                    continue;
                return delegateResult;
            }
        }
        if ("next" === context.method)
            context.sent = context._sent = context.arg;
        else if ("throw" === context.method) {
            if ("suspendedStart" === state)
                throw state = "completed", context.arg;
            context.dispatchException(context.arg);
        }
        else
            "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
                continue;
            return { value: record.arg, done: context.done };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
    } }; }
    function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method)
        return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type)
        return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); }
    function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); }
    function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; }
    function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); }
    function values(iterable) { if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod)
            return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next)
            return iterable;
        if (!isNaN(iterable.length)) {
            var i = -1, next = function next() { for (; ++i < iterable.length;)
                if (hasOwn.call(iterable, i))
                    return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; };
            return next.next = next;
        }
    } return { next: doneResult }; }
    function doneResult() { return { value: undefined, done: !0 }; }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object)
        keys.push(key); return keys.reverse(), function next() { for (; keys.length;) {
        var key = keys.pop();
        if (key in object)
            return next.value = key, next.done = !1, next;
    } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
            for (var name in this)
                "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type)
            throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done)
            throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i], record = entry.completion;
            if ("root" === entry.tryLoc)
                return handle("end");
            if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                    if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                }
                else if (hasCatch) {
                    if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                }
                else {
                    if (!hasFinally)
                        throw new Error("try statement without catch or finally");
                    if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                }
            }
        } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
            }
        } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type)
            throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc)
                return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if ("throw" === record.type) {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                }
                return thrown;
            }
        } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try {
    var info = gen[key](arg);
    var value = info.value;
}
catch (error) {
    reject(error);
    return;
} if (info.done) {
    resolve(value);
}
else {
    Promise.resolve(value).then(_next, _throw);
} }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require('../../request'), httpFetch = _require.httpFetch;
var _require2 = require('../index'), dateFormat2 = _require2.dateFormat2;
var getMusicInfo = require('./musicInfo');
var emojis = {
    e400846: '😘',
    e400874: '😴',
    e400825: '😃',
    e400847: '😙',
    e400835: '😍',
    e400873: '😳',
    e400836: '😎',
    e400867: '😭',
    e400832: '😊',
    e400837: '😏',
    e400875: '😫',
    e400831: '😉',
    e400855: '😡',
    e400823: '😄',
    e400862: '😨',
    e400844: '😖',
    e400841: '😓',
    e400830: '😈',
    e400828: '😆',
    e400833: '😋',
    e400822: '😀',
    e400843: '😕',
    e400829: '😇',
    e400824: '😂',
    e400834: '😌',
    e400877: '😷',
    e400132: '🍉',
    e400181: '🍺',
    e401067: '☕️',
    e400186: '🥧',
    e400343: '🐷',
    e400116: '🌹',
    e400126: '🍃',
    e400613: '💋',
    e401236: '❤️',
    e400622: '💔',
    e400637: '💣',
    e400643: '💩',
    e400773: '🔪',
    e400102: '🌛',
    e401328: '🌞',
    e400420: '👏',
    e400914: '🙌',
    e400408: '👍',
    e400414: '👎',
    e401121: '✋',
    e400396: '👋',
    e400384: '👉',
    e401115: '✊',
    e400402: '👌',
    e400905: '🙈',
    e400906: '🙉',
    e400907: '🙊',
    e400562: '👻',
    e400932: '🙏',
    e400644: '💪',
    e400611: '💉',
    e400185: '🎁',
    e400655: '💰',
    e400325: '🐥',
    e400612: '💊',
    e400198: '🎉',
    e401685: '⚡️',
    e400631: '💝',
    e400768: '🔥',
    e400432: '👑'
};
var songIdMap = new Map();
var promises = new Map();
var _default = {
    _requestObj: null,
    _requestObj2: null,
    getSongId: function getSongId(_ref) {
        return _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
            var songId, songmid, promise, info;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                    switch (_context.prev = _context.next) {
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
    getComment: function getComment(mInfo) {
        var _arguments = arguments, _this = this;
        return _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
            var page, limit, songId, _requestObj, _yield$_requestObj$pr, body, statusCode, comment;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1)
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            page = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 1;
                            limit = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : 20;
                            if (_this._requestObj)
                                _this._requestObj.cancelHttp();
                            _context2.next = 5;
                            return _this.getSongId(mInfo);
                        case 5:
                            songId = _context2.sent;
                            _requestObj = httpFetch('http://c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg', {
                                method: 'POST',
                                headers: {
                                    'User-Agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)'
                                },
                                form: {
                                    uin: '0',
                                    format: 'json',
                                    cid: '205360772',
                                    reqtype: '2',
                                    biztype: '1',
                                    topid: songId,
                                    cmd: '8',
                                    needmusiccrit: '1',
                                    pagenum: page - 1,
                                    pagesize: limit
                                }
                            });
                            _context2.next = 9;
                            return _requestObj.promise;
                        case 9:
                            _yield$_requestObj$pr = _context2.sent;
                            body = _yield$_requestObj$pr.body;
                            statusCode = _yield$_requestObj$pr.statusCode;
                            if (!(statusCode != 200 || body.code !== 0)) {
                                _context2.next = 14;
                                break;
                            }
                            throw new Error('获取评论失败');
                        case 14:
                            // console.log(body, statusCode)
                            comment = body.comment;
                            return _context2.abrupt("return", {
                                source: 'tx',
                                comments: _this.filterNewComment(comment.commentlist),
                                total: comment.commenttotal,
                                page: page,
                                limit: limit,
                                maxPage: Math.ceil(comment.commenttotal / limit) || 1
                            });
                        case 16:
                        case "end":
                            return _context2.stop();
                    }
            }, _callee2);
        }))();
    },
    getHotComment: function getHotComment(mInfo) {
        var _arguments2 = arguments, _this2 = this;
        return _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
            var page, limit, songId, _requestObj2, _yield$_requestObj2$p, body, statusCode, comment;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1)
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            page = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : 1;
                            limit = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : 20;
                            // const _requestObj2 = httpFetch('http://c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg', {
                            //   method: 'POST',
                            //   headers: {
                            //     'User-Agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
                            //   },
                            //   form: {
                            //     uin: '0',
                            //     format: 'json',
                            //     cid: '205360772',
                            //     reqtype: '2',
                            //     biztype: '1',
                            //     topid: songId,
                            //     cmd: '9',
                            //     needmusiccrit: '1',
                            //     pagenum: page - 1,
                            //     pagesize: limit,
                            //   },
                            // })
                            if (_this2._requestObj2)
                                _this2._requestObj2.cancelHttp();
                            _context3.next = 5;
                            return _this2.getSongId(mInfo);
                        case 5:
                            songId = _context3.sent;
                            _requestObj2 = httpFetch('https://u.y.qq.com/cgi-bin/musicu.fcg', {
                                method: 'POST',
                                body: {
                                    comm: {
                                        cv: 4747474,
                                        ct: 24,
                                        format: 'json',
                                        inCharset: 'utf-8',
                                        outCharset: 'utf-8',
                                        notice: 0,
                                        platform: 'yqq.json',
                                        needNewCode: 1,
                                        uin: 0
                                    },
                                    req: {
                                        module: 'music.globalComment.CommentRead',
                                        method: 'GetHotCommentList',
                                        param: {
                                            BizType: 1,
                                            BizId: String(songId),
                                            LastCommentSeqNo: '',
                                            PageSize: limit,
                                            PageNum: page - 1,
                                            HotType: 1,
                                            WithAirborne: 0,
                                            PicEnable: 1
                                        }
                                    }
                                },
                                headers: {
                                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.0.0',
                                    referer: 'https://y.qq.com/',
                                    origin: 'https://y.qq.com'
                                }
                            });
                            _context3.next = 9;
                            return _requestObj2.promise;
                        case 9:
                            _yield$_requestObj2$p = _context3.sent;
                            body = _yield$_requestObj2$p.body;
                            statusCode = _yield$_requestObj2$p.statusCode;
                            if (!(statusCode != 200 || body.code !== 0 || body.req.code !== 0)) {
                                _context3.next = 14;
                                break;
                            }
                            throw new Error('获取热门评论失败');
                        case 14:
                            comment = body.req.data.CommentList;
                            return _context3.abrupt("return", {
                                source: 'tx',
                                comments: _this2.filterHotComment(comment.Comments),
                                total: comment.Total,
                                page: page,
                                limit: limit,
                                maxPage: Math.ceil(comment.Total / limit) || 1
                            });
                        case 16:
                        case "end":
                            return _context3.stop();
                    }
            }, _callee3);
        }))();
    },
    filterNewComment: function filterNewComment(rawList) {
        var _this3 = this;
        return rawList.map(function (item) {
            var time = _this3.formatTime(item.time);
            var timeStr = time ? dateFormat2(time) : null;
            if (item.middlecommentcontent) {
                var firstItem = item.middlecommentcontent[0];
                firstItem.avatarurl = item.avatarurl;
                firstItem.praisenum = item.praisenum;
                item.avatarurl = null;
                item.praisenum = null;
                item.middlecommentcontent.reverse();
            }
            return {
                id: "".concat(item.rootcommentid, "_").concat(item.commentid),
                rootId: item.rootcommentid,
                text: item.rootcommentcontent ? _this3.replaceEmoji(item.rootcommentcontent).replace(/\\n/g, '\n') : '',
                time: item.rootcommentid == item.commentid ? time : null,
                timeStr: item.rootcommentid == item.commentid ? timeStr : null,
                userName: item.rootcommentnick ? item.rootcommentnick.substring(1) : '',
                avatar: item.avatarurl,
                userId: item.encrypt_rootcommentuin,
                likedCount: item.praisenum,
                reply: item.middlecommentcontent ? item.middlecommentcontent.map(function (c) {
                    // let index = c.subcommentid.lastIndexOf('_')
                    return {
                        id: "sub_".concat(item.rootcommentid, "_").concat(c.subcommentid),
                        text: _this3.replaceEmoji(c.subcommentcontent).replace(/\\n/g, '\n'),
                        time: c.subcommentid == item.commentid ? time : null,
                        timeStr: c.subcommentid == item.commentid ? timeStr : null,
                        userName: c.replynick.substring(1),
                        avatar: c.avatarurl,
                        userId: c.encrypt_replyuin,
                        likedCount: c.praisenum
                    };
                }) : []
            };
        });
    },
    filterHotComment: function filterHotComment(rawList) {
        var _this4 = this;
        return rawList.map(function (item) {
            var _item$Nick;
            return {
                id: "".concat(item.SeqNo, "_").concat(item.CmId),
                rootId: item.SeqNo,
                text: item.Content ? _this4.replaceEmoji(item.Content).replace(/\\n/g, '\n') : '',
                time: item.PubTime ? _this4.formatTime(item.PubTime) : null,
                timeStr: item.PubTime ? dateFormat2(_this4.formatTime(item.PubTime)) : null,
                userName: (_item$Nick = item.Nick) !== null && _item$Nick !== void 0 ? _item$Nick : '',
                images: item.Pic ? [item.Pic] : [],
                avatar: item.Avatar,
                location: item.Location ? item.Location : '',
                userId: item.EncryptUin,
                likedCount: item.PraiseNum,
                reply: item.SubComments ? item.SubComments.map(function (c) {
                    var _c$Nick;
                    return {
                        id: "sub_".concat(c.SeqNo, "_").concat(c.CmId),
                        text: _this4.replaceEmoji(c.Content).replace(/\\n/g, '\n'),
                        time: c.PubTime ? _this4.formatTime(c.PubTime) : null,
                        timeStr: c.PubTime ? dateFormat2(_this4.formatTime(c.PubTime)) : null,
                        userName: (_c$Nick = c.Nick) !== null && _c$Nick !== void 0 ? _c$Nick : '',
                        avatar: c.Avatar,
                        images: c.Pic ? [c.Pic] : [],
                        userId: c.EncryptUin,
                        likedCount: c.PraiseNum
                    };
                }) : []
            };
        });
    },
    replaceEmoji: function replaceEmoji(msg) {
        var rxp = /^\[em\](e\d+)\[\/em\]$/;
        var result = msg.match(/\[em\]e\d+\[\/em\]/g);
        if (!result)
            return msg;
        result = Array.from(new Set(result));
        var _iterator = _createForOfIteratorHelper(result), _step;
        try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                var code = item.replace(rxp, '$1');
                msg = msg.replace(new RegExp(item.replace('[em]', '\\[em\\]').replace('[/em]', '\\[\\/em\\]'), 'g'), emojis[code] || '');
            }
        }
        catch (err) {
            _iterator.e(err);
        }
        finally {
            _iterator.f();
        }
        return msg;
    },
    formatTime: function formatTime(time) {
        return String(time).length < 10 ? null : parseInt(time + '000');
    }
};
exports["default"] = _default;
