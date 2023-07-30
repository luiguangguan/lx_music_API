"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj);
}
var _excluded = ["headers", "format", "timeout"];
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
function _objectWithoutProperties(source, excluded) { if (source == null)
    return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0)
            continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
        target[key] = source[key];
    }
} return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null)
    return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
        continue;
    target[key] = source[key];
} return target; }
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
var needle = require('needle');
// const progress = require('request-progress');
var _require = require('./env'), debugRequest = _require.debugRequest;
var _require2 = require('./message'), requestMsg = _require2.requestMsg;
var _require3 = require('./musicSdk/options'), bHh = _require3.bHh;
var _require4 = require('zlib'), deflateRaw = _require4.deflateRaw;
// const { proxy } = require('@renderer/store');
var _require5 = require('tunnel'), httpOverHttp = _require5.httpOverHttp, httpsOverHttp = _require5.httpsOverHttp;
// const fs = require('fs');
var httpsRxp = /^https:/;
var getRequestAgent = function getRequestAgent(url) {
    var options;
    // if (proxy.enable && proxy.host) {
    //   options = {
    //     proxy: {
    //       host: proxy.host,
    //       port: proxy.port,
    //     },
    //   }
    // } else if (proxy.envProxy) {
    //   options = {
    //     proxy: {
    //       host: proxy.envProxy.host,
    //       port: proxy.envProxy.port,
    //     },
    //   }
    // }
    options = {
        proxy: {
            host: proxy.envProxy.host,
            port: proxy.envProxy.port
        }
    };
    return options ? (httpsRxp.test(url) ? httpsOverHttp : httpOverHttp)(options) : undefined;
};
var request = function request(url, options, callback) {
    var data;
    if (options.body) {
        data = options.body;
    }
    else if (options.form) {
        data = options.form;
        // data.content_type = 'application/x-www-form-urlencoded'
        options.json = false;
    }
    else if (options.formData) {
        data = options.formData;
        // data.content_type = 'multipart/form-data'
        options.json = false;
    }
    options.response_timeout = options.timeout;
    return needle.request(options.method || 'get', url, data, options, function (err, resp, body) {
        if (!err) {
            body = resp.body = resp.raw.toString();
            try {
                resp.body = JSON.parse(resp.body);
            }
            catch (_) { }
            body = resp.body;
        }
        callback(err, resp, body);
    }).request;
};
var defaultHeaders = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
};
// var proxyUrl = "http://" + user + ":" + password + "@" + host + ":" + port;
// var proxiedRequest = request.defaults({'proxy': proxyUrl});
/**
 * promise 形式的请求方法
 * @param {*} url
 * @param {*} options
 */
var buildHttpPromose = function buildHttpPromose(url, options) {
    var obj = {
        isCancelled: false,
        cancelHttp: function cancelHttp() {
            if (!obj.requestObj)
                return obj.isCancelled = true;
            _cancelHttp(obj.requestObj);
            obj.requestObj = null;
            obj.promise = obj.cancelHttp = null;
            obj.cancelFn(new Error(requestMsg.cancelRequest));
            obj.cancelFn = null;
        }
    };
    obj.promise = new Promise(function (resolve, reject) {
        obj.cancelFn = reject;
        debugRequest && console.log("\n---send request------".concat(url, "------------"));
        fetchData(url, options.method, options, function (err, resp, body) {
            // options.isShowProgress && window.api.hideProgress()
            debugRequest && console.log("\n---response------".concat(url, "------------"));
            debugRequest && console.log(body);
            obj.requestObj = null;
            obj.cancelFn = null;
            if (err)
                return reject(err);
            resolve(resp);
        }).then(function (ro) {
            obj.requestObj = ro;
            if (obj.isCancelled)
                obj.cancelHttp();
        });
    });
    return obj;
};
/**
 * 请求超时自动重试
 * @param {*} url
 * @param {*} options
 */
var httpFetch = function httpFetch(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        method: 'get'
    };
    var requestObj = buildHttpPromose(url, options);
    requestObj.promise = requestObj.promise["catch"](function (err) {
        // console.log('出错', err)
        if (err.message === 'socket hang up') {
            // window.globalObj.apiSource = 'temp'
            return Promise.reject(new Error(requestMsg.unachievable));
        }
        switch (err.code) {
            case 'ETIMEDOUT':
            case 'ESOCKETTIMEDOUT':
                return Promise.reject(new Error(requestMsg.timeout));
            case 'ENOTFOUND':
                return Promise.reject(new Error(requestMsg.notConnectNetwork));
            default:
                return Promise.reject(err);
        }
    });
    return requestObj;
};
/**
 * 取消请求
 * @param {*} index
 */
var _cancelHttp = function _cancelHttp(requestObj) {
    // console.log(requestObj)
    if (!requestObj)
        return;
    // console.log('cancel:', requestObj)
    if (!requestObj.abort)
        return;
    requestObj.abort();
};
/**
 * http 请求
 * @param {*} url 地址
 * @param {*} options 选项
 * @param {*} cb 回调
 * @return {Number} index 用于取消请求
 */
var http = function http(url, options, cb) {
    if (typeof options === 'function') {
        cb = options;
        options = {};
    }
    // 默认选项
    if (options.method == null)
        options.method = 'get';
    debugRequest && console.log("\n---send request------".concat(url, "------------"));
    return fetchData(url, options.method, options, function (err, resp, body) {
        // options.isShowProgress && window.api.hideProgress()
        debugRequest && console.log("\n---response------".concat(url, "------------"));
        debugRequest && console.log(body);
        if (err) {
            debugRequest && console.log(JSON.stringify(err));
        }
        cb(err, resp, body);
    });
};
/**
 * http get 请求
 * @param {*} url 地址
 * @param {*} options 选项
 * @param {*} callback 回调
 * @return {Number} index 用于取消请求
 */
