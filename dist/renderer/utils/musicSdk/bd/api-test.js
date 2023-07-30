"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _require = require('../../request'), httpFetch = _require.httpFetch;
var _require2 = require('../../message'), requestMsg = _require2.requestMsg;
var _require3 = require('../options'), headers = _require3.headers, timeout = _require3.timeout;
var _require4 = require('../utils'), dnsLookup = _require4.dnsLookup;
var api_test = {
    getMusicUrl: function getMusicUrl(songInfo, type) {
        var requestObj = httpFetch("http://ts.tempmusics.tk/url/bd/".concat(songInfo.songmid, "/").concat(type), {
            method: 'get',
            timeout: timeout,
            headers: headers,
            lookup: dnsLookup,
            family: 4
        });
        requestObj.promise = requestObj.promise.then(function (_ref) {
            var statusCode = _ref.statusCode, body = _ref.body;
            if (statusCode == 429)
                return Promise.reject(new Error(requestMsg.tooManyRequests));
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
    }
};
var _default = api_test;
exports["default"] = _default;
