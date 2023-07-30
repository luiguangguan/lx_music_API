"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _require = require('../../request'),
  httpFetch = _require.httpFetch;
var _require2 = require('../../message'),
  requestMsg = _require2.requestMsg;
var _require3 = require('../options'),
  headers = _require3.headers,
  timeout = _require3.timeout;
var _require4 = require('../utils'),
  dnsLookup = _require4.dnsLookup;
var api_messoer = {
  getMusicUrl: function getMusicUrl(songInfo, type) {
    console.log("企鹅音乐获取url");
    var requestObj = httpFetch("http://ts.tempmusics.tk/url/tx/".concat(songInfo.songmid, "/").concat(type), {
      method: 'get',
      timeout: timeout,
      headers: headers,
      lookup: dnsLookup,
      family: 4
    });
    requestObj.promise = requestObj.promise.then(function (_ref) {
      var statusCode = _ref.statusCode,
        body = _ref.body;
      if (statusCode == 429) return Promise.reject(new Error(requestMsg.tooManyRequests));
      switch (body.code) {
        case 0:
          return Promise.resolve({
            type: type,
            url: body.data
          });
        default:
          return Promise.reject(new Error(requestMsg.fail));
      }
    });
    return requestObj;
  },
  getPic: function getPic(songInfo) {
    return Promise.resolve("https://y.gtimg.cn/music/photo_new/T002R500x500M000".concat(songInfo.albumId, ".jpg"));
  }
};
var _default = api_messoer;
exports["default"] = _default;