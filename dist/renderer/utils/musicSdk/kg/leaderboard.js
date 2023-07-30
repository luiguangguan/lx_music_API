"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
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
var _require = require('../../request'), httpFetch = _require.httpFetch;
var _require2 = require('../index'), decodeName = _require2.decodeName, formatPlayTime = _require2.formatPlayTime, sizeFormate = _require2.sizeFormate;
var _require3 = require('../utils'), formatSingerName = _require3.formatSingerName;
var boardList = [{
        id: 'kg__8888',
        name: 'TOP500',
        bangid: '8888'
    }, {
        id: 'kg__6666',
        name: '飙升榜',
        bangid: '6666'
    }, {
        id: 'kg__59703',
        name: '蜂鸟流行音乐榜',
        bangid: '59703'
    }, {
        id: 'kg__52144',
        name: '抖音热歌榜',
        bangid: '52144'
    }, {
        id: 'kg__52767',
        name: '快手热歌榜',
        bangid: '52767'
    }, {
        id: 'kg__24971',
        name: 'DJ热歌榜',
        bangid: '24971'
    }, {
        id: 'kg__23784',
        name: '网络红歌榜',
        bangid: '23784'
    }, {
        id: 'kg__44412',
        name: '说唱先锋榜',
        bangid: '44412'
    }, {
        id: 'kg__31308',
        name: '内地榜',
        bangid: '31308'
    }, {
        id: 'kg__33160',
        name: '电音榜',
        bangid: '33160'
    }, {
        id: 'kg__31313',
        name: '香港地区榜',
        bangid: '31313'
    }, {
        id: 'kg__51341',
        name: '民谣榜',
        bangid: '51341'
    }, {
        id: 'kg__54848',
        name: '台湾地区榜',
        bangid: '54848'
    }, {
        id: 'kg__31310',
        name: '欧美榜',
        bangid: '31310'
    }, {
        id: 'kg__33162',
        name: 'ACG新歌榜',
        bangid: '33162'
    }, {
        id: 'kg__31311',
        name: '韩国榜',
        bangid: '31311'
    }, {
        id: 'kg__31312',
        name: '日本榜',
        bangid: '31312'
    }, {
        id: 'kg__49225',
        name: '80后热歌榜',
        bangid: '49225'
    }, {
        id: 'kg__49223',
        name: '90后热歌榜',
        bangid: '49223'
    }, {
        id: 'kg__49224',
        name: '00后热歌榜',
        bangid: '49224'
    }, {
        id: 'kg__33165',
        name: '粤语金曲榜',
        bangid: '33165'
    }, {
        id: 'kg__33166',
        name: '欧美金曲榜',
        bangid: '33166'
    }, {
        id: 'kg__33163',
        name: '影视金曲榜',
        bangid: '33163'
    }, {
        id: 'kg__51340',
        name: '伤感榜',
        bangid: '51340'
    }, {
        id: 'kg__35811',
        name: '会员专享榜',
        bangid: '35811'
    }, {
        id: 'kg__37361',
        name: '雷达榜',
        bangid: '37361'
    }, {
        id: 'kg__21101',
        name: '分享榜',
        bangid: '21101'
    }, {
        id: 'kg__46910',
        name: '综艺新歌榜',
        bangid: '46910'
    }, {
        id: 'kg__30972',
        name: '酷狗音乐人原创榜',
        bangid: '30972'
    }, {
        id: 'kg__60170',
        name: '闽南语榜',
        bangid: '60170'
    }, {
        id: 'kg__65234',
        name: '儿歌榜',
        bangid: '65234'
    }, {
        id: 'kg__4681',
        name: '美国BillBoard榜',
        bangid: '4681'
    }, {
        id: 'kg__25028',
        name: 'Beatport电子舞曲榜',
        bangid: '25028'
    }, {
        id: 'kg__4680',
        name: '英国单曲榜',
        bangid: '4680'
    }, {
        id: 'kg__38623',
        name: '韩国Melon音乐榜',
        bangid: '38623'
    }, {
        id: 'kg__42807',
        name: 'joox本地热歌榜',
        bangid: '42807'
    }, {
        id: 'kg__36107',
        name: '小语种热歌榜',
        bangid: '36107'
    }, {
        id: 'kg__4673',
        name: '日本公信榜',
        bangid: '4673'
    }, {
        id: 'kg__46868',
        name: '日本SPACE SHOWER榜',
        bangid: '46868'
    }, {
        id: 'kg__42808',
        name: 'KKBOX风云榜',
        bangid: '42808'
    }, {
        id: 'kg__60171',
        name: '越南语榜',
        bangid: '60171'
    }, {
        id: 'kg__60172',
        name: '泰语榜',
        bangid: '60172'
    }, {
        id: 'kg__59895',
        name: 'R&B榜',
        bangid: '59895'
    }, {
        id: 'kg__59896',
        name: '摇滚榜',
        bangid: '59896'
    }, {
        id: 'kg__59897',
        name: '爵士榜',
        bangid: '59897'
    }, {
        id: 'kg__59898',
        name: '乡村音乐榜',
        bangid: '59898'
    }, {
        id: 'kg__59900',
        name: '纯音乐榜',
        bangid: '59900'
    }, {
        id: 'kg__59899',
        name: '古典榜',
        bangid: '59899'
    }, {
        id: 'kg__22603',
        name: '5sing音乐榜',
        bangid: '22603'
    }, {
        id: 'kg__21335',
        name: '繁星音乐榜',
        bangid: '21335'
    }, {
        id: 'kg__33161',
        name: '古风新歌榜',
        bangid: '33161'
    }];
