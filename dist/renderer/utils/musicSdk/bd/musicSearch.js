"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
// import '../../polyfill/array.find'
var _require = require('../../request'), httpFetch = _require.httpFetch;
var _require2 = require('../index'), formatPlayTime = _require2.formatPlayTime;
// const { debug } = require('../../utils/env');
// const { formatSinger } = require('./util');
var _default = {
    limit: 30,
    total: 0,
    page: 0,
    allPage: 1,
    musicSearch: function musicSearch(str, page, limit) {
        var searchRequest = httpFetch("http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.6.5.6&method=baidu.ting.search.merge&format=json&query=".concat(encodeURIComponent(str), "&page_no=").concat(page, "&page_size=").concat(limit, "&type=0&data_source=0&use_cluster=1"));
        return searchRequest.promise.then(function (_ref) {
            var body = _ref.body;
            return body;
        });
    },
    handleResult: function handleResult(rawData) {
        var ids = new Set();
        var list = [];
        if (!rawData)
            return list;
        rawData.forEach(function (item) {
            if (ids.has(item.song_id))
                return;
            ids.add(item.song_id);
            var types = [];
            var _types = {};
            var size = null;
            var itemTypes = item.all_rate.split(',');
            if (itemTypes.includes('128')) {
                types.push({
                    type: '128k',
                    size: size
                });
                _types['128k'] = {
                    size: size
                };
            }
            if (itemTypes.includes('320')) {
                types.push({
                    type: '320k',
                    size: size
                });
                _types['320k'] = {
                    size: size
                };
            }
            if (itemTypes.includes('flac')) {
                types.push({
                    type: 'flac',
                    size: size
                });
                _types.flac = {
                    size: size
                };
            }
            // types.reverse()
            list.push({
                singer: item.author.replace(',', '、'),
                name: item.title,
                albumName: item.album_title,
                albumId: item.album_id,
                source: 'bd',
                interval: formatPlayTime(parseInt(item.file_duration)),
                songmid: item.song_id,
                img: null,
                lrc: null,
                types: types,
                _types: _types,
                typeUrl: {}
            });
        });
        return list;
    },
    search: function search(str) {
        var _this = this;
        var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var limit = arguments.length > 2 ? arguments[2] : undefined;
        var retryNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        if (++retryNum > 3)
            return Promise.reject(new Error('try max num'));
        if (limit == null)
            limit = this.limit;
        return this.musicSearch(str, page, limit).then(function (result) {
            if (!result || result.error_code !== 22000)
                return _this.search(str, page, limit, retryNum);
            var list = _this.handleResult(result.result.song_info.song_list);
            if (list == null)
                return _this.search(str, page, limit, retryNum);
            _this.total = result.result.song_info.total;
            _this.page = page;
            _this.allPage = Math.ceil(_this.total / limit);
            return Promise.resolve({
                list: list,
                allPage: _this.allPage,
                limit: limit,
                total: _this.total,
                source: 'bd'
            });
        });
    }
};
exports["default"] = _default;
