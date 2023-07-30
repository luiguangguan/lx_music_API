"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toMD5 = exports.getHostIp = exports.formatSingerName = exports.dnsLookup = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var crypto = require('crypto');
var dns = require('dns');
// var _require = require('@common/utils/common'),
  // decodeName = _require.decodeName;
var toMD5 = function toMD5(str) {
  return crypto.createHash('md5').update(str).digest('hex');
};
exports.toMD5 = toMD5;
var ipMap = new Map();
var getHostIp = function getHostIp(hostname) {
  var result = ipMap.get(hostname);
  if (_typeof(result) === 'object') return result;
  if (result === true) return;
  ipMap.set(hostname, true);
  // console.log(hostname)
  dns.lookup(hostname, {
    // family: 4,
    all: false
  }, function (err, address, family) {
    if (err) return console.log(err);
    // console.log(address, family)
    ipMap.set(hostname, {
      address: address,
      family: family
    });
  });
};
exports.getHostIp = getHostIp;
var dnsLookup = function dnsLookup(hostname, options, callback) {
  var result = getHostIp(hostname);
  if (result) return callback(null, result.address, result.family);
  dns.lookup(hostname, options, callback);
};

/**
 * 格式化歌手
 * @param singers 歌手数组
 * @param nameKey 歌手名键值
 * @param join 歌手分割字符
 */
exports.dnsLookup = dnsLookup;
var formatSingerName = function formatSingerName(singers) {
  var nameKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'name';
  var join = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '、';
  if (Array.isArray(singers)) {
    var singer = [];
    singers.forEach(function (item) {
      var name = item[nameKey];
      if (!name) return;
      singer.push(name);
    });
    return decodeName(singer.join(join));
  }
  return decodeName(String(singers !== null && singers !== void 0 ? singers : ''));
};

const encodeNames = {
  '&nbsp;': ' ',
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&apos;': "'",
  '&#039;': "'",
};

const decodeName = (str) => {
  return str?.replace(/(?:&amp;|&lt;|&gt;|&quot;|&apos;|&#039;|&nbsp;)/gm, (s) => encodeNames[s]) ?? '';
};


exports.formatSingerName = {
  formatSingerName,
  decodeName
};