"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simplify = simplify;
exports.tranditionalize = tranditionalize;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var _require = require('./chinese'),
  simplified = _require.simplified,
  traditional = _require.traditional;
var stMap = new Map();
var tsMap = new Map();
simplified.split('').forEach(function (_char, index) {
  stMap.set(_char, traditional[index]);
  tsMap.set(traditional[index], _char);
});
function simplify(source) {
  var result = [];
  var _iterator = _createForOfIteratorHelper(source),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _char2 = _step.value;
      result.push(tsMap.get(_char2) || _char2);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result.join('');
}
function tranditionalize(source) {
  var result = [];
  var _iterator2 = _createForOfIteratorHelper(source),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _char3 = _step2.value;
      result.push(stMap.get(_char3) || _char3);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return result.join('');
}