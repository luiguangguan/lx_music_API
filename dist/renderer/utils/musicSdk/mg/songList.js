"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
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
var _require = require('../../request'), httpFetch = _require.httpFetch;
var _require2 = require('../index'), dateFormat = _require2.dateFormat, formatPlayCount = _require2.formatPlayCount;
var _require3 = require('./musicInfo'), filterMusicInfoList = _require3.filterMusicInfoList;
var _require4 = require('./musicSearch'), createSignature = _require4.createSignature;
var _require5 = require('./utils/index'), createHttpFetch = _require5.createHttpFetch;
// const tagData = { code: '000000', info: 'SUCCESS', columnInfo: { columnTitle: '分类', columnId: '15244430', columnPid: '15031270', opNumItem: { playNum: 0, playNumDesc: '0', keepNum: 0, keepNumDesc: '0', commentNum: 0, commentNumDesc: '0', shareNum: 0, shareNumDesc: '0', orderNumByWeek: 0, orderNumByWeekDesc: '0', orderNumByTotal: 0, orderNumByTotalDesc: '0', thumbNum: 0, thumbNumDesc: '0', followNum: 0, followNumDesc: '0', subscribeNum: 0, subscribeNumDesc: '0', livePlayNum: 0, livePlayNumDesc: '0', popularNum: 0, popularNumDesc: '0', bookingNum: 0, bookingNumDesc: '0' }, contentsCount: 6, columnStatus: 1, columnCreateTime: '2016-11-10 10:53:05.077', columntype: 2011, contents: [{ contentId: '18464615', relationType: 2011, objectInfo: { columnTitle: '热门', columnId: '18464615', columnPid: '15244430', opNumItem: { playNum: 0, playNumDesc: '0', keepNum: 0, keepNumDesc: '0', commentNum: 0, commentNumDesc: '0', shareNum: 0, shareNumDesc: '0', orderNumByWeek: 0, orderNumByWeekDesc: '0', orderNumByTotal: 0, orderNumByTotalDesc: '0', thumbNum: 0, thumbNumDesc: '0', followNum: 0, followNumDesc: '0', subscribeNum: 0, subscribeNumDesc: '0', livePlayNum: 0, livePlayNumDesc: '0', popularNum: 0, popularNumDesc: '0', bookingNum: 0, bookingNumDesc: '0' }, contentsCount: 8, columnStatus: 1, columnCreateTime: '2017-02-20 16:09:13.400', columntype: 2011, contents: [{ contentId: '1000001672', relationType: 4034, objectInfo: { tagId: '1000001672', tagName: '流行', resourceType: '2034' }, relationSort: 9 }, { contentId: '1003449727', relationType: 4034, objectInfo: { tagId: '1003449727', tagName: '厂牌', resourceType: '2034' }, relationSort: 8 }, { contentId: '1000001795', relationType: 4034, objectInfo: { tagId: '1000001795', tagName: '伤感', resourceType: '2034' }, relationSort: 7 }, { contentId: '1001076080', relationType: 4034, objectInfo: { tagId: '1001076080', tagName: '电影', resourceType: '2034' }, relationSort: 6 }, { contentId: '1000001675', relationType: 4034, objectInfo: { tagId: '1000001675', tagName: '中国风', resourceType: '2034' }, relationSort: 5 }, { contentId: '1000001635', relationType: 4034, objectInfo: { tagId: '1000001635', tagName: '经典老歌', resourceType: '2034' }, relationSort: 4 }, { contentId: '1000001831', relationType: 4034, objectInfo: { tagId: '1000001831', tagName: '翻唱', resourceType: '2034' }, relationSort: 3 }, { contentId: '1000001762', relationType: 4034, objectInfo: { tagId: '1000001762', tagName: '国语', resourceType: '2034' }, relationSort: 1 }], dataVersion: '1620410266029', customizedPicUrls: [] }, relationSort: 6 }, { contentId: '15244503', relationType: 2011, objectInfo: { columnTitle: '主题', columnId: '15244503', columnPid: '15244430', opNumItem: { playNum: 0, playNumDesc: '0', keepNum: 0, keepNumDesc: '0', commentNum: 0, commentNumDesc: '0', shareNum: 0, shareNumDesc: '0', orderNumByWeek: 0, orderNumByWeekDesc: '0', orderNumByTotal: 0, orderNumByTotalDesc: '0', thumbNum: 0, thumbNumDesc: '0', followNum: 0, followNumDesc: '0', subscribeNum: 0, subscribeNumDesc: '0', livePlayNum: 0, livePlayNumDesc: '0', popularNum: 0, popularNumDesc: '0', bookingNum: 0, bookingNumDesc: '0' }, contentsCount: 23, columnStatus: 1, columnCreateTime: '2016-11-10 10:54:10.261', columntype: 2011, contents: [{ contentId: '1003449727', relationType: 4034, objectInfo: { tagId: '1003449727', tagName: '厂牌', resourceType: '2034' }, relationSort: 29 }, { contentId: '1001076080', relationType: 4034, objectInfo: { tagId: '1001076080', tagName: '电影', resourceType: '2034' }, relationSort: 28 }, { contentId: '1001076078', relationType: 4034, objectInfo: { tagId: '1001076078', tagName: '电视剧', resourceType: '2034' }, relationSort: 27 }, { contentId: '1001076083', relationType: 4034, objectInfo: { tagId: '1001076083', tagName: '综艺', resourceType: '2034' }, relationSort: 26 }, { contentId: '1000001827', relationType: 4034, objectInfo: { tagId: '1000001827', tagName: 'KTV', resourceType: '2034' }, relationSort: 23 }, { contentId: '1000001698', relationType: 4034, objectInfo: { tagId: '1000001698', tagName: '爱情', resourceType: '2034' }, relationSort: 22 }, { contentId: '1000001635', relationType: 4034, objectInfo: { tagId: '1000001635', tagName: '经典老歌', resourceType: '2034' }, relationSort: 21 }, { contentId: '1001076096', relationType: 4034, objectInfo: { tagId: '1001076096', tagName: '网络热歌', resourceType: '2034' }, relationSort: 20 }, { contentId: '1000001780', relationType: 4034, objectInfo: { tagId: '1000001780', tagName: '儿童歌曲', resourceType: '2034' }, relationSort: 19 }, { contentId: '1000587702', relationType: 4034, objectInfo: { tagId: '1000587702', tagName: '广场舞', resourceType: '2034' }, relationSort: 18 }, { contentId: '1000587717', relationType: 4034, objectInfo: { tagId: '1000587717', tagName: '70后', resourceType: '2034' }, relationSort: 17 }, { contentId: '1000587718', relationType: 4034, objectInfo: { tagId: '1000587718', tagName: '80后', resourceType: '2034' }, relationSort: 16 }, { contentId: '1000587726', relationType: 4034, objectInfo: { tagId: '1000587726', tagName: '90后', resourceType: '2034' }, relationSort: 15 }, { contentId: '1000001670', relationType: 4034, objectInfo: { tagId: '1000001670', tagName: '红歌', resourceType: '2034' }, relationSort: 14 }, { contentId: '1000587698', relationType: 4034, objectInfo: { tagId: '1000587698', tagName: '游戏', resourceType: '2034' }, relationSort: 13 }, { contentId: '1000587706', relationType: 4034, objectInfo: { tagId: '1000587706', tagName: '动漫', resourceType: '2034' }, relationSort: 12 }, { contentId: '1000001675', relationType: 4034, objectInfo: { tagId: '1000001675', tagName: '中国风', resourceType: '2034' }, relationSort: 11 }, { contentId: '1000587712', relationType: 4034, objectInfo: { tagId: '1000587712', tagName: '青春校园', resourceType: '2034' }, relationSort: 10 }, { contentId: '1000587673', relationType: 4034, objectInfo: { tagId: '1000587673', tagName: '小清新', resourceType: '2034' }, relationSort: 9 }, { contentId: '1000093902', relationType: 4034, objectInfo: { tagId: '1000093902', tagName: 'DJ舞曲', resourceType: '2034' }, relationSort: 7 }, { contentId: '1000093963', relationType: 4034, objectInfo: { tagId: '1000093963', tagName: '广告', resourceType: '2034' }, relationSort: 6 }, { contentId: '1000001831', relationType: 4034, objectInfo: { tagId: '1000001831', tagName: '翻唱', resourceType: '2034' }, relationSort: 2 }, { contentId: '1003449726', relationType: 4034, objectInfo: { tagId: '1003449726', tagName: '读书', resourceType: '2034' }, relationSort: 1 }], dataVersion: '1620410266055', customizedPicUrls: [] }, relationSort: 5 }, { contentId: '15244509', relationType: 2011, objectInfo: { columnTitle: '风格', columnId: '15244509', columnPid: '15244430', opNumItem: { playNum: 0, playNumDesc: '0', keepNum: 0, keepNumDesc: '0', commentNum: 0, commentNumDesc: '0', shareNum: 0, shareNumDesc: '0', orderNumByWeek: 0, orderNumByWeekDesc: '0', orderNumByTotal: 0, orderNumByTotalDesc: '0', thumbNum: 0, thumbNumDesc: '0', followNum: 0, followNumDesc: '0', subscribeNum: 0, subscribeNumDesc: '0', livePlayNum: 0, livePlayNumDesc: '0', popularNum: 0, popularNumDesc: '0', bookingNum: 0, bookingNumDesc: '0' }, contentsCount: 12, columnStatus: 1, columnCreateTime: '2016-11-10 10:54:57.257', columntype: 2011, contents: [{ contentId: '1000001672', relationType: 4034, objectInfo: { tagId: '1000001672', tagName: '流行', resourceType: '2034' }, relationSort: 14 }, { contentId: '1000001808', relationType: 4034, objectInfo: { tagId: '1000001808', tagName: 'R&B', resourceType: '2034' }, relationSort: 13 }, { contentId: '1000001809', relationType: 4034, objectInfo: { tagId: '1000001809', tagName: '嘻哈', resourceType: '2034' }, relationSort: 12 }, { contentId: '1000001674', relationType: 4034, objectInfo: { tagId: '1000001674', tagName: '摇滚', resourceType: '2034' }, relationSort: 11 }, { contentId: '1000001682', relationType: 4034, objectInfo: { tagId: '1000001682', tagName: '电子', resourceType: '2034' }, relationSort: 10 }, { contentId: '1000001852', relationType: 4034, objectInfo: { tagId: '1000001852', tagName: '电子舞曲', resourceType: '2034' }, relationSort: 9 }, { contentId: '1000001681', relationType: 4034, objectInfo: { tagId: '1000001681', tagName: '爵士', resourceType: '2034' }, relationSort: 6 }, { contentId: '1000001683', relationType: 4034, objectInfo: { tagId: '1000001683', tagName: '乡村', resourceType: '2034' }, relationSort: 5 }, { contentId: '1000001851', relationType: 4034, objectInfo: { tagId: '1000001851', tagName: '蓝调', resourceType: '2034' }, relationSort: 4 }, { contentId: '1000001775', relationType: 4034, objectInfo: { tagId: '1000001775', tagName: '民谣', resourceType: '2034' }, relationSort: 3 }, { contentId: '1000001807', relationType: 4034, objectInfo: { tagId: '1000001807', tagName: '纯音乐', resourceType: '2034' }, relationSort: 2 }, { contentId: '1000001783', relationType: 4034, objectInfo: { tagId: '1000001783', tagName: '古典', resourceType: '2034' }, relationSort: 1 }], dataVersion: '1620410266033', customizedPicUrls: [] }, relationSort: 4 }, { contentId: '18464665', relationType: 2011, objectInfo: { columnTitle: '语种', columnId: '18464665', columnPid: '15244430', opNumItem: { playNum: 0, playNumDesc: '0', keepNum: 0, keepNumDesc: '0', commentNum: 0, commentNumDesc: '0', shareNum: 0, shareNumDesc: '0', orderNumByWeek: 0, orderNumByWeekDesc: '0', orderNumByTotal: 0, orderNumByTotalDesc: '0', thumbNum: 0, thumbNumDesc: '0', followNum: 0, followNumDesc: '0', subscribeNum: 0, subscribeNumDesc: '0', livePlayNum: 0, livePlayNumDesc: '0', popularNum: 0, popularNumDesc: '0', bookingNum: 0, bookingNumDesc: '0' }, contentsCount: 6, columnStatus: 1, columnCreateTime: '2017-02-20 16:07:16.566', columntype: 2011, contents: [{ contentId: '1000001762', relationType: 4034, objectInfo: { tagId: '1000001762', tagName: '国语', resourceType: '2034' }, relationSort: 6 }, { contentId: '1000001763', relationType: 4034, objectInfo: { tagId: '1000001763', tagName: '粤语', resourceType: '2034' }, relationSort: 5 }, { contentId: '1000001766', relationType: 4034, objectInfo: { tagId: '1000001766', tagName: '英语', resourceType: '2034' }, relationSort: 4 }, { contentId: '1000001599', relationType: 4034, objectInfo: { tagId: '1000001599', tagName: '韩语', resourceType: '2034' }, relationSort: 3 }, { contentId: '1000001767', relationType: 4034, objectInfo: { tagId: '1000001767', tagName: '日语', resourceType: '2034' }, relationSort: 2 }, { contentId: '1003449724', relationType: 4034, objectInfo: { tagId: '1003449724', tagName: '小语种', resourceType: '2034' }, relationSort: 1 }], dataVersion: '1620410266036', customizedPicUrls: [] }, relationSort: 3 }, { contentId: '18464583', relationType: 2011, objectInfo: { columnTitle: '心情', columnId: '18464583', columnPid: '15244430', opNumItem: { playNum: 0, playNumDesc: '0', keepNum: 0, keepNumDesc: '0', commentNum: 0, commentNumDesc: '0', shareNum: 0, shareNumDesc: '0', orderNumByWeek: 0, orderNumByWeekDesc: '0', orderNumByTotal: 0, orderNumByTotalDesc: '0', thumbNum: 0, thumbNumDesc: '0', followNum: 0, followNumDesc: '0', subscribeNum: 0, subscribeNumDesc: '0', livePlayNum: 0, livePlayNumDesc: '0', popularNum: 0, popularNumDesc: '0', bookingNum: 0, bookingNumDesc: '0' }, contentsCount: 13, columnStatus: 1, columnCreateTime: '2017-02-20 15:59:03.412', columntype: 2011, contents: [{ contentId: '1000587677', relationType: 4034, objectInfo: { tagId: '1000587677', tagName: '幸福', resourceType: '2034' }, relationSort: 15 }, { contentId: '1000587710', relationType: 4034, objectInfo: { tagId: '1000587710', tagName: '治愈', resourceType: '2034' }, relationSort: 14 }, { contentId: '1000001703', relationType: 4034, objectInfo: { tagId: '1000001703', tagName: '思念', resourceType: '2034' }, relationSort: 13 }, { contentId: '1000587667', relationType: 4034, objectInfo: { tagId: '1000587667', tagName: '期待', resourceType: '2034' }, relationSort: 12 }, { contentId: '1000001700', relationType: 4034, objectInfo: { tagId: '1000001700', tagName: '励志', resourceType: '2034' }, relationSort: 11 }, { contentId: '1000001694', relationType: 4034, objectInfo: { tagId: '1000001694', tagName: '欢快', resourceType: '2034' }, relationSort: 10 }, { contentId: '1002600588', relationType: 4034, objectInfo: { tagId: '1002600588', tagName: '叛逆', resourceType: '2034' }, relationSort: 9 }, { contentId: '1002600585', relationType: 4034, objectInfo: { tagId: '1002600585', tagName: '宣泄', resourceType: '2034' }, relationSort: 8 }, { contentId: '1000001696', relationType: 4034, objectInfo: { tagId: '1000001696', tagName: '怀旧', resourceType: '2034' }, relationSort: 7 }, { contentId: '1000587679', relationType: 4034, objectInfo: { tagId: '1000587679', tagName: '减压', resourceType: '2034' }, relationSort: 6 }, { contentId: '1000001699', relationType: 4034, objectInfo: { tagId: '1000001699', tagName: '寂寞', resourceType: '2034' }, relationSort: 5 }, { contentId: '1002600579', relationType: 4034, objectInfo: { tagId: '1002600579', tagName: '忧郁', resourceType: '2034' }, relationSort: 4 }, { contentId: '1000001795', relationType: 4034, objectInfo: { tagId: '1000001795', tagName: '伤感', resourceType: '2034' }, relationSort: 3 }], dataVersion: '1620410266187', customizedPicUrls: [] }, relationSort: 2 }, { contentId: '18464638', relationType: 2011, objectInfo: { columnTitle: '场景', columnId: '18464638', columnPid: '15244430', opNumItem: { playNum: 0, playNumDesc: '0', keepNum: 0, keepNumDesc: '0', commentNum: 0, commentNumDesc: '0', shareNum: 0, shareNumDesc: '0', orderNumByWeek: 0, orderNumByWeekDesc: '0', orderNumByTotal: 0, orderNumByTotalDesc: '0', thumbNum: 0, thumbNumDesc: '0', followNum: 0, followNumDesc: '0', subscribeNum: 0, subscribeNumDesc: '0', livePlayNum: 0, livePlayNumDesc: '0', popularNum: 0, popularNumDesc: '0', bookingNum: 0, bookingNumDesc: '0' }, contentsCount: 13, columnStatus: 1, columnCreateTime: '2017-02-20 16:02:59.711', columntype: 2011, contents: [{ contentId: '1000587689', relationType: 4034, objectInfo: { tagId: '1000587689', tagName: '清晨', resourceType: '2034' }, relationSort: 21 }, { contentId: '1000587690', relationType: 4034, objectInfo: { tagId: '1000587690', tagName: '夜晚', resourceType: '2034' }, relationSort: 20 }, { contentId: '1000587688', relationType: 4034, objectInfo: { tagId: '1000587688', tagName: '睡前安眠', resourceType: '2034' }, relationSort: 19 }, { contentId: '1003449726', relationType: 4034, objectInfo: { tagId: '1003449726', tagName: '读书', resourceType: '2034' }, relationSort: 18 }, { contentId: '1003449723', relationType: 4034, objectInfo: { tagId: '1003449723', tagName: '下午·茶', resourceType: '2034' }, relationSort: 16 }, { contentId: '1000093923', relationType: 4034, objectInfo: { tagId: '1000093923', tagName: '驾车', resourceType: '2034' }, relationSort: 15 }, { contentId: '1003449615', relationType: 4034, objectInfo: { tagId: '1003449615', tagName: '运动', resourceType: '2034' }, relationSort: 13 }, { contentId: '1000587694', relationType: 4034, objectInfo: { tagId: '1000587694', tagName: '散步', resourceType: '2034' }, relationSort: 12 }, { contentId: '1000001749', relationType: 4034, objectInfo: { tagId: '1000001749', tagName: '旅行', resourceType: '2034' }, relationSort: 11 }, { contentId: '1000587686', relationType: 4034, objectInfo: { tagId: '1000587686', tagName: '夜店', resourceType: '2034' }, relationSort: 10 }, { contentId: '1002600606', relationType: 4034, objectInfo: { tagId: '1002600606', tagName: '派对', resourceType: '2034' }, relationSort: 9 }, { contentId: '1000001634', relationType: 4034, objectInfo: { tagId: '1000001634', tagName: '咖啡馆', resourceType: '2034' }, relationSort: 3 }, { contentId: '1000587692', relationType: 4034, objectInfo: { tagId: '1000587692', tagName: '瑜伽', resourceType: '2034' }, relationSort: 1 }], dataVersion: '1620846028994', customizedPicUrls: [] }, relationSort: 1 }], dataVersion: '1620846028941', customizedPicUrls: [] } }
var _default = {
    _requestObj_tags: null,
    _requestObj_list: null,
    limit_list: 10,
    limit_song: 50,
    successCode: '000000',
    cachedDetailInfo: {},
    cachedUrl: {},
    sortList: [{
            name: '推荐',
            id: '15127315'
            // id: '1',
        }, {
            name: '最新',
            id: '15127272'
            // id: '2',
        }],
    regExps: {
        list: /<li><div class="thumb">.+?<\/li>/g,
        listInfo: /.+data-original="(.+?)".*data-id="(\d+)".*<div class="song-list-name"><a\s.*?>(.+?)<\/a>.+<i class="iconfont cf-bofangliang"><\/i>(.+?)<\/div>/,
        // https://music.migu.cn/v3/music/playlist/161044573?page=1
        listDetailLink: /^.+\/playlist\/(\d+)(?:\?.*|&.*$|#.*$|$)/
    },
    tagsUrl: 'https://app.c.nf.migu.cn/MIGUM3.0/v1.0/template/musiclistplaza-taglist/release',
    // tagsUrl: 'https://app.c.nf.migu.cn/MIGUM2.0/v1.0/content/indexTagPage.do?needAll=0',
    getSongListUrl: function getSongListUrl(sortId, tagId, page) {
        // if (tagId == null) {
        //   return sortId == 'recommend'
        //     ? `https://music.migu.cn/v3/music/playlist?page=${page}&from=migu`
        //     : `https://music.migu.cn/v3/music/playlist?sort=${sortId}&page=${page}&from=migu`
        // }
        // return `https://music.migu.cn/v3/music/playlist?tagId=${tagId}&page=${page}&from=migu`
        if (tagId == null) {
            // return `https://app.c.nf.migu.cn/MIGUM2.0/v2.0/content/getMusicData.do?count=${this.limit_list}&start=${page}&templateVersion=5&type=1`
            // return `https://c.musicapp.migu.cn/MIGUM2.0/v2.0/content/getMusicData.do?count=${this.limit_list}&start=${page}&templateVersion=5&type=${sortId}`
            // https://app.c.nf.migu.cn/MIGUM2.0/v2.0/content/getMusicData.do?count=50&start=2&templateVersion=5&type=1
            return "https://m.music.migu.cn/migu/remoting/playlist_bycolumnid_tag?playListType=2&type=1&columnId=".concat(sortId, "&startIndex=").concat((page - 1) * 10);
        }
        // return `https://app.c.nf.migu.cn/MIGUM2.0/v2.0/content/getMusicData.do?area=2&count=${this.limit_list}&start=${page}&tags=${tagId}&templateVersion=5&type=3`
        return "https://m.music.migu.cn/migu/remoting/playlist_bycolumnid_tag?playListType=2&type=1&tagId=".concat(tagId, "&startIndex=").concat((page - 1) * 10);
    },
    getSongListDetailUrl: function getSongListDetailUrl(id, page) {
        return "https://app.c.nf.migu.cn/MIGUM2.0/v1.0/user/queryMusicListSongs.do?musicListId=".concat(id, "&pageNo=").concat(page, "&pageSize=").concat(this.limit_song);
    },
    defaultHeaders: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        Referer: 'https://m.music.migu.cn/'
        // language: 'Chinese',
        // ua: 'Android_migu',
        // mode: 'android',
        // version: '6.8.5',
    },
    getListDetailList: function getListDetailList(id, page) {
        var _this = this;
        var tryNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        if (tryNum > 2)
            return Promise.reject(new Error('try max num'));
        // https://h5.nf.migu.cn/app/v4/p/share/playlist/index.html?id=184187437&channel=0146921
        if (/playlist\/index\.html\?/.test(id)) {
            id = id.replace(/.*(?:\?|&)id=(\d+)(?:&.*|$)/, '$1');
        }
        else if (/[?&:/]/.test(id))
            id = id.replace(this.regExps.listDetailLink, '$1');
        var requestObj_listDetail = httpFetch(this.getSongListDetailUrl(id, page), {
            headers: this.defaultHeaders
        });
        return requestObj_listDetail.promise.then(function (_ref) {
            var body = _ref.body;
            if (body.code !== _this.successCode)
                return _this.getListDetail(id, page, ++tryNum);
            // console.log(JSON.stringify(body))
            // console.log(body)
            return {
                list: filterMusicInfoList(body.list),
                page: page,
                limit: _this.limit_song,
                total: body.totalCount,
                source: 'mg'
            };
        });
    },
    getListDetailInfo: function getListDetailInfo(id) {
        var _this2 = this;
        var tryNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        if (tryNum > 2)
            return Promise.reject(new Error('try max num'));
        if (this.cachedDetailInfo[id])
            return Promise.resolve(this.cachedDetailInfo[id]);
        var requestObj_listDetailInfo = httpFetch("https://c.musicapp.migu.cn/MIGUM3.0/resource/playlist/v2.0?playlistId=".concat(id), {
            headers: this.defaultHeaders
        });
        return requestObj_listDetailInfo.promise.then(function (_ref2) {
            var body = _ref2.body;
            if (body.code !== _this2.successCode)
                return _this2.getListDetail(id, ++tryNum);
            // console.log(JSON.stringify(body))
            // console.log(body)
            var cachedDetailInfo = _this2.cachedDetailInfo[id] = {
                name: body.data.title,
                img: body.data.imgItem.img,
                desc: body.data.summary,
                author: body.data.ownerName,
                play_count: formatPlayCount(body.data.opNumItem.playNum)
            };
            return cachedDetailInfo;
        });
    },
    getDetailUrl: function getDetailUrl(link, page) {
        var _arguments = arguments, _this3 = this;
        return _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
            var retryNum, requestObj_listDetailLink, _yield$requestObj_lis, location, statusCode;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                    switch (_context.prev = _context.next) {
                        case 0:
                            retryNum = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : 0;
                            if (!(retryNum > 3)) {
                                _context.next = 3;
                                break;
                            }
                            return _context.abrupt("return", Promise.reject(new Error('link try max num')));
                        case 3:
                            requestObj_listDetailLink = httpFetch(link, {
                                headers: {
                                    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
                                    Referer: link
                                }
                            });
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
                            return _context.abrupt("return", _this3.getDetailUrl(link, page, ++retryNum));
                        case 11:
                            if (!location) {
                                _context.next = 14;
                                break;
                            }
                            _this3.cachedUrl[link] = location;
                            return _context.abrupt("return", _this3.getListDetail(location, page));
                        case 14:
                            return _context.abrupt("return", Promise.reject(new Error('link get failed')));
                        case 15:
                        case "end":
                            return _context.stop();
                    }
            }, _callee);
        }))();
    },
    getListDetail: function getListDetail(id, page) {
        var retryNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        // 获取歌曲列表内的音乐
        // https://h5.nf.migu.cn/app/v4/p/share/playlist/index.html?id=184187437&channel=0146921
        // http://c.migu.cn/00bTY6?ifrom=babddaadfde4ebeda289d671ab62f236
        if (/playlist\/index\.html\?/.test(id)) {
            id = id.replace(/.*(?:\?|&)id=(\d+)(?:&.*|$)/, '$1');
        }
        else if (this.regExps.listDetailLink.test(id)) {
            id = id.replace(this.regExps.listDetailLink, '$1');
        }
        else if (/[?&:/]/.test(id)) {
            var url = this.cachedUrl[id];
            return url ? this.getListDetail(url, page) : this.getDetailUrl(id, page);
        }
        return Promise.all([this.getListDetailList(id, page, retryNum), this.getListDetailInfo(id, retryNum)]).then(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2), listData = _ref4[0], info = _ref4[1];
            listData.info = info;
            return listData;
        });
    },
    // 获取列表数据
    getList: function getList(sortId, tagId, page) {
        var _this4 = this;
        var tryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        if (this._requestObj_list)
            this._requestObj_list.cancelHttp();
        if (tryNum > 2)
            return Promise.reject(new Error('try max num'));
        this._requestObj_list = httpFetch(this.getSongListUrl(sortId, tagId, page), {
            headers: this.defaultHeaders
            // headers: {
            //   sign: 'c3b7ae985e2206e97f1b2de8f88691e2',
            //   timestamp: 1578225871982,
            //   appId: 'yyapp2',
            //   mode: 'android',
            //   ua: 'Android_migu',
            //   version: '6.9.4',
            //   osVersion: 'android 7.0',
            //   'User-Agent': 'okhttp/3.9.1',
            // },
        });
        // return this._requestObj_list.promise.then(({ statusCode, body }) => {
        //   if (statusCode !== 200) return this.getList(sortId, tagId, page)
        //   let list = body.replace(/[\r\n]/g, '').match(this.regExps.list)
        //   if (!list) return Promise.reject('获取列表失败')
        //   return list.map(item => {
        //     let info = item.match(this.regExps.listInfo)
        //     return {
        //       play_count: info[4],
        //       id: info[2],
        //       author: '',
        //       name: info[3],
        //       time: '',
        //       img: info[1],
        //       grade: 0,
        //       desc: '',
        //       source: 'mg',
        //     }
        //   })
        // })
        return this._requestObj_list.promise.then(function (_ref5) {
            var body = _ref5.body;
            // console.log(body)
            if (body.retCode !== '100000' || body.retMsg.code !== _this4.successCode)
                return _this4.getList(sortId, tagId, page, ++tryNum);
            return {
                list: _this4.filterList(body.retMsg.playlist),
                total: parseInt(body.retMsg.countSize),
                page: page,
                limit: _this4.limit_list,
                source: 'mg'
            };
        });
        // return this._requestObj_list.promise.then(({ body }) => {
        //   if (body.retCode !== '100000') return this.getList(sortId, tagId, page, ++tryNum)
        //   // if (body.code !== '000000') return this.getList(sortId, tagId, page, ++tryNum)
        //   console.log(body)
        //   // return {
        //   //   list: this.filterList(body.data.contentItemList[0].itemList),
        //   //   total: parseInt(body.retMsg.countSize),
        //   //   page,
        //   //   limit: this.limit_list,
        //   //   source: 'mg',
        //   // }
        // })
    },
    filterList: function filterList(rawData) {
        // console.log(rawData)
        return rawData.map(function (item) {
            return {
                play_count: formatPlayCount(item.playCount),
                id: String(item.playListId),
                author: item.createName,
                name: item.playListName,
                time: dateFormat(item.createTime, 'Y-M-D'),
                img: item.image,
                grade: item.grade,
                total: item.contentCount,
                desc: item.summary,
                source: 'mg'
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
        this._requestObj_tags = httpFetch(this.tagsUrl, {
            headers: this.defaultHeaders
        });
        return this._requestObj_tags.promise.then(function (_ref6) {
            var body = _ref6.body;
            if (body.code !== _this5.successCode)
                return _this5.getTag(++tryNum);
            // console.log(body)
            return _this5.filterTagInfo(body.data);
        });
        // return Promise.resolve(this.filterTagInfo(tagData.columnInfo.contents))
    },
    filterTagInfo: function filterTagInfo(rawList) {
        return {
            hotTag: rawList[0].content.map(function (_ref7) {
                var _ref7$texts = _slicedToArray(_ref7.texts, 2), name = _ref7$texts[0], id = _ref7$texts[1];
                return {
                    id: id,
                    name: name,
                    source: 'mg'
                };
            }),
            tags: rawList.slice(1).map(function (_ref8) {
                var header = _ref8.header, content = _ref8.content;
                return {
                    name: header.title,
                    list: content.map(function (_ref9) {
                        var _ref9$texts = _slicedToArray(_ref9.texts, 2), name = _ref9$texts[0], id = _ref9$texts[1];
                        return {
                            // parent_id: objectInfo.columnId,
                            // parent_name: objectInfo.columnTitle,
                            id: id,
                            name: name,
                            source: 'mg'
                        };
                    })
                };
            }),
            source: 'mg'
        };
        // return {
        //   hotTag: rawList[0].objectInfo.contents.map(item => ({
        //     id: item.objectInfo.tagId,
        //     name: item.objectInfo.tagName,
        //     source: 'mg',
        //   })),
        //   tags: rawList.slice(1).map(({ objectInfo }) => ({
        //     name: objectInfo.columnTitle,
        //     list: objectInfo.contents.map(item => ({
        //       parent_id: objectInfo.columnId,
        //       parent_name: objectInfo.columnTitle,
        //       id: item.objectInfo.tagId,
        //       name: item.objectInfo.tagName,
        //       source: 'mg',
        //     })),
        //   })),
        //   source: 'mg',
        // }
    },
    getTags: function getTags() {
        return this.getTag();
    },
    getDetailPageUrl: function getDetailPageUrl(id) {
        if (/playlist\/index\.html\?/.test(id)) {
            id = id.replace(/.*(?:\?|&)id=(\d+)(?:&.*|$)/, '$1');
        }
        else if (this.regExps.listDetailLink.test(id)) {
            id = id.replace(this.regExps.listDetailLink, '$1');
        }
        return "https://music.migu.cn/v3/music/playlist/".concat(id);
    },
    filterSongListResult: function filterSongListResult(raw) {
        var list = [];
        raw.forEach(function (item) {
            if (!item.id)
                return;
            var playCount = parseInt(item.playNum);
            list.push({
                play_count: isNaN(playCount) ? 0 : formatPlayCount(playCount),
                id: item.id,
                author: item.userName,
                name: item.name,
                img: item.musicListPicUrl,
                total: item.musicNum,
                source: 'mg'
            });
        });
        return list;
    },
    search: function search(text, page) {
        var _this6 = this;
        var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
        var timeStr = Date.now().toString();
        var signResult = createSignature(timeStr, text);
        return createHttpFetch("https://jadeite.migu.cn/music_search/v3/search/searchAll?isCorrect=1&isCopyright=1&searchSwitch=%7B%22song%22%3A0%2C%22album%22%3A0%2C%22singer%22%3A0%2C%22tagSong%22%3A0%2C%22mvSong%22%3A0%2C%22bestShow%22%3A0%2C%22songlist%22%3A1%2C%22lyricSong%22%3A0%7D&pageSize=".concat(limit, "&text=").concat(encodeURIComponent(text), "&pageNo=").concat(page, "&sort=0"), {
            headers: {
                uiVersion: 'A_music_3.6.1',
                deviceId: signResult.deviceId,
                timestamp: timeStr,
                sign: signResult.sign,
                channel: '0146921',
                'User-Agent': 'Mozilla/5.0 (Linux; U; Android 11.0.0; zh-cn; MI 11 Build/OPR1.170623.032) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
            }
        }).then(function (body) {
            if (!body.songListResultData)
                throw new Error('get song list faild.');
            var list = _this6.filterSongListResult(body.songListResultData.result);
            return {
                list: list,
                limit: limit,
                total: parseInt(body.songListResultData.totalCount),
                source: 'mg'
            };
        });
    }
}; // getList
// getTags
// getListDetail
exports["default"] = _default;
