"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
// const { httpFetch } = require('../../request');
// const { weapi } = require('./utils/crypto');
var _require = require('../index'), sizeFormate = _require.sizeFormate, formatPlayTime = _require.formatPlayTime;
// const musicDetailApi = require('./musicDetail');
var _require2 = require('./utils/index'), eapiRequest = _require2.eapiRequest;
var _default = {
    limit: 30,
    total: 0,
    page: 0,
    allPage: 1,
    musicSearch: function musicSearch(str, page, limit) {
        var searchRequest = eapiRequest('/api/cloudsearch/pc', {
            s: str,
            type: 1,
            // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频
            limit: limit,
            total: page == 1,
            offset: limit * (page - 1)
        });
        return searchRequest.promise.then(function (_ref) {
            var body = _ref.body;
            return body;
        });
    },
    getSinger: function getSinger(singers) {
        var arr = [];
        singers.forEach(function (singer) {
            arr.push(singer.name);
        });
        return arr.join('、');
    },
    handleResult: function handleResult(rawList) {
        var _this = this;
        // console.log(rawList)
        if (!rawList)
            return [];
        return rawList.map(function (item) {
            var types = [];
            var _types = {};
            var size;
            if (item.privilege.maxBrLevel == 'hires') {
                size = item.hr ? sizeFormate(item.hr.size) : null;
                types.push({
                    type: 'flac24bit',
                    size: size
                });
                _types.flac24bit = {
                    size: size
                };
            }
            switch (item.privilege.maxbr) {
                case 999000:
                    size = item.sq ? sizeFormate(item.sq.size) : null;
                    types.push({
                        type: 'flac',
                        size: size
                    });
                    _types.flac = {
                        size: size
                    };
                case 320000:
                    size = item.h ? sizeFormate(item.h.size) : null;
                    types.push({
                        type: '320k',
                        size: size
                    });
                    _types['320k'] = {
                        size: size
                    };
                case 192000:
                case 128000:
                    size = item.l ? sizeFormate(item.l.size) : null;
                    types.push({
                        type: '128k',
                        size: size
                    });
                    _types['128k'] = {
                        size: size
                    };
            }
            types.reverse();
            return {
                singer: _this.getSinger(item.ar),
                name: item.name,
                albumName: item.al.name,
                albumId: item.al.id,
                source: 'wy',
                interval: formatPlayTime(item.dt / 1000),
                songmid: item.id,
                img: item.al.picUrl,
                lrc: null,
                types: types,
                _types: _types,
                typeUrl: {}
            };
        });
    },
    search: function search(str) {
        var _this2 = this;
        var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var limit = arguments.length > 2 ? arguments[2] : undefined;
        var retryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        if (++retryNum > 3)
            return Promise.reject(new Error('try max num'));
        if (limit == null)
            limit = this.limit;
        return this.musicSearch(str, page, limit).then(function (result) {
            // console.log(result)
            if (!result || result.code !== 200)
                return _this2.search(str, page, limit, retryNum);
            var list = _this2.handleResult(result.result.songs || []);
            // console.log(list)
            if (list == null)
                return _this2.search(str, page, limit, retryNum);
            _this2.total = result.result.songCount || 0;
            _this2.page = page;
            _this2.allPage = Math.ceil(_this2.total / _this2.limit);
            return {
                list: list,
                allPage: _this2.allPage,
                limit: _this2.limit,
                total: _this2.total,
                source: 'wy'
            };
            // return result.data
        });
    }
};
exports["default"] = _default;
