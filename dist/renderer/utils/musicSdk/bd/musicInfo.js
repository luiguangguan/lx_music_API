"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _require = require('../../request'), httpFetch = _require.httpFetch;
var _default = {
    cache: {},
    getMusicInfo: function getMusicInfo(songmid) {
        var _this = this;
        if (this.cache[songmid]) {
            return {
                promise: Promise.resolve(this.cache[songmid])
            };
        }
        var requestObj = httpFetch("https://musicapi.qianqian.com/v1/restserver/ting?method=baidu.ting.song.getSongLink&format=json&from=bmpc&version=1.0.0&version_d=11.1.6.0&songid=".concat(songmid, "&type=1&res=1&s_protocol=1&aac=2&project=tpass"));
        requestObj.promise = requestObj.promise.then(function (_ref) {
            var body = _ref.body;
            // console.log(body)
            if (body.error_code == 22000) {
                _this.cache[songmid] = body.result.songinfo;
                return body.result.songinfo;
            }
            return Promise.reject(new Error('获取音乐信息失败'));
        });
        return requestObj;
    }
};
exports["default"] = _default;
