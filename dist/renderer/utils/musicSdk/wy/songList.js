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
                return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
} var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try {
        if (!normalCompletion && it["return"] != null)
            it["return"]();
    }
    finally {
        if (didErr)
            throw err;
    } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o)
    return; if (typeof o === "string")
    return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor)
    n = o.constructor.name; if (n === "Map" || n === "Set")
    return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length)
    len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
            if (Object(_i) !== _i)
                return;
            _n = !1;
        }
        else
            for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
                ;
    }
    catch (err) {
        _d = !0, _e = err;
    }
    finally {
        try {
            if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
                return;
        }
        finally {
            if (_d)
                throw _e;
        }
    }
    return _arr;
} }
function _arrayWithHoles(arr) { if (Array.isArray(arr))
    return arr; }
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
// https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/module/playlist_catlist.js
// https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/module/playlist_hot.js
// https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/module/top_playlist.js
// https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/module/playlist_detail.js
var _require = require('./utils/crypto'), weapi = _require.weapi, linuxapi = _require.linuxapi;
var _require2 = require('../../request'), httpFetch = _require2.httpFetch;
var _require3 = require('../index'), formatPlayTime = _require3.formatPlayTime, sizeFormate = _require3.sizeFormate, dateFormat = _require3.dateFormat, formatPlayCount = _require3.formatPlayCount;
var musicDetailApi = require('./musicDetail');
var _require4 = require('./utils/index'), eapiRequest = _require4.eapiRequest;
var _require5 = require('../utils'), formatSingerName = _require5.formatSingerName;
var _default = {
    _requestObj_tags: null,
    _requestObj_hotTags: null,
    _requestObj_list: null,
    limit_list: 30,
    limit_song: 100000,
    successCode: 200,
    cookie: 'MUSIC_U=',
    sortList: [{
            name: '最热',
            id: 'hot'
        }
        // {
        //   name: '最新',
        //   id: 'new',
        // },
    ],
    regExps: {
        listDetailLink: /^.+(?:\?|&)id=(\d+)(?:&.*$|#.*$|$)/,
        listDetailLink2: /^.+\/playlist\/(\d+)\/\d+\/.+$/
    },
    handleParseId: function handleParseId(link) {
        var _arguments = arguments, _this = this;
        return _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
            var retryNum, requestObj_listDetailLink, _yield$requestObj_lis, location, statusCode, url;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                    switch (_context.prev = _context.next) {
                        case 0:
                            retryNum = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 0;
                            if (!(retryNum > 2)) {
                                _context.next = 3;
                                break;
                            }
                            throw new Error('link try max num');
                        case 3:
                            requestObj_listDetailLink = httpFetch(link);
                            _context.next = 6;
                            return requestObj_listDetailLink.promise;
                        case 6:
                            _yield$requestObj_lis = _context.sent;
                            location = _yield$requestObj_lis.headers.location;
                            statusCode = _yield$requestObj_lis.statusCode;
                            if (!(statusCode > 400)) {
                                _context.next = 11;
                                break;
                            }
                            return _context.abrupt("return", _this.handleParseId(link, ++retryNum));
                        case 11:
                            url = location == null ? link : location;
                            return _context.abrupt("return", _this.regExps.listDetailLink.test(url) ? url.replace(_this.regExps.listDetailLink, '$1') : url.replace(_this.regExps.listDetailLink2, '$1'));
                        case 13:
                        case "end":
                            return _context.stop();
                    }
            }, _callee);
        }))();
    },
    getListId: function getListId(id) {
        var _this2 = this;
        return _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
            var cookie, _id$split, _id$split2, url, token;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1)
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (/###/.test(id)) {
                                _id$split = id.split('###'), _id$split2 = _slicedToArray(_id$split, 2), url = _id$split2[0], token = _id$split2[1];
                                id = url;
                                cookie = "MUSIC_U=".concat(token);
                            }
                            if (!/[?&:/]/.test(id)) {
                                _context2.next = 13;
                                break;
                            }
                            if (!_this2.regExps.listDetailLink.test(id)) {
                                _context2.next = 6;
                                break;
                            }
                            id = id.replace(_this2.regExps.listDetailLink, '$1');
                            _context2.next = 13;
                            break;
                        case 6:
                            if (!_this2.regExps.listDetailLink2.test(id)) {
                                _context2.next = 10;
                                break;
                            }
                            id = id.replace(_this2.regExps.listDetailLink2, '$1');
                            _context2.next = 13;
                            break;
                        case 10:
                            _context2.next = 12;
                            return _this2.handleParseId(id);
                        case 12:
                            id = _context2.sent;
                        case 13:
                            return _context2.abrupt("return", {
                                id: id,
                                cookie: cookie
                            });
                        case 14:
                        case "end":
                            return _context2.stop();
                    }
            }, _callee2);
        }))();
    },
    getListDetail: function getListDetail(rawId, page) {
        var _arguments2 = arguments, _this3 = this;
        return _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
            var tryNum, _yield$_this3$getList, id, cookie, requestObj_listDetail, _yield$requestObj_lis2, statusCode, body, limit, rangeStart, list;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1)
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            tryNum = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : 0;
                            if (!(tryNum > 2)) {
                                _context3.next = 3;
                                break;
                            }
                            return _context3.abrupt("return", Promise.reject(new Error('try max num')));
                        case 3:
                            _context3.next = 5;
                            return _this3.getListId(rawId);
                        case 5:
                            _yield$_this3$getList = _context3.sent;
                            id = _yield$_this3$getList.id;
                            cookie = _yield$_this3$getList.cookie;
                            if (cookie)
                                _this3.cookie = cookie;
                            requestObj_listDetail = httpFetch('https://music.163.com/api/linux/forward', {
                                method: 'post',
                                headers: {
                                    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
                                    Cookie: _this3.cookie
                                },
                                form: linuxapi({
                                    method: 'POST',
                                    url: 'https://music.163.com/api/v3/playlist/detail',
                                    params: {
                                        id: id,
                                        n: _this3.limit_song,
                                        s: 8
                                    }
                                })
                            });
                            _context3.next = 12;
                            return requestObj_listDetail.promise;
                        case 12:
                            _yield$requestObj_lis2 = _context3.sent;
                            statusCode = _yield$requestObj_lis2.statusCode;
                            body = _yield$requestObj_lis2.body;
                            if (!(statusCode !== 200 || body.code !== _this3.successCode)) {
                                _context3.next = 17;
                                break;
                            }
                            return _context3.abrupt("return", _this3.getListDetail(id, page, ++tryNum));
                        case 17:
                            limit = 1000;
                            rangeStart = (page - 1) * limit; // console.log(body)
                            if (!(body.playlist.trackIds.length == body.privileges.length)) {
                                _context3.next = 23;
                                break;
                            }
                            list = _this3.filterListDetail(body);
                            _context3.next = 37;
                            break;
                        case 23:
                            _context3.prev = 23;
                            _context3.next = 26;
                            return musicDetailApi.getList(body.playlist.trackIds.slice(rangeStart, limit * page).map(function (trackId) {
                                return trackId.id;
                            }));
                        case 26:
                            list = _context3.sent.list;
                            _context3.next = 37;
                            break;
                        case 29:
                            _context3.prev = 29;
                            _context3.t0 = _context3["catch"](23);
                            console.log(_context3.t0);
                            if (!(_context3.t0.message == 'try max num')) {
                                _context3.next = 36;
                                break;
                            }
                            throw _context3.t0;
                        case 36:
                            return _context3.abrupt("return", _this3.getListDetail(id, page, ++tryNum));
                        case 37:
                            return _context3.abrupt("return", {
                                list: list,
                                page: page,
                                limit: limit,
                                total: body.playlist.trackIds.length,
                                source: 'wy',
                                info: {
                                    play_count: formatPlayCount(body.playlist.playCount),
                                    name: body.playlist.name,
                                    img: body.playlist.coverImgUrl,
                                    desc: body.playlist.description,
                                    author: body.playlist.creator.nickname
                                }
                            });
                        case 38:
                        case "end":
                            return _context3.stop();
                    }
            }, _callee3, null, [[23, 29]]);
        }))();
    },
    filterListDetail: function filterListDetail(_ref) {
        var tracks = _ref.playlist.tracks, privileges = _ref.privileges;
        // console.log(tracks, privileges)
        var list = [];
        tracks.forEach(function (item, index) {
            var types = [];
            var _types = {};
            var size;
            var privilege = privileges[index];
            if (privilege.id !== item.id)
                privilege = privileges.find(function (p) {
                    return p.id === item.id;
                });
            if (!privilege)
                return;
            if (privilege.maxBrLevel == 'hires') {
                size = item.hr ? sizeFormate(item.hr.size) : null;
                types.push({
                    type: 'flac24bit',
                    size: size
                });
                _types.flac24bit = {
                    size: size
                };
            }
            switch (privilege.maxbr) {
                case 999000:
                    size = null;
                    types.push({
                        type: 'flac',
                        size: size
                    });
                    _types.flac = {
                        size: size
                    };
                case 320000:
                    size = item.h ? sizeFormate(item.h.size) : null;
                    types.push({
                        type: '320k',
                        size: size
                    });
                    _types['320k'] = {
                        size: size
                    };
                case 192000:
                case 128000:
                    size = item.l ? sizeFormate(item.l.size) : null;
                    types.push({
                        type: '128k',
                        size: size
                    });
                    _types['128k'] = {
                        size: size
                    };
            }
            types.reverse();
            if (item.pc) {
                var _item$pc$ar, _item$pc$sn, _item$pc$alb, _item$al, _item$al$picUrl, _item$al2;
                list.push({
                    singer: (_item$pc$ar = item.pc.ar) !== null && _item$pc$ar !== void 0 ? _item$pc$ar : '',
                    name: (_item$pc$sn = item.pc.sn) !== null && _item$pc$sn !== void 0 ? _item$pc$sn : '',
                    albumName: (_item$pc$alb = item.pc.alb) !== null && _item$pc$alb !== void 0 ? _item$pc$alb : '',
                    albumId: (_item$al = item.al) === null || _item$al === void 0 ? void 0 : _item$al.id,
                    source: 'wy',
                    interval: formatPlayTime(item.dt / 1000),
                    songmid: item.id,
                    img: (_item$al$picUrl = (_item$al2 = item.al) === null || _item$al2 === void 0 ? void 0 : _item$al2.picUrl) !== null && _item$al$picUrl !== void 0 ? _item$al$picUrl : '',
                    lrc: null,
                    otherSource: null,
                    types: types,
                    _types: _types,
                    typeUrl: {}
                });
            }
            else {
                var _item$name, _item$al3, _item$al4, _item$al5;
                list.push({
                    singer: formatSingerName(item.ar, 'name'),
                    name: (_item$name = item.name) !== null && _item$name !== void 0 ? _item$name : '',
                    albumName: (_item$al3 = item.al) === null || _item$al3 === void 0 ? void 0 : _item$al3.name,
                    albumId: (_item$al4 = item.al) === null || _item$al4 === void 0 ? void 0 : _item$al4.id,
                    source: 'wy',
                    interval: formatPlayTime(item.dt / 1000),
                    songmid: item.id,
                    img: (_item$al5 = item.al) === null || _item$al5 === void 0 ? void 0 : _item$al5.picUrl,
                    lrc: null,
                    otherSource: null,
                    types: types,
                    _types: _types,
                    typeUrl: {}
                });
            }
        });
        return list;
    },
    // 获取列表数据
    getList: function getList(sortId, tagId, page) {
        var _this4 = this;
        var tryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        if (tryNum > 2)
            return Promise.reject(new Error('try max num'));
        if (this._requestObj_list)
            this._requestObj_list.cancelHttp();
        this._requestObj_list = httpFetch('https://music.163.com/weapi/playlist/list', {
            method: 'post',
            form: weapi({
                cat: tagId || '全部',
                // 全部,华语,欧美,日语,韩语,粤语,小语种,流行,摇滚,民谣,电子,舞曲,说唱,轻音乐,爵士,乡村,R&B/Soul,古典,民族,英伦,金属,朋克,蓝调,雷鬼,世界音乐,拉丁,另类/独立,New Age,古风,后摇,Bossa Nova,清晨,夜晚,学习,工作,午休,下午茶,地铁,驾车,运动,旅行,散步,酒吧,怀旧,清新,浪漫,性感,伤感,治愈,放松,孤独,感动,兴奋,快乐,安静,思念,影视原声,ACG,儿童,校园,游戏,70后,80后,90后,网络歌曲,KTV,经典,翻唱,吉他,钢琴,器乐,榜单,00后
                order: sortId,
                // hot,new
                limit: this.limit_list,
                offset: this.limit_list * (page - 1),
                total: true
            })
        });
        return this._requestObj_list.promise.then(function (_ref2) {
            var body = _ref2.body;
            // console.log(body)
            if (body.code !== _this4.successCode)
                return _this4.getList(sortId, tagId, page, ++tryNum);
            return {
                list: _this4.filterList(body.playlists),
                total: parseInt(body.total),
                page: page,
                limit: _this4.limit_list,
                source: 'wy'
            };
        });
    },
    filterList: function filterList(rawData) {
        // console.log(rawData)
        return rawData.map(function (item) {
            return {
                play_count: formatPlayCount(item.playCount),
                id: String(item.id),
                author: item.creator.nickname,
                name: item.name,
                time: item.createTime ? dateFormat(item.createTime, 'Y-M-D') : '',
                img: item.coverImgUrl,
                grade: item.grade,
                total: item.trackCount,
                desc: item.description,
                source: 'wy'
            };
        });
    },
    // 获取标签
    getTag: function getTag() {
        var _this5 = this;
        var tryNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        if (this._requestObj_tags)
            this._requestObj_tags.cancelHttp();
        if (tryNum > 2)
            return Promise.reject(new Error('try max num'));
        this._requestObj_tags = httpFetch('https://music.163.com/weapi/playlist/catalogue', {
            method: 'post',
            form: weapi({})
        });
        return this._requestObj_tags.promise.then(function (_ref3) {
            var body = _ref3.body;
            // console.log(JSON.stringify(body))
            if (body.code !== _this5.successCode)
                return _this5.getTag(++tryNum);
            return _this5.filterTagInfo(body);
        });
    },
    filterTagInfo: function filterTagInfo(_ref4) {
        var sub = _ref4.sub, categories = _ref4.categories;
        var subList = {};
        var _iterator = _createForOfIteratorHelper(sub), _step;
        try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                if (!subList[item.category])
                    subList[item.category] = [];
                subList[item.category].push({
                    parent_id: categories[item.category],
                    parent_name: categories[item.category],
                    id: item.name,
                    name: item.name,
                    source: 'wy'
                });
            }
        }
        catch (err) {
            _iterator.e(err);
        }
        finally {
            _iterator.f();
        }
        var list = [];
        for (var _i2 = 0, _Object$keys = Object.keys(categories); _i2 < _Object$keys.length; _i2++) {
            var key = _Object$keys[_i2];
            list.push({
                name: categories[key],
                list: subList[key],
                source: 'wy'
            });
        }
        return list;
    },
    // 获取热门标签
    getHotTag: function getHotTag() {
        var _this6 = this;
        var tryNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        if (this._requestObj_hotTags)
            this._requestObj_hotTags.cancelHttp();
        if (tryNum > 2)
            return Promise.reject(new Error('try max num'));
        this._requestObj_hotTags = httpFetch('https://music.163.com/weapi/playlist/hottags', {
            method: 'post',
            form: weapi({})
        });
        return this._requestObj_hotTags.promise.then(function (_ref5) {
            var body = _ref5.body;
            // console.log(JSON.stringify(body))
            if (body.code !== _this6.successCode)
                return _this6.getTag(++tryNum);
            return _this6.filterHotTagInfo(body.tags);
        });
    },
    filterHotTagInfo: function filterHotTagInfo(rawList) {
        return rawList.map(function (item) {
            return {
                id: item.playlistTag.name,
                name: item.playlistTag.name,
                source: 'wy'
            };
        });
    },
    getTags: function getTags() {
        return Promise.all([this.getTag(), this.getHotTag()]).then(function (_ref6) {
            var _ref7 = _slicedToArray(_ref6, 2), tags = _ref7[0], hotTag = _ref7[1];
            return {
                tags: tags,
                hotTag: hotTag,
                source: 'wy'
            };
        });
    },
    getDetailPageUrl: function getDetailPageUrl(rawId) {
        var _this7 = this;
        return _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee4() {
            var _yield$_this7$getList, id;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1)
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return _this7.getListId(rawId);
                        case 2:
                            _yield$_this7$getList = _context4.sent;
                            id = _yield$_this7$getList.id;
                            return _context4.abrupt("return", "https://music.163.com/#/playlist?id=".concat(id));
                        case 5:
                        case "end":
                            return _context4.stop();
                    }
            }, _callee4);
        }))();
    },
    search: function search(text, page) {
        var _this8 = this;
        var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
        return eapiRequest('/api/cloudsearch/pc', {
            s: text,
            type: 1000,
            // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频
            limit: limit,
            total: page == 1,
            offset: limit * (page - 1)
        }).promise.then(function (_ref8) {
            var body = _ref8.body;
            if (body.code != _this8.successCode)
                throw new Error('filed');
            // console.log(body)
            return {
                list: _this8.filterList(body.result.playlists),
                limit: limit,
                total: body.result.playlistCount,
                source: 'wy'
            };
        });
    }
}; // getList
// getTags
// getListDetail
exports["default"] = _default;
