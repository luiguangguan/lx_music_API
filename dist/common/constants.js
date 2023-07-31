"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYNC_CLOSE_CODE = exports.SYNC_CODE = exports.QUALITYS = exports.DOWNLOAD_STATUS = exports.DEFAULT_SETTING = exports.DATA_KEYS = exports.LIST_IDS = exports.APP_EVENT_NAMES = exports.STORE_NAMES = exports.URL_SCHEME_RXP = void 0;
exports.URL_SCHEME_RXP = /^lxmusic:\/\//;
exports.STORE_NAMES = {
    APP_SETTINGS: 'config_v2',
    DATA: 'data',
    SYNC: 'sync',
    HOTKEY: 'hot_key',
    USER_API: 'user_api',
    LRC_RAW: 'lyrics',
    LRC_EDITED: 'lyrics_edited',
    THEME: 'theme',
    SOUND_EFFECT: 'sound_effect',
};
exports.APP_EVENT_NAMES = {
    winMainName: 'win_main',
    winLyricName: 'win_lyric',
    trayName: 'tray',
};
exports.LIST_IDS = {
    DEFAULT: 'default',
    LOVE: 'love',
    TEMP: 'temp',
    DOWNLOAD: 'download',
    PLAY_LATER: null,
};
exports.DATA_KEYS = {
    viewPrevState: 'viewPrevState',
    playInfo: 'playInfo',
    searchHistoryList: 'searchHistoryList',
    listScrollPosition: 'listScrollPosition',
    listPrevSelectId: 'listPrevSelectId',
    listUpdateInfo: 'listUpdateInfo',
    ignoreVersion: 'ignoreVersion',
    leaderboardSetting: 'leaderboardSetting',
    songListSetting: 'songListSetting',
    searchSetting: 'searchSetting',
    lastStartInfo: 'lastStartInfo',
};
exports.DEFAULT_SETTING = {
    leaderboard: {
        source: 'kw',
        boardId: 'kw__16',
    },
    songList: {
        source: 'kg',
        sortId: '5',
        tagId: '',
    },
    search: {
        temp_source: 'kw',
        source: 'all',
        type: 'music',
    },
    viewPrevState: {
        url: '/search',
        query: {},
    },
};
exports.DOWNLOAD_STATUS = {
    RUN: 'run',
    WAITING: 'waiting',
    PAUSE: 'pause',
    ERROR: 'error',
    COMPLETED: 'completed',
};
exports.QUALITYS = ['flac24bit', 'flac', 'wav', 'ape', '320k', '192k', '128k'];
exports.SYNC_CODE = {
    helloMsg: 'Hello~::^-^::~v3~',
    idPrefix: 'OjppZDo6',
    authMsg: 'lx-music auth::',
    authFailed: 'Auth failed',
    missingAuthCode: 'Missing auth code',
    getServiceIdFailed: 'Get service id failed',
    connectServiceFailed: 'Connect service failed',
    connecting: 'Connecting...',
    unknownServiceAddress: 'Unknown service address',
    msgBlockedIp: 'Blocked IP',
    msgConnect: 'lx-music connect',
    msgAuthFailed: 'Auth failed',
};
exports.SYNC_CLOSE_CODE = {
    normal: 1000,
    failed: 4100,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi9jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxjQUFjLEdBQUcsZUFBZSxDQUFBO0FBR2hDLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLFlBQVksRUFBRSxXQUFXO0lBQ3pCLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE1BQU07SUFDWixNQUFNLEVBQUUsU0FBUztJQUNqQixRQUFRLEVBQUUsVUFBVTtJQUNwQixPQUFPLEVBQUUsUUFBUTtJQUNqQixVQUFVLEVBQUUsZUFBZTtJQUMzQixLQUFLLEVBQUUsT0FBTztJQUNkLFlBQVksRUFBRSxjQUFjO0NBQ3BCLENBQUE7QUFFRyxRQUFBLGVBQWUsR0FBRztJQUM3QixXQUFXLEVBQUUsVUFBVTtJQUN2QixZQUFZLEVBQUUsV0FBVztJQUN6QixRQUFRLEVBQUUsTUFBTTtDQUNSLENBQUE7QUFFRyxRQUFBLFFBQVEsR0FBRztJQUN0QixPQUFPLEVBQUUsU0FBUztJQUNsQixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0lBQ1osUUFBUSxFQUFFLFVBQVU7SUFDcEIsVUFBVSxFQUFFLElBQUk7Q0FDUixDQUFBO0FBRUcsUUFBQSxTQUFTLEdBQUc7SUFDdkIsYUFBYSxFQUFFLGVBQWU7SUFDOUIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLGtCQUFrQixFQUFFLG9CQUFvQjtJQUN4QyxnQkFBZ0IsRUFBRSxrQkFBa0I7SUFDcEMsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxhQUFhLEVBQUUsZUFBZTtJQUU5QixrQkFBa0IsRUFBRSxvQkFBb0I7SUFDeEMsZUFBZSxFQUFFLGlCQUFpQjtJQUNsQyxhQUFhLEVBQUUsZUFBZTtJQUU5QixhQUFhLEVBQUUsZUFBZTtDQUN0QixDQUFBO0FBRUcsUUFBQSxlQUFlLEdBQUc7SUFDN0IsV0FBVyxFQUFFO1FBQ1gsTUFBTSxFQUFFLElBQUk7UUFDWixPQUFPLEVBQUUsUUFBUTtLQUNsQjtJQUVELFFBQVEsRUFBRTtRQUNSLE1BQU0sRUFBRSxJQUFJO1FBQ1osTUFBTSxFQUFFLEdBQUc7UUFDWCxLQUFLLEVBQUUsRUFBRTtLQUNWO0lBRUQsTUFBTSxFQUFFO1FBQ04sV0FBVyxFQUFFLElBQUk7UUFDakIsTUFBTSxFQUFFLEtBQUs7UUFDYixJQUFJLEVBQUUsT0FBTztLQUNkO0lBRUQsYUFBYSxFQUFFO1FBQ2IsR0FBRyxFQUFFLFNBQVM7UUFDZCxLQUFLLEVBQUUsRUFBRTtLQUNWO0NBQ0YsQ0FBQTtBQUVZLFFBQUEsZUFBZSxHQUFHO0lBQzdCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsT0FBTyxFQUFFLFNBQVM7SUFDbEIsS0FBSyxFQUFFLE9BQU87SUFDZCxLQUFLLEVBQUUsT0FBTztJQUNkLFNBQVMsRUFBRSxXQUFXO0NBQ2QsQ0FBQTtBQUVHLFFBQUEsUUFBUSxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFVLENBQUE7QUFFL0UsUUFBQSxTQUFTLEdBQUc7SUFDdkIsUUFBUSxFQUFFLG1CQUFtQjtJQUM3QixRQUFRLEVBQUUsVUFBVTtJQUNwQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLGVBQWUsRUFBRSxtQkFBbUI7SUFDcEMsa0JBQWtCLEVBQUUsdUJBQXVCO0lBQzNDLG9CQUFvQixFQUFFLHdCQUF3QjtJQUM5QyxVQUFVLEVBQUUsZUFBZTtJQUMzQixxQkFBcUIsRUFBRSx5QkFBeUI7SUFDaEQsWUFBWSxFQUFFLFlBQVk7SUFDMUIsVUFBVSxFQUFFLGtCQUFrQjtJQUM5QixhQUFhLEVBQUUsYUFBYTtDQUNwQixDQUFBO0FBRUcsUUFBQSxlQUFlLEdBQUc7SUFDN0IsTUFBTSxFQUFFLElBQUk7SUFDWixNQUFNLEVBQUUsSUFBSTtDQUNKLENBQUEifQ==