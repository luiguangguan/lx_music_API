"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrypt = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// const key = 'karakal@123Qcomyidongtiantianhaoting'
var DELTA = 2654435769n;
var MIN_LENGTH = 32;
// const SPECIAL_CHAR = '0'
var keyArr = [27303562373562475n, 18014862372307051n, 22799692160172081n, 34058940340699235n, 30962724186095721n, 27303523720101991n, 27303523720101998n, 31244139033526382n, 28992395054481524n];
var teaDecrypt = function teaDecrypt(data, key) {
  var length = data.length;
  var lengthBitint = BigInt(length);
  if (length >= 1) {
    // let j = data[data.length - 1];
    var j2 = data[0];
    var j3 = toLong((6n + 52n / lengthBitint) * DELTA);
    while (true) {
      var j4 = j3;
      if (j4 == 0n) break;
      var j5 = toLong(3n & toLong(j4 >> 2n));
      var j6 = lengthBitint;
      while (true) {
        j6--;
        if (j6 > 0n) {
          var j7 = data[j6 - 1n];
          var i = j6;
          j2 = toLong(data[i] - (toLong(toLong(j2 ^ j4) + toLong(j7 ^ key[toLong(toLong(3n & j6) ^ j5)])) ^ toLong(toLong(toLong(j7 >> 5n) ^ toLong(j2 << 2n)) + toLong(toLong(j2 >> 3n) ^ toLong(j7 << 4n)))));
          data[i] = j2;
        } else break;
      }
      var j8 = data[lengthBitint - 1n];
      j2 = toLong(data[0n] - toLong(toLong(toLong(key[toLong(toLong(j6 & 3n) ^ j5)] ^ j8) + toLong(j2 ^ j4)) ^ toLong(toLong(toLong(j8 >> 5n) ^ toLong(j2 << 2n)) + toLong(toLong(j2 >> 3n) ^ toLong(j8 << 4n)))));
      data[0] = j2;
      j3 = toLong(j4 - DELTA);
    }
  }
  return data;
};
var longArrToString = function longArrToString(data) {
  var arrayList = [];
  var _iterator = _createForOfIteratorHelper(data),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var j = _step.value;
      arrayList.push(longToBytes(j).toString('utf16le'));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return arrayList.join('');
};

// https://stackoverflow.com/a/29132118
var longToBytes = function longToBytes(l) {
  var result = Buffer.alloc(8);
  for (var i = 0; i < 8; i++) {
    result[i] = parseInt(l & 0xFFn);
    l >>= 8n;
  }
  return result;
};
var toBigintArray = function toBigintArray(data) {
  var length = Math.floor(data.length / 16);
  var jArr = Array(length);
  for (var i = 0; i < length; i++) {
    jArr[i] = toLong(data.substring(i * 16, i * 16 + 16));
  }
  return jArr;
};

// https://github.com/lyswhut/lx-music-desktop/issues/445#issuecomment-1139338682
var MAX = 9223372036854775807n;
var MIN = -9223372036854775808n;
var toLong = function toLong(str) {
  var num = typeof str == 'string' ? BigInt('0x' + str) : str;
  if (num > MAX) return toLong(num - (1n << 64n));else if (num < MIN) return toLong(num + (1n << 64n));
  return num;
};
var decrypt = function decrypt(data) {
  // console.log(data.length)
  // -3551594764563790630
  // console.log(toLongArrayFromArr(Buffer.from(key)))
  // console.log(teaDecrypt(toBigintArray(data), keyArr))
  // console.log(longArrToString(teaDecrypt(toBigintArray(data), keyArr)))
  // console.log(toByteArray(teaDecrypt(toBigintArray(data), keyArr)))
  return data == null || data.length < MIN_LENGTH ? data : longArrToString(teaDecrypt(toBigintArray(data), keyArr));
};

// console.log(14895149309145760986n - )
// console.log(toLong('14895149309145760986'))
// console.log(decrypt(str))
// console.log(decrypt(str))
// console.log(toByteArray([6048138644744000495n]))
// console.log(toByteArray([16325999628386395n]))
// console.log(toLong(90994076459972177136n))
exports.decrypt = decrypt;