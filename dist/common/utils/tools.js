"use strict";
// 业务工具方法
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterMusicList = exports.fixNewMusicInfoQuality = exports.toOldMusicInfo = exports.toNewMusicInfo = void 0;
const toNewMusicInfo = (oldMusicInfo) => {
    const meta = {
        songId: oldMusicInfo.songmid,
        albumName: oldMusicInfo.albumName,
        picUrl: oldMusicInfo.img, // 歌曲图片链接
    };
    if (oldMusicInfo.source == 'local') {
        meta.filePath = oldMusicInfo.filePath ?? oldMusicInfo.songmid ?? '';
        meta.ext = oldMusicInfo.ext ?? /\.(\w+)$/.exec(meta.filePath)?.[1] ?? '';
    }
    else {
        meta.qualitys = oldMusicInfo.types;
        meta._qualitys = oldMusicInfo._types;
        meta.albumId = oldMusicInfo.albumId;
        if (meta._qualitys.flac32bit && !meta._qualitys.flac24bit) {
            meta._qualitys.flac24bit = meta._qualitys.flac32bit;
            delete meta._qualitys.flac32bit;
            meta.qualitys = meta.qualitys.map(quality => {
                if (quality.type == 'flac32bit')
                    quality.type = 'flac24bit';
                return quality;
            });
        }
        switch (oldMusicInfo.source) {
            case 'kg':
                meta.hash = oldMusicInfo.hash;
                break;
            case 'tx':
                meta.strMediaMid = oldMusicInfo.strMediaMid;
                meta.id = oldMusicInfo.songId;
                meta.albumMid = oldMusicInfo.albumMid;
                break;
            case 'mg':
                meta.copyrightId = oldMusicInfo.copyrightId;
                meta.lrcUrl = oldMusicInfo.lrcUrl;
                meta.mrcUrl = oldMusicInfo.mrcUrl;
                meta.trcUrl = oldMusicInfo.trcUrl;
                break;
        }
    }
    return {
        id: `${oldMusicInfo.source}_${oldMusicInfo.songmid}`,
        name: oldMusicInfo.name,
        singer: oldMusicInfo.singer,
        source: oldMusicInfo.source,
        interval: oldMusicInfo.interval,
        meta: meta,
    };
};
exports.toNewMusicInfo = toNewMusicInfo;
const toOldMusicInfo = (minfo) => {
    const oInfo = {
        name: minfo.name,
        singer: minfo.singer,
        source: minfo.source,
        songmid: minfo.meta.songId,
        interval: minfo.interval,
        albumName: minfo.meta.albumName,
        img: minfo.meta.picUrl ?? '',
        typeUrl: {},
    };
    if (minfo.source == 'local') {
        oInfo.filePath = minfo.meta.filePath;
        oInfo.ext = minfo.meta.ext;
        oInfo.albumId = '';
        oInfo.types = [];
        oInfo._types = {};
    }
    else {
        oInfo.albumId = minfo.meta.albumId;
        oInfo.types = minfo.meta.qualitys;
        oInfo._types = minfo.meta._qualitys;
        switch (minfo.source) {
            case 'kg':
                oInfo.hash = minfo.meta.hash;
                break;
            case 'tx':
                oInfo.strMediaMid = minfo.meta.strMediaMid;
                oInfo.albumMid = minfo.meta.albumMid;
                oInfo.songId = minfo.meta.id;
                break;
            case 'mg':
                oInfo.copyrightId = minfo.meta.copyrightId;
                oInfo.lrcUrl = minfo.meta.lrcUrl;
                oInfo.mrcUrl = minfo.meta.mrcUrl;
                oInfo.trcUrl = minfo.meta.trcUrl;
                break;
        }
    }
    return oInfo;
};
exports.toOldMusicInfo = toOldMusicInfo;
/**
 * 修复2.0.0-dev.8之前的新列表数据音质
 * @param musicInfo
 */
const fixNewMusicInfoQuality = (musicInfo) => {
    if (musicInfo.source == 'local')
        return musicInfo;
    // @ts-expect-error
    if (musicInfo.meta._qualitys.flac32bit && !musicInfo.meta._qualitys.flac24bit) {
        // @ts-expect-error
        musicInfo.meta._qualitys.flac24bit = musicInfo.meta._qualitys.flac32bit;
        // @ts-expect-error
        delete musicInfo.meta._qualitys.flac32bit;
        musicInfo.meta.qualitys = musicInfo.meta.qualitys.map(quality => {
            // // @ts-expect-error
            if (quality.type == 'flac32bit')
                quality.type = 'flac24bit';
            return quality;
        });
    }
    return musicInfo;
};
exports.fixNewMusicInfoQuality = fixNewMusicInfoQuality;
const filterMusicList = (list) => {
    const ids = new Set();
    return list.filter(s => {
        if (!s.id || ids.has(s.id) || !s.name)
            return false;
        if (s.singer == null)
            s.singer = '';
        ids.add(s.id);
        return true;
    });
};
exports.filterMusicList = filterMusicList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL3V0aWxzL3Rvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTOzs7QUFFRixNQUFNLGNBQWMsR0FBRyxDQUFDLFlBQWlCLEVBQXNCLEVBQUU7SUFDdEUsTUFBTSxJQUFJLEdBQXdCO1FBQ2hDLE1BQU0sRUFBRSxZQUFZLENBQUMsT0FBTztRQUM1QixTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVM7UUFDakMsTUFBTSxFQUFFLFlBQVksQ0FBQyxHQUFHLEVBQUUsU0FBUztLQUNwQyxDQUFBO0lBRUQsSUFBSSxZQUFZLENBQUMsTUFBTSxJQUFJLE9BQU8sRUFBRTtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLElBQUksWUFBWSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUE7UUFDbkUsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO0tBQ3pFO1NBQU07UUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUE7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFBO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQTtRQUNuQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUE7WUFDbkQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQTtZQUUvQixJQUFJLENBQUMsUUFBUSxH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