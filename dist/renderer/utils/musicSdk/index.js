"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj);
}
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr))
    return _arrayLikeToArray(arr); }
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols);
} return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); });
} return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
}
else {
    obj[key] = value;
} return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null)
    return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
        return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
} return (hint === "string" ? String : Number)(input); }
var kw = require('./kw/index');
var kg = require('./kg/index');
var tx = require('./tx/index');
var wy = require('./wy/index');
var mg = require('./mg/index');
var bd = require('./bd/index');
var xm = require('./xm');
var _require = require('./api-source'), supportQuality = _require.supportQuality;
var sources = {
    sources: [{
            name: '酷我音乐',
            id: 'kw'
        }, {
            name: '酷狗音乐',
            id: 'kg'
        }, {
            name: 'QQ音乐',
            id: 'tx'
        }, {
            name: '网易音乐',
            id: 'wy'
        }, {
            name: '咪咕音乐',
            id: 'mg'
        }, {
            name: '虾米音乐',
            id: 'xm'
        }
        // {
        //   name: '百度音乐',
        //   id: 'bd',
        // },
    ],
    kw: kw,
    kg: kg,
    tx: tx,
    wy: wy,
    mg: mg,
    bd: bd,
    xm: xm
};
var _default = _objectSpread(_objectSpread({}, sources), {}, {
    init: function init() {
        var tasks = [];
        var _iterator = _createForOfIteratorHelper(sources.sources), _step;
        try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var source = _step.value;
                var sm = sources[source.id];
                sm && sm.init && tasks.push(sm.init());
            }
        }
        catch (err) {
            _iterator.e(err);
        }
        finally {
            _iterator.f();
        }
        return Promise.all(tasks);
    },
    supportQuality: supportQuality,
    findMusic: function findMusic(_ref) {
        return _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
            var name, singer, albumName, interval, s, tasks, singersRxp, sortSingle, sortMusic, trimStr, filterStr, musicName, sortedSinger, lowerCaseName, lowerCaseAlbumName, excludeSource, _iterator2, _step2, source, result, newResult, _iterator3, _step3, item;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                    switch (_context.prev = _context.next) {
                        case 0:
                            name = _ref.name, singer = _ref.singer, albumName = _ref.albumName, interval = _ref.interval, s = _ref.source;
                            tasks = [];
                            singersRxp = /、|&|;|；|\/|,|，|\|/;
                            sortSingle = function sortSingle(singer) {
                                return singersRxp.test(singer) ? singer.split(singersRxp).sort(function (a, b) {
                                    return a.localeCompare(b);
                                }).join('、') : singer;
                            };
                            sortMusic = function sortMusic(arr, callback) {
                                var tempResult = [];
                                for (var i = arr.length - 1; i > -1; i--) {
                                    var item = arr[i];
                                    if (callback(item)) {
                                        delete item.sortedSinger;
                                        delete item.lowerCaseName;
                                        delete item.lowerCaseAlbumName;
                                        tempResult.push(item);
                                        arr.splice(i, 1);
                                    }
                                }
                                tempResult.reverse();
                                return tempResult;
                            };
                            trimStr = function trimStr(str) {
                                return typeof str == 'string' ? str.trim() : str;
                            };
                            filterStr = function filterStr(str) {
                                return typeof str == 'string' ? str.replace(/\s|'|\.|,|，|&|"|、|\(|\)|（|）|`|~|-|<|>|\||\/|\]|\[/g, '') : str;
                            };
                            musicName = trimStr(name);
                            sortedSinger = filterStr(String(sortSingle(singer)).toLowerCase());
                            lowerCaseName = filterStr(String(musicName).toLowerCase());
                            lowerCaseAlbumName = filterStr(String(albumName).toLowerCase());
                            excludeSource = ['xm'];
                            _iterator2 = _createForOfIteratorHelper(sources.sources);
                            _context.prev = 13;
                            _iterator2.s();
                        case 15:
                            if ((_step2 = _iterator2.n()).done) {
                                _context.next = 22;
                                break;
                            }
                            source = _step2.value;
                            if (!(!sources[source.id].musicSearch || source.id == s || excludeSource.includes(source.id))) {
                                _context.next = 19;
                                break;
                            }
                            return _context.abrupt("continue", 20);
                        case 19:
                            tasks.push(sources[source.id].musicSearch.search("".concat(musicName, " ").concat(singer || '').trim(), 1, 25).then(function (res) {
                                var _iterator4 = _createForOfIteratorHelper(res.list), _step4;
                                try {
                                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                                        var _item$name, _item$albumName;
                                        var _item = _step4.value;
                                        _item.name = trimStr(_item.name);
                                        _item.sortedSinger = filterStr(String(sortSingle(_item.singer)).toLowerCase());
                                        _item.lowerCaseName = filterStr(String((_item$name = _item.name) !== null && _item$name !== void 0 ? _item$name : '').toLowerCase());
                                        _item.lowerCaseAlbumName = filterStr(String((_item$albumName = _item.albumName) !== null && _item$albumName !== void 0 ? _item$albumName : '').toLowerCase());
                                        // console.log(lowerCaseName, item.lowerCaseName, item.source)
                                        if (_item.sortedSinger == sortedSinger && _item.lowerCaseName == lowerCaseName || (interval ? _item.interval == interval : true) && _item.lowerCaseName == lowerCaseName && (_item.sortedSinger.includes(sortedSinger) || sortedSinger.includes(_item.sortedSinger)) || _item.lowerCaseName == lowerCaseName && (lowerCaseAlbumName ? _item.lowerCaseAlbumName == lowerCaseAlbumName : true) && (interval ? _item.interval == interval : true) || _item.lowerCaseName == lowerCaseName && (lowerCaseAlbumName ? _item.lowerCaseAlbumName == lowerCaseAlbumName : true) && (_item.sortedSinger.includes(sortedSinger) || sortedSinger.includes(_item.sortedSinger))) {
                                            return _item;
                                        }
                                    }
                                }
                                catch (err) {
                                    _iterator4.e(err);
                                }
                                finally {
                                    _iterator4.f();
                                }
                                return null;
                            })["catch"](function (_) {
                                return null;
                            }));
                        case 20:
                            _context.next = 15;
                            break;
                        case 22:
                            _context.next = 27;
                            break;
                        case 24:
                            _context.prev = 24;
                            _context.t0 = _context["catch"](13);
                            _iterator2.e(_context.t0);
                        case 27:
                            _context.prev = 27;
                            _iterator2.f();
                            return _context.finish(27);
                        case 30:
                            _context.next = 32;
                            return Promise.all(tasks);
                        case 32:
                            result = _context.sent.filter(function (s) {
                                return s;
                            });
                            newResult = [];
                            if (result.length) {
                                newResult.push.apply(newResult, _toConsumableArray(sortMusic(result, function (item) {
                                    return item.sortedSinger == sortedSinger && item.lowerCaseName == lowerCaseName && item.interval == interval;
                                })));
                                newResult.push.apply(newResult, _toConsumableArray(sortMusic(result, function (item) {
                                    return item.lowerCaseName == lowerCaseName && item.sortedSinger == sortedSinger && item.lowerCaseAlbumName == lowerCaseAlbumName;
                                })));
                                newResult.push.apply(newResult, _toConsumableArray(sortMusic(result, function (item) {
                                    return item.sortedSinger == sortedSinger && item.lowerCaseName == lowerCaseName;
                                })));
                                newResult.push.apply(newResult, _toConsumableArray(sortMusic(result, function (item) {
                                    return item.sortedSinger == sortedSinger && item.interval == interval;
                                })));
                                _iterator3 = _createForOfIteratorHelper(result);
                                try {
                                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                                        item = _step3.value;
                                        delete item.sortedSinger;
                                        delete item.lowerCaseName;
                                        delete item.lowerCaseAlbumName;
                                    }
                                }
                                catch (err) {
                                    _iterator3.e(err);
                                }
                                finally {
                                    _iterator3.f();
                                }
                                newResult.push.apply(newResult, _toConsumableArray(result));
                            }
                            // console.log(newResult)
                            return _context.abrupt("return", newResult);
                        case 36:
                        case "end":
                            return _context.stop();
                    }
            }, _callee, null, [[13, 24, 27, 30]]);
        }))();
    }
});
exports["default"] = _default;
