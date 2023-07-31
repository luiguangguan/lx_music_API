"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const os_1 = require("os");
const isMac = process.platform == 'darwin';
const isWin = process.platform == 'win32';
const defaultSetting = {
    version: '2.1.0',
    'common.windowSizeId': 3,
    'common.fontSize': 16,
    'common.startInFullscreen': false,
    'common.langId': null,
    'common.apiSource': 'temp',
    'common.sourceNameType': 'alias',
    'common.font': '',
    'common.isShowAnimation': true,
    'common.randomAnimate': true,
    'common.isAgreePact': false,
    'common.controlBtnPosition': isMac ? 'left' : 'right',
    'common.playBarProgressStyle': 'mini',
    'common.tryAutoUpdate': true,
    'common.showChangeLog': true,
    'player.startupAutoPlay': false,
    'player.togglePlayMethod': 'listLoop',
    'player.highQuality': false,
    'player.isShowTaskProgess': true,
    'player.volume': 1,
    'player.isMute': false,
    'player.playbackRate': 1,
    'player.preservesPitch': true,
    'player.mediaDeviceId': 'default',
    'player.isMediaDeviceRemovedStopPlay': false,
    'player.isShowLyricTranslation': false,
    'player.isShowLyricRoma': false,
    'player.isS2t': false,
    'player.isPlayLxlrc': isWin,
    'player.isSavePlayTime': false,
    'player.audioVisualization': false,
    'player.waitPlayEndStop': true,
    'player.waitPlayEndStopTime': '',
    'player.autoSkipOnError': true,
    'player.soundEffect.convolution.fileName': '',
    'player.soundEffect.convolution.mainGain': 10,
    'player.soundEffect.convolution.sendGain': 0,
    'player.soundEffect.biquadFilter.hz31': 0,
    'player.soundEffect.biquadFilter.hz62': 0,
    'player.soundEffect.biquadFilter.hz125': 0,
    'player.soundEffect.biquadFilter.hz250': 0,
    'player.soundEffect.biquadFilter.hz500': 0,
    'player.soundEffect.biquadFilter.hz1000': 0,
    'player.soundEffect.biquadFilter.hz2000': 0,
    'player.soundEffect.biquadFilter.hz4000': 0,
    'player.soundEffect.biquadFilter.hz8000': 0,
    'player.soundEffect.biquadFilter.hz16000': 0,
    'player.soundEffect.panner.enable': false,
    'player.soundEffect.panner.soundR': 5,
    'player.soundEffect.panner.speed': 25,
    'player.soundEffect.pitchShifter.playbackRate': 1,
    'playDetail.isZoomActiveLrc': false,
    'playDetail.isShowLyricProgressSetting': false,
    'playDetail.style.fontSize': 100,
    'playDetail.style.align': 'center',
    'desktopLyric.enable': false,
    'desktopLyric.isLock': false,
    'desktopLyric.isAlwaysOnTop': false,
    'desktopLyric.isAlwaysOnTopLoop': false,
    'desktopLyric.isShowTaskbar': false,
    'desktopLyric.audioVisualization': false,
    'desktopLyric.fullscreenHide': true,
    'desktopLyric.width': 450,
    'desktopLyric.height': 300,
    'desktopLyric.x': null,
    'desktopLyric.y': null,
    'desktopLyric.isLockScreen': isWin,
    'desktopLyric.isDelayScroll': true,
    'desktopLyric.scrollAlign': 'center',
    'desktopLyric.isHoverHide': false,
    'desktopLyric.direction': 'horizontal',
    'desktopLyric.style.align': 'center',
    'desktopLyric.style.font': '',
    'desktopLyric.style.fontSize': 20,
    'desktopLyric.style.lineGap': 15,
    'desktopLyric.style.lyricUnplayColor': 'rgba(255, 255, 255, 1)',
    'desktopLyric.style.lyricPlayedColor': 'rgba(7, 197, 86, 1)',
    'desktopLyric.style.lyricShadowColor': 'rgba(0, 0, 0, 0.18)',
    // 'desktopLyric.style.fontWeight': false,
    'desktopLyric.style.opacity': 95,
    'desktopLyric.style.ellipsis': false,
    'desktopLyric.style.isZoomActiveLrc': false,
    'desktopLyric.style.isFontWeightFont': true,
    'desktopLyric.style.isFontWeightLine': true,
    'desktopLyric.style.isFontWeightExtended': true,
    'list.isClickPlayList': false,
    'list.isShowSource': true,
    'list.isSaveScrollLocation': true,
    'list.addMusicLocationType': 'top',
    'list.actionButtonsVisible': false,
    'download.enable': false,
    'download.savePath': (0, path_1.join)((0, os_1.homedir)(), 'Desktop'),
    'download.fileName': '歌名 - 歌手',
    'download.maxDownloadNum': 3,
    'download.skipExistFile': true,
    'download.isDownloadLrc': false,
    'download.isDownloadTLrc': false,
    'download.isDownloadRLrc': false,
    'download.lrcFormat': 'utf8',
    'download.isEmbedPic': true,
    'download.isEmbedLyric': false,
    'download.isEmbedLyricT': false,
    'download.isEmbedLyricR': false,
    'download.isUseOtherSource': false,
    'search.isShowHotSearch': false,
    'search.isShowHistorySearch': false,
    'search.isFocusSearchBox': false,
    'network.proxy.enable': false,
    'network.proxy.host': '',
    'network.proxy.port': '',
    'network.proxy.username': '',
    'network.proxy.password': '',
    'tray.enable': false,
    // 'tray.isToTray': false,
    'tray.themeId': 0,
    'sync.mode': 'server',
    'sync.enable': false,
    'sync.server.port': '23332',
    'sync.server.maxSsnapshotNum': 5,
    'sync.client.host': '',
    // 'theme.id': 'blue_plus',
    'theme.id': 'green',
    'theme.lightId': 'green',
    'theme.darkId': 'black',
    'odc.isAutoClearSearchInput': false,
    'odc.isAutoClearSearchList': false,
};
// 使用新年皮肤
if (new Date().getMonth() < 2) {
    defaultSetting['theme.id'] = 'happy_new_year';
    defaultSetting['desktopLyric.style.lyricPlayedColor'] = 'rgba(255, 57, 71, 1)';
}
exports.default = defaultSetting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdFNldHRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbW9uL2RlZmF1bHRTZXR0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTJCO0FBQzNCLDJCQUE0QjtBQUU1QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQTtBQUMxQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQTtBQUV6QyxNQUFNLGNBQWMsR0FBa0I7SUFDcEMsT0FBTyxFQUFFLE9BQU87SUFFaEIscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixpQkFBaUIsRUFBRSxFQUFFO0lBQ3JCLDBCQUEwQixFQUFFLEtBQUs7SUFDakMsZUFBZSxFQUFFLElBQUk7SUFDckIsa0JBQWtCLEVBQUUsTUFBTTtJQUMxQix1QkFBdUIsRUFBRSxPQUFPO0lBQ2hDLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLHdCQUF3QixFQUFFLElBQUk7SUFDOUIsc0JBQXNCLEVBQUUsSUFBSTtJQUM1QixvQkFBb0IsRUFBRSxLQUFLO0lBQzNCLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPO0lBQ3JELDZCQUE2QixFQUFFLE1BQU07SUFDckMsc0JBQXNCLEVBQUUsSUFBSTtJQUM1QixzQkFBc0IsRUFBRSxJQUFJO0lBRTVCLHdCQUF3QixFQUFFLEtBQUs7SUFDL0IseUJBQXlCLEVBQUUsVUFBVTtJQUNyQyxvQkFBb0IsRUFBRSxLQUFLO0lBQzNCLDBCQUEwQixFQUFFLElBQUk7SUFDaEMsZUFBZSxFQUFFLENBQUM7SUFDbEIsZUFBZSxFQUFFLEtBQUs7SUFDdEIscUJBQXFCLEVBQUUsQ0FBQztJQUN4Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHNCQUFzQixFQUFFLFNBQVM7SUFDakMscUNBQXFDLEVBQUUsS0FBSztJQUM1QywrQkFBK0IsRUFB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