"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filterMusicInfoItem = exports["default"] = void 0;
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
var _require2 = require('../index'), formatPlayTime = _require2.formatPlayTime, sizeFormate = _require2.sizeFormate;
var _require3 = require('../utils'), formatSingerName = _require3.formatSingerName;
var filterMusicInfoItem = function filterMusicInfoItem(item) {
    var _item$album$id, _item$album$mid, _item$album$name, _item$singer;
    var types = [];
    var _types = {};
    if (item.file.size_128mp3 != 0) {
        var size = sizeFormate(item.file.size_128mp3);
        types.push({
            type: '128k',
            size: size
        });
        _types['128k'] = {
            size: size
        };
    }
    if (item.file.size_320mp3 !== 0) {
        var _size = sizeFormate(item.file.size_320mp3);
        types.push({
            type: '320k',
            size: _size
        });
        _types['320k'] = {
            size: _size
        };
    }
    if (item.file.size_flac !== 0) {
        var _size2 = sizeFormate(item.file.size_flac);
        types.push({
            type: 'flac',
            size: _size2
        });
        _types.flac = {
            size: _size2
        };
    }
    if (item.file.size_hires !== 0) {
        var _size3 = sizeFormate(item.file.size_hires);
        types.push({
            type: 'flac24bit',
            size: _size3
        });
        _types.flac24bit = {
            size: _size3
        };
    }
    var albumId = (_item$album$id = item.album.id) !== null && _item$album$id !== void 0 ? _item$album$id : '';
    var albumMid = (_item$album$mid = item.album.mid) !== null && _item$album$mid !== void 0 ? _item$album$mid : '';
    var albumName = (_item$album$name = item.album.name) !== null && _item$album$name !== void 0 ? _item$album$name : '';
    return {
        source: 'tx',
        singer: formatSingerName(item.singer, 'name'),
        name: item.name,
        albumName: albumName,
        albumId: albumId,
        albumMid: albumMid,
        interval: formatPlayTime(item.interval),
        songId: item.id,
        songmid: item.mid,
        strMediaMid: item.file.media_mid,
        img: albumId === '' || albumId === '空' ? (_item$singer = item.singer) !== null && _item$singer !== void 0 && _item$singer.length ? "https://y.gtimg.cn/music/photo_new/T001R500x500M000".concat(item.singer[0].mid, ".jpg") : '' : "https://y.gtimg.cn/music/photo_new/T002R500x500M000".concat(albumMid, ".jpg"),
        types: types,
        _types: _types,
        typeUrl: {}
    };
};
/**
 * 创建一个适用于TX的Http请求
 * @param {*} url
 * @param {*} options
 * @param {*} retryNum
 */