var httpGet = function httpGet(url, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = {};
    }
    // options.isShowProgress && window.api.showProgress({
    //   title: options.progressMsg || '请求中',
    //   modal: true,
    // })
    debugRequest && console.log("\n---send request-------".concat(url, "------------"));
    return fetchData(url, 'get', options, function (err, resp, body) {
        // options.isShowProgress && window.api.hideProgress()
        debugRequest && console.log("\n---response------".concat(url, "------------"));
        debugRequest && console.log(body);
        if (err) {
            debugRequest && console.log(JSON.stringify(err));
        }
        callback(err, resp, body);
    });
};
/**
 * http post 请求
 * @param {*} url 请求地址
 * @param {*} data 提交的数据
 * @param {*} options 选项
 * @param {*} callback 回调
 * @return {Number} index 用于取消请求
 */
var httpPost = function httpPost(url, data, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = {};
    }
    // options.isShowProgress && window.api.showProgress({
    //   title: options.progressMsg || '请求中',
    //   modal: true,
    // })
    options.data = data;
    debugRequest && console.log("\n---send request-------".concat(url, "------------"));
    return fetchData(url, 'post', options, function (err, resp, body) {
        // options.isShowProgress && window.api.hideProgress()
        debugRequest && console.log("\n---response------".concat(url, "------------"));
        debugRequest && console.log(body);
        if (err) {
            debugRequest && console.log(JSON.stringify(err));
        }
        callback(err, resp, body);
    });
};
/**
 * http jsonp 请求
 * @param {*} url 请求地址
 * @param {*} options 选项
 *             options.jsonpCallback 回调
 * @param {*} callback 回调
 * @return {Number} index 用于取消请求
 */
var http_jsonp = function http_jsonp(url, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = {};
    }
    var jsonpCallback = 'jsonpCallback';
    if (url.indexOf('?') < 0)
        url += '?';
    url += "&".concat(options.jsonpCallback, "=").concat(jsonpCallback);
    options.format = 'script';
    // options.isShowProgress && window.api.showProgress({
    //   title: options.progressMsg || '请求中',
    //   modal: true,
    // })
    debugRequest && console.log("\n---send request-------".concat(url, "------------"));
    return fetchData(url, 'get', options, function (err, resp, body) {
        // options.isShowProgress && window.api.hideProgress()
        debugRequest && console.log("\n---response------".concat(url, "------------"));
        debugRequest && console.log(body);
        if (err) {
            debugRequest && console.log(JSON.stringify(err));
        }
        else {
            body = JSON.parse(body.replace(new RegExp("^".concat(jsonpCallback, "\\(({.*})\\)$")), '$1'));
        }
        callback(err, resp, body);
    });
};
var handleDeflateRaw = function handleDeflateRaw(data) {
    return new Promise(function (resolve, reject) {
        deflateRaw(data, function (err, buf) {
            if (err)
                return reject(err);
            resolve(buf);
        });
    });
};
var regx = /(?:\d\w)+/g;
var fetchData = /*#__PURE__*/ function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee(url, method, _ref, callback) {
        var _ref$headers, headers, _ref$format, format, _ref$timeout, timeout, options, path, s, v, v2, v3, v4, v5, v6;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1)
                switch (_context.prev = _context.next) {
                    case 0:
                        _ref$headers = _ref.headers, headers = _ref$headers === void 0 ? {} : _ref$headers, _ref$format = _ref.format, format = _ref$format === void 0 ? 'json' : _ref$format, _ref$timeout = _ref.timeout, timeout = _ref$timeout === void 0 ? 15000 : _ref$timeout, options = _objectWithoutProperties(_ref, _excluded);
                        // console.log(url, options)
                        console.log('---start---', url);
                        headers = Object.assign({}, headers);
                        if (!headers[bHh]) {
                            _context.next = 18;
                            break;
                        }
                        path = url.replace(/^https?:\/\/[\w.:]+\//, '/');
                        s = Buffer.from(bHh, 'hex').toString();
                        s = s.replace(s.substr(-1), '');
                        s = Buffer.from(s, 'base64').toString();
                        v = process.versions.app.split('-')[0].split('.').map(function (n) {
                            return n.length < 3 ? n.padStart(3, '0') : n;
                        }).join('');
                        v2 = process.versions.app.split('-')[1] || '';
                        v3 = "".concat(path).concat(v).match(regx);
                        v4 = JSON.stringify(v3, null, 1).concat(v);
                        v5 = Buffer.from(v4);
                        _context.next = 15;
                        return handleDeflateRaw(v5.toString('base64'));
                    case 15:
                        v6 = _context.sent;
                        headers[s] = !s || "".concat(v6.toString('hex'), "&").concat(parseInt(v)).concat(v2);
                        delete headers[bHh];
                    case 18:
                        return _context.abrupt("return", request(url, _objectSpread(_objectSpread({}, options), {}, {
                            method: method,
                            headers: Object.assign({}, defaultHeaders, headers),
                            timeout: timeout,
                            agent: getRequestAgent(url),
                            json: format === 'json'
                        }), function (err, resp, body) {
                            if (err)
                                return callback(err, null);
                            callback(null, resp, body);
                        }));
                    case 19:
                    case "end":
                        return _context.stop();
                }
        }, _callee);
    }));
    return function fetchData(_x, _x2, _x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();
exports = {
    httpFetch: httpFetch,
    cancelHttp: _cancelHttp,
    http: http,
    httpGet: httpGet,
    httpPost: httpPost,
    http_jsonp: http_jsonp
};
