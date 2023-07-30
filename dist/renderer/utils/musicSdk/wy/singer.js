"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _require = require('./utils/index'), eapiRequest = _require.eapiRequest;
var _require2 = require('../index'), formatPlayTime = _require2.formatPlayTime, sizeFormate = _require2.sizeFormate;
var _require3 = require('../utils'), formatSingerName = _require3.formatSingerName;
var _default = {
    /**
     * 获取歌手信息
     * @param {*} id
     */
    getInfo: function getInfo(id) {
        return eapiRequest('/api/artist/head/info/get', {
            id: id
        }).then(function (_ref) {
            var body = _ref.body;
            if (!body || body.code != 200)
                throw new Error('get singer info faild.');
            return {
                source: 'wy',
                id: body.artist.id,
                info: {
                    name: body.artist.name,
                    desc: body.artist.briefDesc,
                    avatar: body.user.avatarUrl,
                    gender: body.user.gender === 1 ? 'man' : 'woman'
                },
                count: {
                    music: body.artist.musicSize,
                    album: body.artist.albumSize
                }
            };
        });
    },
    /**
     * 获取歌手歌曲列表
     * @param {*} id
     * @param {*} page
     * @param {*} limit
     */
    getSongList: function getSongList(id) {
        var _this = this;
        var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
        if (page === 1)
            page = 0;
        return eapiRequest('/api/v2/artist/songs', {
            id: id,
            limit: limit,
            offset: limit * page
        }).then(function (_ref2) {
            var body = _ref2.body;
            if (!body.songs || body.code != 200)
                throw new Error('get singer song list faild.');
            var list = _this.filterSongList(body.songs);
            return {
                list: list,
                limit: limit,
                page: page,
                total: body.total,
                source: 'wy'
            };
        });
    },
    /**
     * 获取歌手专辑列表
     * @param {*} id
     * @param {*} page
     * @param {*} limit
     */
    getAlbumList: function getAlbumList(id) {
        var _this2 = this;
        var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
        if (page === 1)
            page = 0;
        return eapiRequest("/api/artist/albums/".concat(id), {
            limit: limit,
            offset: limit * page
        }).then(function (_ref3) {
            var body = _ref3.body;
            if (!body.hotAlbums || body.code != 200)
                throw new Error('get singer album list faild.');
            var list = _this2.filterAlbumList(body.hotAlbums);
            return {
                source: 'wy',
                list: list,
                limit: limit,
                page: page,
                total: body.artist.albumSize
            };
        });
    },
    filterAlbumList: function filterAlbumList(raw) {
        var list = [];
        raw.forEach(function (item) {
            if (!item.id)
                return;
            list.push({
                id: item.id,
                count: item.size,
                info: {
                    name: item.name,
                    author: formatSingerName(item.artists),
                    img: item.picUrl,
                    desc: null
                }
            });
        });
        return list;
    },
    filterSongList: function filterSongList(raw) {
        var list = [];
        raw.forEach(function (item) {
            if (!item.id)
                return;
            var types = [];
            var _types = {};
            var size;
            item.privilege.chargeInfoList.forEach(function (i) {
                switch (i.rate) {
                    case 128000:
                        size = item.lMusic ? sizeFormate(item.lMusic.size) : null;
                        types.push({
                            type: '128k',
                            size: size
                        });
                        _types['128k'] = {
                            size: size
                        };
                    case 320000:
                        size = item.hMusic ? sizeFormate(item.hMusic.size) : null;
                        types.push({
                            type: '320k',
                            size: size
                        });
                        _types['320k'] = {
                            size: size
                        };
                    case 999000:
                        size = item.sqMusic ? sizeFormate(item.sqMusic.size) : null;
                        types.push({
                            type: 'flac',
                            size: size
                        });
                        _types.flac = {
                            size: size
                        };
                    case 1999000:
                        size = item.hrMusic ? sizeFormate(item.hrMusic.size) : null;
                        types.push({
                            type: 'flac24bit',
                            size: size
                        });
                        _types.flac24bit = {
                            size: size
                        };
                }
            });
            list.push({
                singer: formatSingerName(item.artists),
                name: item.name,
                albumName: item.album.name,
                albumId: item.album.id,
                songmid: item.id,
                source: 'wy',
                interval: formatPlayTime(item.duration),
                img: null,
                lrc: null,
                otherSource: null,
                types: types,
                _types: _types,
                typeUrl: {}
            });
        });
        return list;
    }
};
exports["default"] = _default;
