"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
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
var infSign = require('./vendors/infSign.min');
var _require3 = require('./util'),
  signatureParams = _require3.signatureParams;
var handleSignature = function handleSignature(id, page, limit) {
  return new Promise(function (resolve, reject) {
    infSign({
      appid: 1058,
      type: 0,
      module: 'playlist',
      page: page,
      pagesize: limit,
      specialid: id
    }, null, {
      useH5: !0,
      isCDN: !0,
      callback: function callback(i) {
        resolve(i.signature);
      }
    });
  });
};
var _default = {
  _requestObj_tags: null,
  _requestObj_listInfo: null,
  _requestObj_list: null,
  _requestObj_listRecommend: null,
  listDetailLimit: 10000,
  currentTagInfo: {
    id: undefined,
    info: undefined
  },
  sortList: [{
    name: '推荐',
    id: '5'
  }, {
    name: '最热',
    id: '6'
  }, {
    name: '最新',
    id: '7'
  }, {
    name: '热藏',
    id: '3'
  }, {
    name: '飙升',
    id: '8'
  }],
  cache: new Map(),
  regExps: {
    listData: /global\.data = (\[.+\]);/,
    listInfo: /global = {[\s\S]+?name: "(.+)"[\s\S]+?pic: "(.+)"[\s\S]+?};/,
    // https://www.kugou.com/yy/special/single/1067062.html
    listDetailLink: /^.+\/(\d+)\.html(?:\?.*|&.*$|#.*$|$)/
  },
  // async getGlobalSpecialId(specialId) {
  //   return httpFetch(`http://mobilecdnbj.kugou.com/api/v5/special/info?specialid=${specialId}`, {
  //     headers: {
  //       'User-Agent': 'Mozilla/5.0 (Linux; Android 10; HLK-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Mobile Safari/537.36 EdgA/104.0.1293.70',
  //     },
  //   }).promise.then(({ body }) => {
  //     // console.log(body)
  //     if (!body.data.global_specialid) Promise.reject(new Error('Failed to get global collection id.'))
  //     return body.data.global_specialid
  //   })
  // },
  // async getListInfoBySpecialId(special_id, retry = 0) {
  //   if (++retry > 2) throw new Error('failed')
  //   return httpFetch(`https://m.kugou.com/plist/list/${special_id}/?json=true`, {
  //     headers: {
  //       'User-Agent': 'Mozilla/5.0 (Linux; Android 10; HLK-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Mobile Safari/537.36 EdgA/104.0.1293.70',
  //     },
  //     follow_max: 2,
  //   }).promise.then(({ body }) => {
  //     // console.log(body)
  //     if (!body.info.list) return this.getListInfoBySpecialId(special_id, retry)
  //     let listinfo = body.info.list
  //     return {
  //       listInfo: {
  //         name: listinfo.specialname,
  //         image: listinfo.imgurl.replace('{size}', '150'),
  //         intro: listinfo.intro,
  //         author: listinfo.nickname,
  //         playcount: listinfo.playcount,
  //         total: listinfo.songcount,
  //       },
  //       globalSpecialId: listinfo.global_specialid,
  //     }
  //   })
  // },
  // async getSongListDetailByGlobalSpecialId(id, page, limit = 100, retry = 0) {
  //   if (++retry > 2) throw new Error('failed')
  //   console.log(id)
  //   const params = `specialid=0&need_sort=1&module=CloudMusic&clientver=11409&pagesize=${limit}&global_collection_id=${id}&userid=0&page=${page}&type=1&area_code=1&appid=1005`
  //   return httpFetch(`http://pubsongscdn.tx.kugou.com/v2/get_other_list_file?${params}&signature=${signatureParams(params)}`).promise.then(({ body }) => {
  //     // console.log(body)
  //     if (body.data?.info == null) return this.getSongListDetailByGlobalSpecialId(id, page, limit, retry)
  //     return body.data.info
  //   })
  // },
  parseHtmlDesc: function parseHtmlDesc(html) {
    var prefix = '<div class="pc_specail_text pc_singer_tab_content" id="specailIntroduceWrap">';
    var index = html.indexOf(prefix);
    if (index < 0) return null;
    var afterStr = html.substring(index + prefix.length);
    index = afterStr.indexOf('</div>');
    if (index < 0) return null;
    return decodeName(afterStr.substring(0, index));
  },
  getListDetailBySpecialId: function getListDetailBySpecialId(id, page) {
    var _arguments = arguments,
      _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var tryNum, _yield$httpFetch$prom, body, listData, listInfo, list, name, pic, desc;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            tryNum = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : 0;
            if (!(tryNum > 2)) {
              _context.next = 3;
              break;
            }
            throw new Error('try max num');
          case 3:
            _context.next = 5;
            return httpFetch(_this.getSongListDetailUrl(id)).promise;
          case 5:
            _yield$httpFetch$prom = _context.sent;
            body = _yield$httpFetch$prom.body;
            listData = body.match(_this.regExps.listData);
            listInfo = body.match(_this.regExps.listInfo);
            if (listData) {
              _context.next = 11;
              break;
            }
            return _context.abrupt("return", _this.getListDetailBySpecialId(id, page, ++tryNum));
          case 11:
            _context.next = 13;
            return _this.getMusicInfos(JSON.parse(listData[1]));
          case 13:
            list = _context.sent;
            if (listInfo) {
              name = listInfo[1];
              pic = listInfo[2];
            }
            desc = _this.parseHtmlDesc(body);
            return _context.abrupt("return", {
              list: list,
              page: 1,
              limit: 10000,
              total: list.length,
              source: 'kg',
              info: {
                name: name,
                img: pic,
                desc: desc
                // author: body.result.info.userinfo.username,
                // play_count: formatPlayCount(body.result.listen_num),
              }
            });
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  getInfoUrl: function getInfoUrl(tagId) {
    return tagId ? "http://www2.kugou.kugou.com/yueku/v9/special/getSpecial?is_smarty=1&cdn=cdn&t=5&c=".concat(tagId) : 'http://www2.kugou.kugou.com/yueku/v9/special/getSpecial?is_smarty=1&';
  },
  getSongListUrl: function getSongListUrl(sortId, tagId, page) {
    if (tagId == null) tagId = '';
    return "http://www2.kugou.kugou.com/yueku/v9/special/getSpecial?is_ajax=1&cdn=cdn&t=".concat(sortId, "&c=").concat(tagId, "&p=").concat(page);
  },
  getSongListDetailUrl: function getSongListDetailUrl(id) {
    return "http://www2.kugou.kugou.com/yueku/v9/special/single/".concat(id, "-5-9999.html");
  },
  filterInfoHotTag: function filterInfoHotTag(rawData) {
    var result = [];
    if (rawData.status !== 1) return result;
    for (var _i = 0, _Object$keys = Object.keys(rawData.data); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      var tag = rawData.data[key];
      result.push({
        id: tag.special_id,
        name: tag.special_name,
        source: 'kg'
      });
    }
    return result;
  },
  filterTagInfo: function filterTagInfo(rawData) {
    var result = [];
    for (var _i2 = 0, _Object$keys2 = Object.keys(rawData); _i2 < _Object$keys2.length; _i2++) {
      var name = _Object$keys2[_i2];
      result.push({
        name: name,
        list: rawData[name].data.map(function (tag) {
          return {
            parent_id: tag.parent_id,
            parent_name: tag.pname,
            id: tag.id,
            name: tag.name,
            source: 'kg'
          };
        })
      });
    }
    return result;
  },
  getSongList: function getSongList(sortId, tagId, page) {
    var _this2 = this;
    var tryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (this._requestObj_list) this._requestObj_list.cancelHttp();
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    this._requestObj_list = httpFetch(this.getSongListUrl(sortId, tagId, page));
    return this._requestObj_list.promise.then(function (_ref) {
      var body = _ref.body;
      if (!body || body.status !== 1) return _this2.getSongList(sortId, tagId, page, ++tryNum);
      return _this2.filterList(body.special_db);
    });
  },
  getSongListRecommend: function getSongListRecommend() {
    var _this3 = this;
    var tryNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (this._requestObj_listRecommend) this._requestObj_listRecommend.cancelHttp();
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    this._requestObj_listRecommend = httpFetch('http://everydayrec.service.kugou.com/guess_special_recommend', {
      method: 'post',
      headers: {
        'User-Agent': 'KuGou2012-8275-web_browser_event_handler'
      },
      body: {
        appid: 1001,
        clienttime: 1566798337219,
        clientver: 8275,
        key: 'f1f93580115bb106680d2375f8032d96',
        mid: '21511157a05844bd085308bc76ef3343',
        platform: 'pc',
        userid: '262643156',
        return_min: 6,
        return_max: 15
      }
    });
    return this._requestObj_listRecommend.promise.then(function (_ref2) {
      var body = _ref2.body;
      if (body.status !== 1) return _this3.getSongListRecommend(++tryNum);
      return _this3.filterList(body.data.special_list);
    });
  },
  filterList: function filterList(rawData) {
    return rawData.map(function (item) {
      return {
        play_count: item.total_play_count || formatPlayCount(item.play_count),
        id: 'id_' + item.specialid,
        author: item.nickname,
        name: item.specialname,
        time: dateFormat(item.publish_time || item.publishtime, 'Y-M-D'),
        img: item.img || item.imgurl,
        total: item.songcount,
        grade: item.grade,
        desc: item.intro,
        source: 'kg'
      };
    });
  },
  createHttp: function createHttp(url, options) {
    var _arguments2 = arguments,
      _this4 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var retryNum, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            retryNum = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : 0;
            if (!(retryNum > 2)) {
              _context2.next = 3;
              break;
            }
            throw new Error('try max num');
          case 3:
            _context2.prev = 3;
            _context2.next = 6;
            return httpFetch(url, options).promise;
          case 6:
            result = _context2.sent;
            _context2.next = 13;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);
            return _context2.abrupt("return", _this4.createHttp(url, options, ++retryNum));
          case 13:
            if (!(result.statusCode !== 200 || (result.body.error_code !== undefined ? result.body.error_code : result.body.errcode !== undefined ? result.body.errcode : result.body.err_code) !== 0)) {
              _context2.next = 15;
              break;
            }
            return _context2.abrupt("return", _this4.createHttp(url, options, ++retryNum));
          case 15:
            if (!result.body.data) {
              _context2.next = 17;
              break;
            }
            return _context2.abrupt("return", result.body.data);
          case 17:
            if (!Array.isArray(result.body.info)) {
              _context2.next = 19;
              break;
            }
            return _context2.abrupt("return", result.body);
          case 19:
            return _context2.abrupt("return", result.body.info);
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[3, 9]]);
    }))();
  },
  createTask: function createTask(hashs) {
    var _this5 = this;
    var data = {
      appid: 1001,
      clienttime: 639437935,
      clientver: 9020,
      fields: 'album_info,author_name,audio_info,ori_audio_name',
      is_publish: '1',
      key: '0475af1457cd3363c7b45b871e94428a',
      mid: '21511157a05844bd085308bc76ef3342',
      show_privilege: 1
    };
    var list = hashs;
    var tasks = [];
    while (list.length) {
      tasks.push(Object.assign({
        data: list.slice(0, 100)
      }, data));
      if (list.length < 100) break;
      list = list.slice(100);
    }
    var url = 'http://kmr.service.kugou.com/v2/album_audio/audio';
    return tasks.map(function (task) {
      return _this5.createHttp(url, {
        method: 'POST',
        body: task,
        headers: {
          'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
        }
      }).then(function (data) {
        return data.map(function (s) {
          return s[0];
        });
      });
    });
  },
  getMusicInfos: function getMusicInfos(list) {
    var _this6 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = _this6;
            _context3.next = 3;
            return Promise.all(_this6.createTask(_this6.deDuplication(list).map(function (item) {
              return {
                hash: item.hash
              };
            }))).then(function (_ref3) {
              var _ref4 = _toArray(_ref3),
                datas = _ref4.slice(0);
              return datas.flat();
            });
          case 3:
            _context3.t1 = _context3.sent;
            return _context3.abrupt("return", _context3.t0.filterData2.call(_context3.t0, _context3.t1));
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  getUserListDetailByCode: function getUserListDetailByCode(id) {
    var _this7 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var songInfo, songList, info, list;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _this7.createHttp('http://t.kugou.com/command/', {
              method: 'POST',
              headers: {
                'KG-RC': 1,
                'KG-THash': 'network_super_call.cpp:3676261689:379',
                'User-Agent': ''
              },
              body: {
                appid: 1001,
                clientver: 9020,
                mid: '21511157a05844bd085308bc76ef3343',
                clienttime: 640612895,
                key: '36164c4015e704673c588ee202b9ecb8',
                data: id
              }
            });
          case 2:
            songInfo = _context4.sent;
            info = songInfo.info;
            _context4.t0 = info.type;
            _context4.next = _context4.t0 === 2 ? 7 : 10;
            break;
          case 7:
            if (info.global_collection_id) {
              _context4.next = 9;
              break;
            }
            return _context4.abrupt("return", _this7.getListDetailBySpecialId(info.id));
          case 9:
            return _context4.abrupt("break", 11);
          case 10:
            return _context4.abrupt("break", 11);
          case 11:
            if (!info.global_collection_id) {
              _context4.next = 13;
              break;
            }
            return _context4.abrupt("return", _this7.getUserListDetail2(info.global_collection_id));
          case 13:
            if (!(info.userid != null)) {
              _context4.next = 17;
              break;
            }
            _context4.next = 16;
            return _this7.createHttp('http://www2.kugou.kugou.com/apps/kucodeAndShare/app/', {
              method: 'POST',
              headers: {
                'KG-RC': 1,
                'KG-THash': 'network_super_call.cpp:3676261689:379',
                'User-Agent': ''
              },
              body: {
                appid: 1001,
                clientver: 9020,
                mid: '21511157a05844bd085308bc76ef3343',
                clienttime: 640612895,
                key: '36164c4015e704673c588ee202b9ecb8',
                data: {
                  id: info.id,
                  type: 3,
                  userid: info.userid,
                  collect_type: 0,
                  page: 1,
                  pagesize: info.count
                }
              }
            });
          case 16:
            songList = _context4.sent;
          case 17:
            _context4.next = 19;
            return _this7.getMusicInfos(songList || songInfo.list);
          case 19:
            list = _context4.sent;
            return _context4.abrupt("return", {
              list: list,
              page: 1,
              limit: info.count,
              total: list.length,
              source: 'kg',
              info: {
                name: info.name,
                img: info.img_size && info.img_size.replace('{size}', 240) || info.img,
                // desc: body.result.info.list_desc,
                author: info.username
                // play_count: formatPlayCount(info.count),
              }
            });
          case 21:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  getUserListDetail3: function getUserListDetail3(chain, page) {
    var _this8 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var songInfo, list;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _this8.createHttp("http://m.kugou.com/schain/transfer?pagesize=".concat(_this8.listDetailLimit, "&chain=").concat(chain, "&su=1&page=").concat(page, "&n=0.7928855356604456"), {
              headers: {
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
              }
            });
          case 2:
            songInfo = _context5.sent;
            if (songInfo.list) {
              _context5.next = 9;
              break;
            }
            if (!songInfo.global_collection_id) {
              _context5.next = 8;
              break;
            }
            return _context5.abrupt("return", _this8.getUserListDetail2(songInfo.global_collection_id));
          case 8:
            return _context5.abrupt("return", _this8.getUserListDetail4(songInfo, chain, page)["catch"](function () {
              return _this8.getUserListDetail5(chain);
            }));
          case 9:
            _context5.next = 11;
            return _this8.getMusicInfos(songInfo.list);
          case 11:
            list = _context5.sent;
            return _context5.abrupt("return", {
              list: list,
              page: 1,
              limit: _this8.listDetailLimit,
              total: list.length,
              source: 'kg',
              info: {
                name: songInfo.info.name,
                img: songInfo.info.img,
                // desc: body.result.info.list_desc,
                author: songInfo.info.username
                // play_count: formatPlayCount(info.count),
              }
            });
          case 13:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  },
  deDuplication: function deDuplication(datas) {
    var ids = new Set();
    return datas.filter(function (_ref5) {
      var hash = _ref5.hash;
      if (ids.has(hash)) return false;
      ids.add(hash);
      return true;
    });
  },
  getUserListDetailByLink: function getUserListDetailByLink(_ref6, link) {
    var _this9 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var info, listInfo, total, tasks, page, limit, result;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            info = _ref6.info;
            listInfo = info['0'];
            total = listInfo.count;
            tasks = [];
            page = 0;
            while (total) {
              limit = total > 90 ? 90 : total;
              total -= limit;
              page += 1;
              tasks.push(_this9.createHttp(link.replace(/pagesize=\d+/, 'pagesize=' + limit).replace(/page=\d+/, 'page=' + page), {
                headers: {
                  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
                  Referer: link
                }
              }).then(function (data) {
                return data.list.info;
              }));
            }
            _context6.next = 8;
            return Promise.all(tasks).then(function (_ref7) {
              var _ref8 = _toArray(_ref7),
                datas = _ref8.slice(0);
              return datas.flat();
            });
          case 8:
            result = _context6.sent;
            _context6.next = 11;
            return _this9.getMusicInfos(result);
          case 11:
            result = _context6.sent;
            return _context6.abrupt("return", {
              list: result,
              page: page,
              limit: _this9.listDetailLimit,
              total: result.length,
              source: 'kg',
              info: {
                name: listInfo.name,
                img: listInfo.pic && listInfo.pic.replace('{size}', 240),
                // desc: body.result.info.list_desc,
                author: listInfo.list_create_username
                // play_count: formatPlayCount(listInfo.count),
              }
            });
          case 13:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }))();
  },
  createGetListDetail2Task: function createGetListDetail2Task(id, total) {
    var tasks = [];
    var page = 0;
    while (total) {
      var limit = total > 300 ? 300 : total;
      total -= limit;
      page += 1;
      var params = 'appid=1058&global_specialid=' + id + '&specialid=0&plat=0&version=8000&page=' + page + '&pagesize=' + limit + '&srcappid=2919&clientver=20000&clienttime=1586163263991&mid=1586163263991&uuid=1586163263991&dfid=-';
      tasks.push(this.createHttp("https://mobiles.kugou.com/api/v5/special/song_v2?".concat(params, "&signature=").concat(signatureParams(params, 5)), {
        headers: {
          mid: '1586163263991',
          Referer: 'https://m3ws.kugou.com/share/index.php',
          'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
          dfid: '-',
          clienttime: '1586163263991'
        }
      }).then(function (data) {
        return data.info;
      }));
    }
    return Promise.all(tasks).then(function (_ref9) {
      var _ref10 = _toArray(_ref9),
        datas = _ref10.slice(0);
      return datas.flat();
    });
  },
  getUserListDetail2: function getUserListDetail2(global_collection_id) {
    var _this10 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var id, params, info, songInfo, list;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            id = global_collection_id;
            if (!(id.length > 1000)) {
              _context7.next = 3;
              break;
            }
            throw new Error('get list error');
          case 3:
            params = 'appid=1058&specialid=0&global_specialid=' + id + '&format=jsonp&srcappid=2919&clientver=20000&clienttime=1586163242519&mid=1586163242519&uuid=1586163242519&dfid=-';
            _context7.next = 6;
            return _this10.createHttp("https://mobiles.kugou.com/api/v5/special/info_v2?".concat(params, "&signature=").concat(signatureParams(params, 5)), {
              headers: {
                mid: '1586163242519',
                Referer: 'https://m3ws.kugou.com/share/index.php',
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
                dfid: '-',
                clienttime: '1586163242519'
              }
            });
          case 6:
            info = _context7.sent;
            _context7.next = 9;
            return _this10.createGetListDetail2Task(id, info.songcount);
          case 9:
            songInfo = _context7.sent;
            _context7.next = 12;
            return _this10.getMusicInfos(songInfo);
          case 12:
            list = _context7.sent;
            return _context7.abrupt("return", {
              list: list,
              page: 1,
              limit: _this10.listDetailLimit,
              total: list.length,
              source: 'kg',
              info: {
                name: info.specialname,
                img: info.imgurl && info.imgurl.replace('{size}', 240),
                desc: info.intro,
                author: info.nickname,
                play_count: formatPlayCount(info.playcount)
              }
            });
          case 14:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }))();
  },
  getListInfoByChain: function getListInfoByChain(chain) {
    var _this11 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var _yield$httpFetch$prom2, body, result;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            if (!_this11.cache.has(chain)) {
              _context8.next = 2;
              break;
            }
            return _context8.abrupt("return", _this11.cache.get(chain));
          case 2:
            _context8.next = 4;
            return httpFetch("https://m.kugou.com/share/?chain=".concat(chain, "&id=").concat(chain), {
              headers: {
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
              }
            }).promise;
          case 4:
            _yield$httpFetch$prom2 = _context8.sent;
            body = _yield$httpFetch$prom2.body;
            result = body.match(/var\sphpParam\s=\s({.+?});/);
            if (result) result = JSON.parse(result[1]);
            _this11.cache.set(chain, result);
            return _context8.abrupt("return", result);
          case 10:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }))();
  },
  getUserListDetailByPcChain: function getUserListDetailByPcChain(chain) {
    var _this12 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var key, _yield$httpFetch$prom3, body, result;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            key = "".concat(chain, "_pc_list");
            if (!_this12.cache.has(key)) {
              _context9.next = 3;
              break;
            }
            return _context9.abrupt("return", _this12.cache.get(key));
          case 3:
            _context9.next = 5;
            return httpFetch("http://www.kugou.com/share/".concat(chain, ".html"), {
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
              }
            }).promise;
          case 5:
            _yield$httpFetch$prom3 = _context9.sent;
            body = _yield$httpFetch$prom3.body;
            result = body.match(/var\sdataFromSmarty\s=\s(\[.+?\])/);
            if (result) result = JSON.parse(result[1]);
            _this12.cache.set(chain, result);
            _context9.next = 12;
            return _this12.getMusicInfos(result);
          case 12:
            result = _context9.sent;
            return _context9.abrupt("return", result);
          case 14:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }))();
  },
  getUserListDetail4: function getUserListDetail4(songInfo, chain, page) {
    var _this13 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var _list$length;
      var limit, _yield$Promise$all, _yield$Promise$all2, listInfo, list;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            limit = 100;
            _context10.next = 3;
            return Promise.all([_this13.getListInfoByChain(chain), _this13.getUserListDetailById(songInfo.id, page, limit)]);
          case 3:
            _yield$Promise$all = _context10.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            listInfo = _yield$Promise$all2[0];
            list = _yield$Promise$all2[1];
            return _context10.abrupt("return", {
              list: list || [],
              page: page,
              limit: limit,
              total: (_list$length = list.length) !== null && _list$length !== void 0 ? _list$length : 0,
              source: 'kg',
              info: {
                name: listInfo.specialname,
                img: listInfo.imgurl && listInfo.imgurl.replace('{size}', 240),
                // desc: body.result.info.list_desc,
                author: listInfo.nickname
                // play_count: formatPlayCount(info.count),
              }
            });
          case 8:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }))();
  },
  getUserListDetail5: function getUserListDetail5(chain) {
    var _this14 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var _list$length2;
      var _yield$Promise$all3, _yield$Promise$all4, listInfo, list;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return Promise.all([_this14.getListInfoByChain(chain), _this14.getUserListDetailByPcChain(chain)]);
          case 2:
            _yield$Promise$all3 = _context11.sent;
            _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
            listInfo = _yield$Promise$all4[0];
            list = _yield$Promise$all4[1];
            return _context11.abrupt("return", {
              list: list || [],
              page: 1,
              limit: _this14.listDetailLimit,
              total: (_list$length2 = list.length) !== null && _list$length2 !== void 0 ? _list$length2 : 0,
              source: 'kg',
              info: {
                name: listInfo.specialname,
                img: listInfo.imgurl && listInfo.imgurl.replace('{size}', 240),
                // desc: body.result.info.list_desc,
                author: listInfo.nickname
                // play_count: formatPlayCount(info.count),
              }
            });
          case 7:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }))();
  },
  getUserListDetailById: function getUserListDetailById(id, page, limit) {
    var _this15 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      var signature, info, result;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return handleSignature(id, page, limit);
          case 2:
            signature = _context12.sent;
            _context12.next = 5;
            return _this15.createHttp("https://pubsongscdn.kugou.com/v2/get_other_list_file?srcappid=2919&clientver=20000&appid=1058&type=0&module=playlist&page=".concat(page, "&pagesize=").concat(limit, "&specialid=").concat(id, "&signature=").concat(signature), {
              headers: {
                Referer: 'https://m3ws.kugou.com/share/index.php',
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
                dfid: '-'
              }
            });
          case 5:
            info = _context12.sent;
            _context12.next = 8;
            return _this15.getMusicInfos(info.info);
          case 8:
            result = _context12.sent;
            return _context12.abrupt("return", result);
          case 10:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }))();
  },
  getUserListDetail: function getUserListDetail(link, page) {
    var _arguments3 = arguments,
      _this16 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      var retryNum, requestObj_listDetailLink, _yield$requestObj_lis, location, statusCode, body, _link;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            retryNum = _arguments3.length > 2 && _arguments3[2] !== undefined ? _arguments3[2] : 0;
            if (!(retryNum > 3)) {
              _context13.next = 3;
              break;
            }
            return _context13.abrupt("return", Promise.reject(new Error('link try max num')));
          case 3:
            if (link.includes('#')) link = link.replace(/#.*$/, '');
            if (!link.includes('global_collection_id')) {
              _context13.next = 6;
              break;
            }
            return _context13.abrupt("return", _this16.getUserListDetail2(link.replace(/^.*?global_collection_id=(\w+)(?:&.*$|#.*$|$)/, '$1')));
          case 6:
            if (!link.includes('chain=')) {
              _context13.next = 8;
              break;
            }
            return _context13.abrupt("return", _this16.getUserListDetail3(link.replace(/^.*?chain=(\w+)(?:&.*$|#.*$|$)/, '$1'), page));
          case 8:
            if (!link.includes('.html')) {
              _context13.next = 16;
              break;
            }
            if (!link.includes('zlist.html')) {
              _context13.next = 14;
              break;
            }
            link = link.replace(/^(.*)zlist\.html/, 'https://m3ws.kugou.com/zlist/list');
            if (link.includes('pagesize')) {
              link = link.replace('pagesize=30', 'pagesize=' + _this16.listDetailLimit).replace('page=1', 'page=' + page);
            } else {
              link += "&pagesize=".concat(_this16.listDetailLimit, "&page=").concat(page);
            }
            _context13.next = 16;
            break;
          case 14:
            if (link.includes('song.html')) {
              _context13.next = 16;
              break;
            }
            return _context13.abrupt("return", _this16.getUserListDetail3(link.replace(/.+\/(\w+).html(?:\?.*|&.*$|#.*$|$)/, '$1'), page));
          case 16:
            requestObj_listDetailLink = httpFetch(link, {
              headers: {
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
                Referer: link
              }
            });
            _context13.next = 19;
            return requestObj_listDetailLink.promise;
          case 19:
            _yield$requestObj_lis = _context13.sent;
            location = _yield$requestObj_lis.headers.location;
            statusCode = _yield$requestObj_lis.statusCode;
            body = _yield$requestObj_lis.body;
            if (!(statusCode > 400)) {
              _context13.next = 25;
              break;
            }
            return _context13.abrupt("return", _this16.getUserListDetail(link, page, ++retryNum));
          case 25:
            if (!location) {
              _context13.next = 39;
              break;
            }
            if (!location.includes('global_collection_id')) {
              _context13.next = 28;
              break;
            }
            return _context13.abrupt("return", _this16.getUserListDetail2(location.replace(/^.*?global_collection_id=(\w+)(?:&.*$|#.*$|$)/, '$1')));
          case 28:
            if (!location.includes('chain=')) {
              _context13.next = 30;
              break;
            }
            return _context13.abrupt("return", _this16.getUserListDetail3(location.replace(/^.*?chain=(\w+)(?:&.*$|#.*$|$)/, '$1'), page));
          case 30:
            if (!location.includes('.html')) {
              _context13.next = 38;
              break;
            }
            if (!location.includes('zlist.html')) {
              _context13.next = 37;
              break;
            }
            _link = location.replace(/^(.*)zlist\.html/, 'https://m3ws.kugou.com/zlist/list');
            if (_link.includes('pagesize')) {
              _link = _link.replace('pagesize=30', 'pagesize=' + _this16.listDetailLimit).replace('page=1', 'page=' + page);
            } else {
              _link += "&pagesize=".concat(_this16.listDetailLimit, "&page=").concat(page);
            }
            return _context13.abrupt("return", _this16.getUserListDetail(_link, page, ++retryNum));
          case 37:
            return _context13.abrupt("return", _this16.getUserListDetail3(location.replace(/.+\/(\w+).html(?:\?.*|&.*$|#.*$|$)/, '$1'), page));
          case 38:
            return _context13.abrupt("return", _this16.getUserListDetail(location, page, ++retryNum));
          case 39:
            if (!(typeof body == 'string')) {
              _context13.next = 41;
              break;
            }
            return _context13.abrupt("return", _this16.getUserListDetail2(body.replace(/^[\s\S]+?"global_collection_id":"(\w+)"[\s\S]+?$/, '$1')));
          case 41:
            if (!(body.errcode !== 0)) {
              _context13.next = 43;
              break;
            }
            return _context13.abrupt("return", _this16.getUserListDetail(link, page, ++retryNum));
          case 43:
            return _context13.abrupt("return", _this16.getUserListDetailByLink(body, link));
          case 44:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }))();
  },
  getListDetail: function getListDetail(id, page) {
    var _this17 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            // 获取歌曲列表内的音乐
            id = id.toString();
            if (!id.includes('special/single/')) {
              _context14.next = 5;
              break;
            }
            id = id.replace(_this17.regExps.listDetailLink, '$1');
            _context14.next = 14;
            break;
          case 5:
            if (!/https?:/.test(id)) {
              _context14.next = 9;
              break;
            }
            return _context14.abrupt("return", _this17.getUserListDetail(id.replace(/^.*?http/, 'http'), page));
          case 9:
            if (!/^\d+$/.test(id)) {
              _context14.next = 13;
              break;
            }
            return _context14.abrupt("return", _this17.getUserListDetailByCode(id));
          case 13:
            if (id.startsWith('id_')) {
              id = id.replace('id_', '');
            }
          case 14:
            return _context14.abrupt("return", _this17.getListDetailBySpecialId(id, page));
          case 15:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }))();
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
      if (item.filesize_320 !== 0) {
        var _size = sizeFormate(item.filesize_320);
        types.push({
          type: '320k',
          size: _size,
          hash: item.hash_320
        });
        _types['320k'] = {
          size: _size,
          hash: item.hash_320
        };
      }
      if (item.filesize_ape !== 0) {
        var _size2 = sizeFormate(item.filesize_ape);
        types.push({
          type: 'ape',
          size: _size2,
          hash: item.hash_ape
        });
        _types.ape = {
          size: _size2,
          hash: item.hash_ape
        };
      }
      if (item.filesize_flac !== 0) {
        var _size3 = sizeFormate(item.filesize_flac);
        types.push({
          type: 'flac',
          size: _size3,
          hash: item.hash_flac
        });
        _types.flac = {
          size: _size3,
          hash: item.hash_flac
        };
      }
      return {
        singer: decodeName(item.singername),
        name: decodeName(item.songname),
        albumName: decodeName(item.album_name),
        albumId: item.album_id,
        songmid: item.audio_id,
        source: 'kg',
        interval: formatPlayTime(item.duration / 1000),
        img: null,
        lrc: null,
        hash: item.hash,
        types: types,
        _types: _types,
        typeUrl: {}
      };
    });
  },
  // getSinger(singers) {
  //   let arr = []
  //   singers?.forEach(singer => {
  //     arr.push(singer.name)
  //   })
  //   return arr.join('、')
  // },
  // v9 API
  // filterDatav9(rawList) {
  //   console.log(rawList)
  //   return rawList.map(item => {
  //     const types = []
  //     const _types = {}
  //     item.relate_goods.forEach(qualityObj => {
  //       if (qualityObj.level === 2) {
  //         let size = sizeFormate(qualityObj.size)
  //         types.push({ type: '128k', size, hash: qualityObj.hash })
  //         _types['128k'] = {
  //           size,
  //           hash: qualityObj.hash,
  //         }
  //       } else if (qualityObj.level === 4) {
  //         let size = sizeFormate(qualityObj.size)
  //         types.push({ type: '320k', size, hash: qualityObj.hash })
  //         _types['320k'] = {
  //           size,
  //           hash: qualityObj.hash,
  //         }
  //       } else if (qualityObj.level === 5) {
  //         let size = sizeFormate(qualityObj.size)
  //         types.push({ type: 'flac', size, hash: qualityObj.hash })
  //         _types.flac = {
  //           size,
  //           hash: qualityObj.hash,
  //         }
  //       } else if (qualityObj.level === 6) {
  //         let size = sizeFormate(qualityObj.size)
  //         types.push({ type: 'flac24bit', size, hash: qualityObj.hash })
  //         _types.flac24bit = {
  //           size,
  //           hash: qualityObj.hash,
  //         }
  //       }
  //     })
  //     const nameInfo = item.name.split(' - ')
  //     return {
  //       singer: this.getSinger(item.singerinfo),
  //       name: decodeName((nameInfo[1] ?? nameInfo[0]).trim()),
  //       albumName: decodeName(item.albuminfo.name),
  //       albumId: item.albuminfo.id,
  //       songmid: item.audio_id,
  //       source: 'kg',
  //       interval: formatPlayTime(item.timelen / 1000),
  //       img: null,
  //       lrc: null,
  //       hash: item.hash,
  //       types,
  //       _types,
  //       typeUrl: {},
  //     }
  //   })
  // },
  // hash list filter
  filterData2: function filterData2(rawList) {
    // console.log(rawList)
    var ids = new Set();
    var list = [];
    rawList.forEach(function (item) {
      if (!item) return;
      if (ids.has(item.audio_info.audio_id)) return;
      ids.add(item.audio_info.audio_id);
      var types = [];
      var _types = {};
      if (item.audio_info.filesize !== '0') {
        var size = sizeFormate(parseInt(item.audio_info.filesize));
        types.push({
          type: '128k',
          size: size,
          hash: item.audio_info.hash
        });
        _types['128k'] = {
          size: size,
          hash: item.audio_info.hash
        };
      }
      if (item.audio_info.filesize_320 !== '0') {
        var _size4 = sizeFormate(parseInt(item.audio_info.filesize_320));
        types.push({
          type: '320k',
          size: _size4,
          hash: item.audio_info.hash_320
        });
        _types['320k'] = {
          size: _size4,
          hash: item.audio_info.hash_320
        };
      }
      if (item.audio_info.filesize_flac !== '0') {
        var _size5 = sizeFormate(parseInt(item.audio_info.filesize_flac));
        types.push({
          type: 'flac',
          size: _size5,
          hash: item.audio_info.hash_flac
        });
        _types.flac = {
          size: _size5,
          hash: item.audio_info.hash_flac
        };
      }
      if (item.audio_info.filesize_high !== '0') {
        var _size6 = sizeFormate(parseInt(item.audio_info.filesize_high));
        types.push({
          type: 'flac24bit',
          size: _size6,
          hash: item.audio_info.hash_high
        });
        _types.flac24bit = {
          size: _size6,
          hash: item.audio_info.hash_high
        };
      }
      list.push({
        singer: decodeName(item.author_name),
        name: decodeName(item.ori_audio_name),
        albumName: decodeName(item.album_info.album_name),
        albumId: item.album_info.album_id,
        songmid: item.audio_info.audio_id,
        source: 'kg',
        interval: formatPlayTime(parseInt(item.audio_info.timelength) / 1000),
        img: null,
        lrc: null,
        hash: item.audio_info.hash,
        otherSource: null,
        types: types,
        _types: _types,
        typeUrl: {}
      });
    });
    return list;
  },
  // 获取列表信息
  getListInfo: function getListInfo(tagId) {
    var _this18 = this;
    var tryNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (this._requestObj_listInfo) this._requestObj_listInfo.cancelHttp();
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    this._requestObj_listInfo = httpFetch(this.getInfoUrl(tagId));
    return this._requestObj_listInfo.promise.then(function (_ref11) {
      var body = _ref11.body;
      if (body.status !== 1) return _this18.getListInfo(tagId, ++tryNum);
      return {
        limit: body.data.params.pagesize,
        page: body.data.params.p,
        total: body.data.params.total,
        source: 'kg'
      };
    });
  },
  // 获取列表数据
  getList: function getList(sortId, tagId, page) {
    var _this19 = this;
    var tasks = [this.getSongList(sortId, tagId, page)];
    tasks.push(this.currentTagInfo.id === tagId ? Promise.resolve(this.currentTagInfo.info) : this.getListInfo(tagId).then(function (info) {
      _this19.currentTagInfo.id = tagId;
      _this19.currentTagInfo.info = Object.assign({}, info);
      return info;
    }));
    if (!tagId && page === 1 && sortId === this.sortList[0].id) tasks.push(this.getSongListRecommend()); // 如果是所有类别，则顺便获取推荐列表
    return Promise.all(tasks).then(function (_ref12) {
      var _ref13 = _slicedToArray(_ref12, 3),
        list = _ref13[0],
        info = _ref13[1],
        recommendList = _ref13[2];
      if (recommendList) list.unshift.apply(list, _toConsumableArray(recommendList));
      return _objectSpread({
        list: list
      }, info);
    });
  },
  // 获取标签
  getTags: function getTags() {
    var _this20 = this;
    var tryNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (this._requestObj_tags) this._requestObj_tags.cancelHttp();
    if (tryNum > 2) return Promise.reject(new Error('try max num'));
    this._requestObj_tags = httpFetch(this.getInfoUrl());
    return this._requestObj_tags.promise.then(function (_ref14) {
      var body = _ref14.body;
      if (body.status !== 1) return _this20.getTags(++tryNum);
      return {
        hotTag: _this20.filterInfoHotTag(body.data.hotTag),
        tags: _this20.filterTagInfo(body.data.tagids),
        source: 'kg'
      };
    });
  },
  getDetailPageUrl: function getDetailPageUrl(id) {
    if (typeof id == 'string') {
      if (/^https?:\/\//.test(id)) return id;
      id = id.replace('id_', '');
    }
    return "https://www.kugou.com/yy/special/single/".concat(id, ".html");
  },
  search: function search(text, page) {
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
    // http://msearchretry.kugou.com/api/v3/search/special?version=9209&keyword=%E5%91%A8%E6%9D%B0%E4%BC%A6&pagesize=20&filter=0&page=1&sver=2&with_res_tag=0
    // return httpFetch(`http://ioscdn.kugou.com/api/v3/search/special?keyword=${encodeURIComponent(text)}&page=${page}&pagesize=${limit}&showtype=10&plat=2&version=7910&correct=1&sver=5`)
    return httpFetch("http://msearchretry.kugou.com/api/v3/search/special?keyword=".concat(encodeURIComponent(text), "&page=").concat(page, "&pagesize=").concat(limit, "&showtype=10&filter=0&version=7910&sver=2")).promise.then(function (_ref15) {
      var body = _ref15.body;
      if (body.errcode != 0) throw new Error('filed');
      // console.log(body.data.info)
      return {
        list: body.data.info.map(function (item) {
          return {
            play_count: formatPlayCount(item.playcount),
            id: 'id_' + item.specialid,
            author: item.nickname,
            name: item.specialname,
            time: dateFormat(item.publishtime, 'Y-M-D'),
            img: item.imgurl,
            grade: item.grade,
            desc: item.intro,
            total: item.songcount,
            source: 'kg'
          };
        }),
        limit: limit,
        total: body.data.total,
        source: 'kg'
      };
    });
  }
}; // getList
// getTags
// getListDetail
exports["default"] = _default;