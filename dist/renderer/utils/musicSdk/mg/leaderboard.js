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
var _require2 = require('./musicInfo'), filterMusicInfoList = _require2.filterMusicInfoList;
// const boardList = [{ id: 'mg__27553319', name: '咪咕尖叫新歌榜', bangid: '27553319' }, { id: 'mg__27186466', name: '咪咕尖叫热歌榜', bangid: '27186466' }, { id: 'mg__27553408', name: '咪咕尖叫原创榜', bangid: '27553408' }, { id: 'mg__23189800', name: '咪咕港台榜', bangid: '23189800' }, { id: 'mg__23189399', name: '咪咕内地榜', bangid: '23189399' }, { id: 'mg__19190036', name: '咪咕欧美榜', bangid: '19190036' }, { id: 'mg__23189813', name: '咪咕日韩榜', bangid: '23189813' }, { id: 'mg__23190126', name: '咪咕彩铃榜', bangid: '23190126' }, { id: 'mg__15140045', name: '咪咕KTV榜', bangid: '15140045' }, { id: 'mg__15140034', name: '咪咕网络榜', bangid: '15140034' }, { id: 'mg__23217754', name: 'MV榜', bangid: '23217754' }, { id: 'mg__23218151', name: '新专辑榜', bangid: '23218151' }, { id: 'mg__21958042', name: 'iTunes榜', bangid: '21958042' }, { id: 'mg__21975570', name: 'billboard榜', bangid: '21975570' }, { id: 'mg__22272815', name: '台湾Hito中文榜', bangid: '22272815' }, { id: 'mg__22272904', name: '中国TOP排行榜', bangid: '22272904' }, { id: 'mg__22272943', name: '韩国Melon榜', bangid: '22272943' }, { id: 'mg__22273437', name: '英国UK榜', bangid: '22273437' }]
var boardList = [{
        id: 'mg__27553319',
        name: '尖叫新歌榜',
        bangid: '27553319',
        webId: 'jianjiao_newsong'
    }, {
        id: 'mg__27186466',
        name: '尖叫热歌榜',
        bangid: '27186466',
        webId: 'jianjiao_hotsong'
    }, {
        id: 'mg__27553408',
        name: '尖叫原创榜',
        bangid: '27553408',
        webId: 'jianjiao_original'
    }, {
        id: 'mg__23189800',
        name: '港台榜',
        bangid: '23189800',
        webId: 'hktw'
    }, {
        id: 'mg__23189399',
        name: '内地榜',
        bangid: '23189399',
        webId: 'mainland'
    }, {
        id: 'mg__19190036',
        name: '欧美榜',
        bangid: '19190036',
        webId: 'eur_usa'
    }, {
        id: 'mg__23189813',
        name: '日韩榜',
        bangid: '23189813',
        webId: 'jpn_kor'
    }, {
        id: 'mg__23190126',
        name: '彩铃榜',
        bangid: '23190126',
        webId: 'coloring'
    }, {
        id: 'mg__15140045',
        name: 'KTV榜',
        bangid: '15140045',
        webId: 'ktv'
    }, {
        id: 'mg__15140034',
        name: '网络榜',
        bangid: '15140034',
        webId: 'network'
    }
    // { id: 'mg__21958042', name: '美国iTunes榜', bangid: '21958042', webId: 'itunes' },
    // { id: 'mg__21975570', name: '美国billboard榜', bangid: '21975570', webId: 'billboard' },
    // { id: 'mg__22272815', name: '台湾Hito中文榜', bangid: '22272815', webId: 'hito' },
    // { id: 'mg__22272943', name: '韩国Melon榜', bangid: '22272943', webId: 'mnet' },
    // { id: 'mg__22273437', name: '英国UK榜', bangid: '22273437', webId: 'uk' },
];
var _default = {
    limit: 200,
    list: [{
            id: 'mgyyb',
            name: '音乐榜',
            bangid: '27553319'
        }, {
            id: 'mgysb',
            name: '影视榜',
            bangid: '23603721'
        }, {
            id: 'mghybnd',
            name: '华语内地榜',
            bangid: '23603926'
        }, {
            id: 'mghyjqbgt',
            name: '华语港台榜',
            bangid: '23603954'
        }, {
            id: 'mgomb',
            name: '欧美榜',
            bangid: '23603974'
        }, {
            id: 'mgrhb',
            name: '日韩榜',
            bangid: '23603982'
        }, {
            id: 'mgwlb',
            name: '网络榜',
            bangid: '23604058'
        }, {
            id: 'mgclb',
            name: '彩铃榜',
            bangid: '23604023'
        }, {
            id: 'mgktvb',
            name: 'KTV榜',
            bangid: '23604040'
        }, {
            id: 'mgrcb',
            name: '原创榜',
            bangid: '23604032'
        }],
    getUrl: function getUrl(id, page) {
        return "https://app.c.nf.migu.cn/MIGUM2.0/v1.0/content/querycontentbyId.do?columnId=".concat(id, "&needAll=0");
        // return `http://m.music.migu.cn/migu/remoting/cms_list_tag?nid=${id}&pageSize=${this.limit}&pageNo=${page - 1}`
    },
    successCode: '000000',
    requestBoardsObj: null,
    getBoardsData: function getBoardsData() {
        if (this.requestBoardsObj)
            this._requestBoardsObj.cancelHttp();
        this.requestBoardsObj = httpFetch('https://app.c.nf.migu.cn/MIGUM3.0/v1.0/template/rank-list/release', {
            // this.requestBoardsObj = httpFetch('https://app.c.nf.migu.cn/MIGUM2.0/v2.0/content/indexrank.do?templateVersion=8', {
            headers: {
                Referer: 'https://app.c.nf.migu.cn/',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
                channel: '0146921'
            }
        });
        return this.requestBoardsObj.promise;
    },
    getData: function getData(url) {
        var requestObj = httpFetch(url);
        return requestObj.promise;
    },
    filterBoardsData: function filterBoardsData(rawList) {
        // console.log(rawList)
        var list = [];
        var _iterator = _createForOfIteratorHelper(rawList), _step;
        try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var board = _step.value;
                if (board.template != 'group1')
                    continue;
                var _iterator2 = _createForOfIteratorHelper(board.itemList), _step2;
                try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var item = _step2.value;
                        if (item.template != 'row1' && item.template != 'grid1' && !item.actionUrl || !item.actionUrl.includes('rank-info'))
                            continue;
                        var data = item.displayLogId.param;
                        list.push({
                            id: 'mg__' + data.rankId,
                            name: data.rankName,
                            bangid: String(data.rankId)
                        });
                    }
                }
                catch (err) {
                    _iterator2.e(err);
                }
                finally {
                    _iterator2.f();
                }
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
                            // // console.log(response.body.data.contentItemList)
                            // if (response.statusCode !== 200 || response.body.code !== this.successCode) return this.getBoards(retryNum)
                            // const list = this.filterBoardsData(response.body.data.contentItemList)
                            // // console.log(list)
                            // // console.log(JSON.stringify(list))
                            // this.list = list
                            // return {
                            //   list,
                            //   source: 'mg',
                            // }
                            _this.list = boardList;
                            return _context.abrupt("return", {
                                list: boardList,
                                source: 'mg'
                            });
                        case 3:
                        case "end":
                            return _context.stop();
                    }
            }, _callee);
        }))();
    },
    getList: function getList(bangid, page) {
        var _this2 = this;
        var retryNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        if (++retryNum > 3)
            return Promise.reject(new Error('try max num'));
        return this.getData(this.getUrl(bangid, page)).then(function (_ref) {
            var statusCode = _ref.statusCode, body = _ref.body;
            // console.log(body)
            if (statusCode !== 200 || body.code !== _this2.successCode)
                return _this2.getList(bangid, page, retryNum);
            var list = filterMusicInfoList(body.columnInfo.contents.map(function (m) {
                return m.objectInfo;
            }));
            return {
                total: list.length,
                list: list,
                limit: _this2.limit,
                page: page,
                source: 'mg'
            };
        });
    },
    getDetailPageUrl: function getDetailPageUrl(id) {
        if (typeof id == 'string')
            id = id.replace('mg__', '');
        for (var _i = 0, _boardList = boardList; _i < _boardList.length; _i++) {
            var item = _boardList[_i];
            if (item.bangid == id) {
                return "https://music.migu.cn/v3/music/top/".concat(item.webId);
            }
        }
        return null;
    }
};
exports["default"] = _default;