var _default = {
    listDetailLimit: 100,
    list: [{
            id: 'kgtop500',
            name: 'TOP500',
            bangid: '8888'
        }, {
            id: 'kgwlhgb',
            name: '网络榜',
            bangid: '23784'
        }, {
            id: 'kgbsb',
            name: '飙升榜',
            bangid: '6666'
        }, {
            id: 'kgfxb',
            name: '分享榜',
            bangid: '21101'
        }, {
            id: 'kgcyyb',
            name: '纯音乐榜',
            bangid: '33164'
        }, {
            id: 'kggfjqb',
            name: '古风榜',
            bangid: '33161'
        }, {
            id: 'kgyyjqb',
            name: '粤语榜',
            bangid: '33165'
        }, {
            id: 'kgomjqb',
            name: '欧美榜',
            bangid: '33166'
        }, {
            id: 'kgdyrgb',
            name: '电音榜',
            bangid: '33160'
        }, {
            id: 'kgjdrgb',
            name: 'DJ热歌榜',
            bangid: '24971'
        }, {
            id: 'kghyxgb',
            name: '华语新歌榜',
            bangid: '31308'
        }],
    getUrl: function getUrl(p, id, limit) {
        return "http://mobilecdnbj.kugou.com/api/v3/rank/song?version=9108&ranktype=1&plat=0&pagesize=".concat(limit, "&area_code=1&page=").concat(p, "&rankid=").concat(id, "&with_res_tag=0&show_portrait_mv=1");
    },
    regExps: {
        total: /total: '(\d+)',/,
        page: /page: '(\d+)',/,
        limit: /pagesize: '(\d+)',/,
        listData: /global\.features = (\[.+\]);/
    },
    _requestBoardsObj: null,
    getBoardsData: function getBoardsData() {
        if (this._requestBoardsObj)
            this._requestBoardsObj.cancelHttp();
        this._requestBoardsObj = httpFetch('http://mobilecdnbj.kugou.com/api/v5/rank/list?version=9108&plat=0&showtype=2&parentid=0&apiver=6&area_code=1&withsong=1');
        return this._requestBoardsObj.promise;
    },
    getData: function getData(url) {
        var requestDataObj = httpFetch(url);
        return requestDataObj.promise;
    },
    getSinger: function getSinger(singers) {
        var arr = [];
        singers.forEach(function (singer) {
            arr.push(singer.author_name);
        });
        return arr.join('、');
    },
    filterData: function filterData(rawList) {
        // console.log(rawList)
        return rawList.map(function (item) {
            var types = [];
            var _types = {};
            if (item.filesize !== 0) {
                var size = sizeFormate(item.filesize);
                types.push({
                    type: '128k',
                    size: size,
                    hash: item.hash
                });
                _types['128k'] = {
                    size: size,
                    hash: item.hash
                };
            }
            if (item['320filesize'] !== 0) {
                var _size = sizeFormate(item['320filesize']);
                types.push({
                    type: '320k',
                    size: _size,
                    hash: item['320hash']
                });
                _types['320k'] = {
                    size: _size,
                    hash: item['320hash']
                };
            }
            if (item.sqfilesize !== 0) {
                var _size2 = sizeFormate(item.sqfilesize);
                types.push({
                    type: 'flac',
                    size: _size2,
                    hash: item.sqhash
                });
                _types.flac = {
                    size: _size2,
                    hash: item.sqhash
                };
            }
            if (item.filesize_high !== 0) {
                var _size3 = sizeFormate(item.filesize_high);
                types.push({
                    type: 'flac24bit',
                    size: _size3,
                    hash: item.hash_high
                });
                _types.flac24bit = {
                    size: _size3,
                    hash: item.hash_high
                };
            }
            return {
                singer: formatSingerName(item.authors, 'author_name'),
                name: decodeName(item.songname),
                albumName: decodeName(item.remark),
                albumId: item.album_id,
                songmid: item.audio_id,
                source: 'kg',
                interval: formatPlayTime(item.duration),
                img: null,
                lrc: null,
                hash: item.hash,
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
        var _iterator = _createForOfIteratorHelper(rawList), _step;
        try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var board = _step.value;
                if (board.isvol != 1)
                    continue;
                list.push({
                    id: 'kg__' + board.rankid,
                    name: board.rankname,
                    bangid: String(board.rankid)
                });
            }
        }
        catch (err) {
            _iterator.e(err);
        }
        finally {
            _iterator.f();
        }
        return list;
    },
    getBoards: function getBoards() {
        var _arguments = arguments, _this = this;
        return _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
            var retryNum;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                    switch (_context.prev = _context.next) {
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
                            // if (response.statusCode !== 200 || response.body.errcode !== 0) return this.getBoards(retryNum)
                            // const list = this.filterBoardsData(response.body.data.info)
                            // console.log(list)
                            // // console.log(JSON.stringify(list))
                            // this.list = list
                            // return {
                            //   list,
                            //   source: 'kg',
                            // }
                            _this.list = boardList;
                            return _context.abrupt("return", {
                                list: boardList,
                                source: 'kg'
                            });
                        case 3:
                        case "end":
                            return _context.stop();
                    }
            }, _callee);
        }))();
    },
    getList: function getList(bangid, page) {
        var _arguments2 = arguments, _this2 = this;
        return _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
            var retryNum, _yield$_this2$getData, body, total, limit, listData;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1)
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            retryNum = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : 0;
                            if (!(++retryNum > 3)) {
                                _context2.next = 3;
                                break;
                            }
                            throw new Error('try max num');
                        case 3:
                            _context2.next = 5;
                            return _this2.getData(_this2.getUrl(page, bangid, _this2.listDetailLimit));
                        case 5:
                            _yield$_this2$getData = _context2.sent;
                            body = _yield$_this2$getData.body;
                            if (!(body.errcode != 0)) {
                                _context2.next = 9;
                                break;
                            }
                            return _context2.abrupt("return", _this2.getList(bangid, page, retryNum));
                        case 9:
                            // console.log(body)
                            total = body.data.total;
                            limit = 100;
                            listData = _this2.filterData(body.data.info); // console.log(listData)
                            return _context2.abrupt("return", {
                                total: total,
                                list: listData,
                                limit: limit,
                                page: page,
                                source: 'kg'
                            });
                        case 13:
                        case "end":
                            return _context2.stop();
                    }
            }, _callee2);
        }))();
    },
    getDetailPageUrl: function getDetailPageUrl(id) {
        if (typeof id == 'string')
            id = id.replace('kg__', '');
        return "https://www.kugou.com/yy/rank/home/1-".concat(id, ".html");
    }
};
exports["default"] = _default;