exports.filterMusicInfoItem = filterMusicInfoItem;
var createMusicuFetch = /*#__PURE__*/ function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee(data, options) {
        var retryNum, result, _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1)
                switch (_context.prev = _context.next) {
                    case 0:
                        retryNum = _args.length > 2 && _args[2] !== undefined ? _args[2] : 0;
                        if (!(retryNum > 2)) {
                            _context.next = 3;
                            break;
                        }
                        throw new Error('try max num');
                    case 3:
                        _context.prev = 3;
                        _context.next = 6;
                        return httpFetch('https://u.y.qq.com/cgi-bin/musicu.fcg', {
                            method: 'POST',
                            body: _objectSpread({
                                comm: {
                                    cv: 4747474,
                                    ct: 24,
                                    format: 'json',
                                    inCharset: 'utf-8',
                                    outCharset: 'utf-8',
                                    uin: 0
                                }
                            }, data),
                            headers: {
                                'User-Angent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)'
                            }
                        }).promise;
                    case 6:
                        result = _context.sent;
                        _context.next = 13;
                        break;
                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context["catch"](3);
                        console.log(_context.t0);
                        return _context.abrupt("return", createMusicuFetch(data, options, ++retryNum));
                    case 13:
                        if (!(result.statusCode !== 200 || result.body.code != 0)) {
                            _context.next = 15;
                            break;
                        }
                        return _context.abrupt("return", createMusicuFetch(data, options, ++retryNum));
                    case 15:
                        return _context.abrupt("return", result.body);
                    case 16:
                    case "end":
                        return _context.stop();
                }
        }, _callee, null, [[3, 9]]);
    }));
    return function createMusicuFetch(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
var _default = {
    /**
     * 获取歌手信息
     * @param {*} id
     */
    getInfo: function getInfo(id) {
        return createMusicuFetch({
            req_1: {
                module: 'music.musichallSinger.SingerInfoInter',
                method: 'GetSingerDetail',
                param: {
                    singer_mid: [id],
                    ex_singer: 1,
                    wiki_singer: 1,
                    group_singer: 0,
                    pic: 1,
                    photos: 0
                }
            },
            req_2: {
                module: 'music.musichallAlbum.AlbumListServer',
                method: 'GetAlbumList',
                param: {
                    singerMid: id,
                    order: 0,
                    begin: 0,
                    num: 1,
                    songNumTag: 0,
                    singerID: 0
                }
            },
            req_3: {
                module: 'musichall.song_list_server',
                method: 'GetSingerSongList',
                param: {
                    singerMid: id,
                    order: 1,
                    begin: 0,
                    num: 1
                }
            }
        }).then(function (body) {
            if (body.req_1.code != 0 || body.req_2 != 0 || body.req_3 != 0)
                throw new Error('get singer info faild.');
            var info = body.req_1.data.singer_list[0];
            var music = body.req_3.data;
            var album = body.req_3.data;
            return {
                source: 'tx',
                id: info.basic_info.singer_mid,
                info: {
                    name: info.basic_info.name,
                    desc: info.ex_info.desc,
                    avatar: info.pic.pic,
                    gender: info.ex_info.genre === 1 ? 'man' : 'woman'
                },
                count: {
                    music: music.totalNum,
                    album: album.total
                }
            };
        });
    },
    /**
     * 获取歌手专辑列表
     * @param {*} id
     * @param {*} page
     * @param {*} limit
     */
    getAlbumList: function getAlbumList(id) {
        var _this = this;
        var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
        if (page === 1)
            page = 0;
        return createMusicuFetch({
            req: {
                module: 'music.musichallAlbum.AlbumListServer',
                method: 'GetAlbumList',
                param: {
                    singerMid: id,
                    order: 0,
                    begin: page * limit,
                    num: limit,
                    songNumTag: 0,
                    singerID: 0
                }
            }
        }).then(function (body) {
            if (body.req.code != 0)
                throw new Error('get singer album faild.');
            var list = _this.filterAlbumList(body.req.data.albumList);
            return {
                source: 'tx',
                list: list,
                limit: limit,
                page: page,
                total: body.req.data.total
            };
        });
    },
    /**
     * 获取歌手歌曲列表
     * @param {*} id
     * @param {*} page
     * @param {*} limit
     */
    getSongList: function getSongList(id) {
        var _arguments = arguments, _this2 = this;
        return _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
            var page, limit;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1)
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            page = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 1;
                            limit = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : 100;
                            if (page === 1)
                                page = 0;
                            return _context2.abrupt("return", createMusicuFetch({
                                req: {
                                    module: 'musichall.song_list_server',
                                    method: 'GetSingerSongList',
                                    param: {
                                        singerMid: id,
                                        order: 1,
                                        begin: page * limit,
                                        num: limit
                                    }
                                }
                            }).then(function (body) {
                                if (body.req.code != 0)
                                    throw new Error('get singer song list faild.');
                                var list = _this2.filterSongList(body.req.data.songList);
                                return {
                                    source: 'tx',
                                    list: list,
                                    limit: limit,
                                    page: page,
                                    total: body.req.data.totalNum
                                };
                            }));
                        case 4:
                        case "end":
                            return _context2.stop();
                    }
            }, _callee2);
        }))();
    },
    filterAlbumList: function filterAlbumList(raw) {
        return raw.map(function (item) {
            return {
                id: item.albumID,
                mid: item.albumMid,
                count: item.totalNum,
                info: {
                    name: item.albumName,
                    author: item.singerName,
                    img: "https://y.gtimg.cn/music/photo_new/T002R500x500M000".concat(item.albumMid, ".jpg"),
                    desc: null
                }
            };
        });
    },
    filterSongList: function filterSongList(raw) {
        raw.map(function (item) {
            return filterMusicInfoItem(item.songInfo);
        });
    }
};
exports["default"] = _default;
