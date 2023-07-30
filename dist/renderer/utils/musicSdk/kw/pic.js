"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _require = require('../../request'), httpFetch = _require.httpFetch;
var _default = {
    getPic: function getPic(_ref) {
        var songmid = _ref.songmid;
        var requestObj = httpFetch("http://artistpicserver.kuwo.cn/pic.web?corp=kuwo&type=rid_pic&pictype=500&size=500&rid=".concat(songmid));
        requestObj.promise = requestObj.promise.then(function (_ref2) {
            var body = _ref2.body;
            return /^http/.test(body) ? body : null;
        });
        return requestObj.promise;
    }
};
exports["default"] = _default;
