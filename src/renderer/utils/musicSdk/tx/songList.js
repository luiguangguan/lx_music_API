"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require('../../request'),
  httpFetch = _require.httpFetch;
var _require2 = require('../index'),
  decodeName = _require2.decodeName,
  formatPlayTime = _require2.formatPlayTime,
  sizeFormate = _require2.sizeFormate,
  dateFormat = _require2.dateFormat,
  formatPlayCount = _require2.formatPlayCount;
var _require3 = require('../utils'),
  formatSingerName = _require3.formatSingerName;
var _default = {
  _requestObj_tags: null,
  _requestObj_hotTags: null,
  _requestObj_list: null,
  limit_list: 36,
  limit_song: 100000,
  successCode: 0,
  sortList: [{
    name: '最热',
    id: 5
  }, {
    name: '最新',
    id: 2
  }],
  regExps: {
    hotTagHtml: /class="c_bg_link js_tag_item" data-id="\w+">.+?<\/a>/g,
    hotTag: /data-id="(\w+)">(.+?)<\/a>/,
    // https://y.qq.com/n/yqq/playlist/7217720898.html
    // https://i.y.qq.com/n2/m/share/details/taoge.html?platform=11&appshare=android_qq&appversion=9050006&id=7217720898&ADTAG=qfshare
    listDetailLink: /\/playlist\/(\d+)/,
    listDetailLink2: /id=(\d+)/
  },
  tagsUrl: 'https://u.y.qq.com/cgi-bin/musicu.fcg?loginUin=0&hostUin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=wk_v15.json&needNewCode=0&data=%7B%22tags%22%3A%7B%22method%22%3A%22get_all_categories%22%2C%22param%22%3A%7B%22qq%22%3A%22%22%7D%2C%22module%22%3A%22playlist.PlaylistAllCategoriesServer%22%7D%7D',
  hotTagUrl: 'https://c.y.qq.com/node/pc/wk_v15/category_playlist.html',
  getListUrl: function getListUrl(sortId, id, page) {
    if (id) {
      id = parseInt(id);
      return "https://u.y.qq.com/cgi-bin/musicu.fcg?loginUin=0&hostUin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=wk_v15.json&needNewCode=0&data=".concat(encodeURIComponent(JSON.stringify({
        comm: {
          cv: 1602,
          ct: 20
        },
        playlist: {
          method: 'get_category_content',
          param: {
            titleid: id,
            caller: '0',
            category_id: id,
            size: this.limit_list,
            page: page - 1,
            use_page: 1
          },
          module: 'playlist.PlayListCategoryServer'
        }
      })));
    }
    return "https://u.y.qq.com/cgi-bin/musicu.fcg?loginUin=0&hostUin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=wk_v15.json&needNewCode=0&data=".concat(encodeURIComponent(JSON.stringify({
      comm: {
        cv: 1602,
        ct: 20
      },
      playlist: {
        method: 'get_playlist_by_tag',
        param: {
          id: 10000000,
          sin: this.limit_list * (page - 1),
          size: this.limit_list,
          order: sortId,
          cur_page: page
        },
        module: 'playlist.PlayListPlazaServer'
      }
    })));
  },
  getListDetailUrl: function getListDetailUrl(id) {
    return "https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?type=1&json=1&utf8=1&onlysong=0&new_format=1&disstid=".concat(id, "&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0");
  },
  // http://nplserver.kuwo.cn/pl.svc?op=getlistinfo&pid=2849349915&pn=0&rn=100&encode=utf8&keyset=pl2012&identity=kuwo&pcmp4=1&vipver=MUSIC_9.0.5.0_W1&newver=1
  // 获取标签
  getTag: function getTag() {
    var _this = this;
    var tryNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (this._requestObj_tags) this._requestObj_tags.cancelHttp();
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    this._requestObj_tags = httpFetch(this.tagsUrl);
    return this._requestObj_tags.promise.then(function (_ref) {
      var body = _ref.body;
      if (body.code !== _this.successCode) return _this.getTag(++tryNum);
      return _this.filterTagInfo(body.tags.data.v_group);
    });
  },
  // 获取标签
  getHotTag: function getHotTag() {
    var _this2 = this;
    var tryNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (this._requestObj_hotTags) this._requestObj_hotTags.cancelHttp();
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    this._requestObj_hotTags = httpFetch(this.hotTagUrl);
    return this._requestObj_hotTags.promise.then(function (_ref2) {
      var statusCode = _ref2.statusCode,
        body = _ref2.body;
      if (statusCode !== 200) return _this2.getHotTag(++tryNum);
      return _this2.filterInfoHotTag(body);
    });
  },
  filterInfoHotTag: function filterInfoHotTag(html) {
    var _this3 = this;
    var hotTag = html.match(this.regExps.hotTagHtml);
    var hotTags = [];
    if (!hotTag) return hotTags;
    hotTag.forEach(function (tagHtml) {
      var result = tagHtml.match(_this3.regExps.hotTag);
      if (!result) return;
      hotTags.push({
        id: parseInt(result[1]),
        name: result[2],
        source: 'tx'
      });
    });
    return hotTags;
  },
  filterTagInfo: function filterTagInfo(rawList) {
    return rawList.map(function (type) {
      return {
        name: type.group_name,
        list: type.v_item.map(function (item) {
          return {
            parent_id: type.group_id,
            parent_name: type.group_name,
            id: item.id,
            name: item.name,
            source: 'tx'
          };
        })
      };
    });
  },
  // 获取列表数据
  getList: function getList(sortId, tagId, page) {
    var _this4 = this;
    var tryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (this._requestObj_list) this._requestObj_list.cancelHttp();
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    this._requestObj_list = httpFetch(this.getListUrl(sortId, tagId, page));
    // console.log(this.getListUrl(sortId, tagId, page))
    return this._requestObj_list.promise.then(function (_ref3) {
      var body = _ref3.body;
      if (body.code !== _this4.successCode) return _this4.getList(sortId, tagId, page, ++tryNum);
      return tagId ? _this4.filterList2(body.playlist.data, page) : _this4.filterList(body.playlist.data, page);
    });
  },
  filterList: function filterList(data, page) {
    return {
      list: data.v_playlist.map(function (item) {
        var _item$song_ids;
        return {
          play_count: formatPlayCount(item.access_num),
          id: String(item.tid),
          author: item.creator_info.nick,
          name: item.title,
          time: item.modify_time ? dateFormat(item.modify_time * 1000, 'Y-M-D') : '',
          img: item.cover_url_medium,
          // grade: item.favorcnt / 10,
          total: (_item$song_ids = item.song_ids) === null || _item$song_ids === void 0 ? void 0 : _item$song_ids.length,
          desc: item.desc,
          source: 'tx'
        };
      }),
      total: data.total,
      page: page,
      limit: this.limit_list,
      source: 'tx'
    };
  },
  filterList2: function filterList2(_ref4, page) {
    var content = _ref4.content;
    // console.log(content.v_item)
    return {
      list: content.v_item.map(function (_ref5) {
        var basic = _ref5.basic;
        return {
          play_count: formatPlayCount(basic.play_cnt),
          id: String(basic.tid),
          author: basic.creator.nick,
          name: basic.title,
          // time: basic.publish_time,
          img: basic.cover.medium_url || basic.cover.default_url,
          // grade: basic.favorcnt / 10,
          desc: decodeName(basic.desc).replace(/<br>/g, '\n'),
          source: 'tx'
        };
      }),
      total: content.total_cnt,
      page: page,
      limit: this.limit_list,
      source: 'tx'
    };
  },
  handleParseId: function handleParseId(link) {
    var _arguments = arguments,
      _this5 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var retryNum, requestObj_listDetailLink, _yield$requestObj_lis, location, statusCode;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            retryNum = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 0;
            if (!(retryNum > 2)) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", Promise.reject(new Error('link try max num')));
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
            return _context.abrupt("return", _this5.handleParseId(link, ++retryNum));
          case 11:
            return _context.abrupt("return", location == null ? link : location);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  getListId: function getListId(id) {
    var _this6 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!/[?&:/]/.test(id)) {
              _context2.next = 11;
              break;
            }
            if (_this6.regExps.listDetailLink.test(id)) {
              _context2.next = 5;
              break;
            }
            _context2.next = 4;
            return _this6.handleParseId(id);
          case 4:
            id = _context2.sent;
          case 5:
            result = _this6.regExps.listDetailLink.exec(id);
            if (result) {
              _context2.next = 10;
              break;
            }
            result = _this6.regExps.listDetailLink2.exec(id);
            if (result) {
              _context2.next = 10;
              break;
            }
            throw new Error('failed');
          case 10:
            id = result[1];
            // console.log(id)
          case 11:
            return _context2.abrupt("return", id);
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  // 获取歌曲列表内的音乐
  getListDetail: function getListDetail(id) {
    var _arguments2 = arguments,
      _this7 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var tryNum, requestObj_listDetail, _yield$requestObj_lis2, body, cdlist;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            tryNum = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : 0;
            if (!(tryNum > 2)) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return", Promise.reject(new Error('try max num')));
          case 3:
            _context3.next = 5;
            return _this7.getListId(id);
          case 5:
            id = _context3.sent;
            requestObj_listDetail = httpFetch(_this7.getListDetailUrl(id), {
              headers: {
                Origin: 'https://y.qq.com',
                Referer: "https://y.qq.com/n/yqq/playsquare/".concat(id, ".html")
              }
            });
            _context3.next = 9;
            return requestObj_listDetail.promise;
          case 9:
            _yield$requestObj_lis2 = _context3.sent;
            body = _yield$requestObj_lis2.body;
            if (!(body.code !== _this7.successCode)) {
              _context3.next = 13;
              break;
            }
            return _context3.abrupt("return", _this7.getListDetail(id, ++tryNum));
          case 13:
            cdlist = body.cdlist[0];
            return _context3.abrupt("return", {
              list: _this7.filterListDetail(cdlist.songlist),
              page: 1,
              limit: cdlist.songlist.length + 1,
              total: cdlist.songlist.length,
              source: 'tx',
              info: {
                name: cdlist.dissname,
                img: cdlist.logo,
                desc: decodeName(cdlist.desc).replace(/<br>/g, '\n'),
                author: cdlist.nickname,
                play_count: formatPlayCount(cdlist.visitnum)
              }
            });
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  filterListDetail: function filterListDetail(rawList) {
    // console.log(rawList)
    return rawList.map(function (item) {
      var _item$singer;
      var types = [];
      var _types = {};
      if (item.file.size_128mp3 !== 0) {
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
      // types.reverse()
      return {
        singer: formatSingerName(item.singer, 'name'),
        name: item.name,
        albumName: item.album.name,
        albumId: item.album.mid,
        source: 'tx',
        interval: formatPlayTime(item.interval),
        songId: item.id,
        albumMid: item.album.mid,
        strMediaMid: item.file.media_mid,
        songmid: item.mid,
        img: item.album.name === '' || item.album.name === '空' ? (_item$singer = item.singer) !== null && _item$singer !== void 0 && _item$singer.length ? "https://y.gtimg.cn/music/photo_new/T001R500x500M000".concat(item.singer[0].mid, ".jpg") : '' : "https://y.gtimg.cn/music/photo_new/T002R500x500M000".concat(item.album.mid, ".jpg"),
        lrc: null,
        otherSource: null,
        types: types,
        _types: _types,
        typeUrl: {}
      };
    });
  },
  getTags: function getTags() {
    return Promise.all([this.getTag(), this.getHotTag()]).then(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
        tags = _ref7[0],
        hotTag = _ref7[1];
      return {
        tags: tags,
        hotTag: hotTag,
        source: 'tx'
      };
    });
  },
  getDetailPageUrl: function getDetailPageUrl(id) {
    var _this8 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _this8.getListId(id);
          case 2:
            id = _context4.sent;
            return _context4.abrupt("return", "https://y.qq.com/n/ryqq/playlist/".concat(id));
          case 4:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  search: function search(text, page) {
    var _this9 = this;
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
    var retryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (retryNum > 5) throw new Error('max retry');
    return httpFetch("http://c.y.qq.com/soso/fcgi-bin/client_music_search_songlist?page_no=".concat(page - 1, "&num_per_page=").concat(limit, "&format=json&query=").concat(encodeURIComponent(text), "&remoteplace=txt.yqq.playlist&inCharset=utf8&outCharset=utf-8"), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
        Referer: 'http://y.qq.com/portal/search.html'
      }
    }).promise.then(function (_ref8) {
      var body = _ref8.body;
      if (body.code != 0) return _this9.search(text, page, limit, ++retryNum);
      // console.log(body.data.list)
      return {
        list: body.data.list.map(function (item) {
          return {
            play_count: formatPlayCount(item.listennum),
            id: String(item.dissid),
            author: item.creator.name,
            name: item.dissname,
            time: dateFormat(item.createtime, 'Y-M-D'),
            img: item.imgurl,
            // grade: item.favorcnt / 10,
            total: item.song_count,
            desc: item.introduction,
            source: 'tx'
          };
        }),
        limit: limit,
        total: body.data.sum,
        source: 'tx'
      };
    });
  }
}; // getList
// getTags
// getListDetail
exports["default"] = _default;