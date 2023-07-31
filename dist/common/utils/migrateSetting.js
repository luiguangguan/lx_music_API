// import { compareVer } from './index'
// const oldThemeMap = {
//   0: 'green',
//   1: 'blue',
//   2: 'yellow',
//   3: 'orange',
//   4: 'red',
//   10: 'pink',
//   5: 'purple',
//   6: 'grey',
//   11: 'ming',
//   12: 'blue2',
//   13: 'black',
//   7: 'mid_autumn',
//   8: 'naruto',
//   9: 'happy_new_year',
// } as const
// export default (setting: any): Partial<LX.AppSetting> => {
//   setting = { ...setting }
//   // 迁移 v2.0.0 之前的配置
//   if (compareVer(setting.version, '2.0.0') < 0) {
//     // 迁移列表滚动位置设置 ~0.18.3
//     if (setting.list?.scroll) {
//       let scroll = setting.list.scroll
//       setting.list.isSaveScrollLocation &&= scroll.enable
//       delete setting.list.scroll
//     }
//     // 修正拼写问题 v1.8.2 及以前
//     if (setting.player?.isShowLyricTransition != null) {
//       setting.player.isShowLyricTranslation = setting.player.isShowLyricTransition
//       delete setting.player.isShowLyricTransition
//     }
//     // 迁移v1.19.0之前的主题设置
//     if (setting.themeId != null) {
//       setting.theme = {
//         id: setting.themeId,
//       }
//       delete setting.themeId
//     }
//     if (setting.tray?.isShow != null) setting.tray.enable = setting.tray?.isShow
//     setting['common.windowSizeId'] = setting.windowSizeId
//     setting['common.startInFullscreen'] = setting.startInFullscreen
//     setting['common.langId'] = setting.langId
//     setting['common.apiSource'] = setting.apiSource
//     setting['common.sourceNameType'] = setting.sourceNameType
//     setting['common.font'] = setting.font
//     setting['common.isShowAnimation'] = setting.isShowAnimation
//     setting['common.randomAnimate'] = setting.randomAnimate
//     setting['common.isAgreePact'] = setting.isAgreePact
//     setting['common.controlBtnPosition'] = setting.controlBtnPosition
//     setting['player.togglePlayMethod'] = setting.player?.togglePlayMethod
//     setting['player.highQuality'] = setting.player?.highQuality
//     setting['player.isShowTaskProgess'] = setting.player?.isShowTaskProgess
//     setting['player.volume'] = setting.player?.volume
//     setting['player.isMute'] = setting.player?.isMute
//     setting['player.mediaDeviceId'] = setting.player?.mediaDeviceId
//     setting['player.isMediaDeviceRemovedStopPlay'] = setting.player?.isMediaDeviceRemovedStopPlay
//     setting['player.isShowLyricTranslation'] = setting.player?.isShowLyricTranslation
//     setting['player.isShowLyricRoma'] = setting.player?.isShowLyricRoma
//     setting['player.isS2t'] = setting.player?.isS2t
//     setting['player.isPlayLxlrc'] = setting.player?.isPlayLxlrc
//     setting['player.isSavePlayTime'] = setting.player?.isSavePlayTime
//     setting['player.audioVisualization'] = setting.player?.audioVisualization
//     setting['player.waitPlayEndStop'] = setting.player?.waitPlayEndStop
//     setting['player.waitPlayEndStopTime'] = setting.player?.waitPlayEndStopTime
//     setting['player.autoSkipOnError'] = setting.player?.autoSkipOnError
//     setting['playDetail.isZoomActiveLrc'] = setting.playDetail?.isZoomActiveLrc
//     setting['playDetail.isShowLyricProgressSetting'] = setting.playDetail?.isShowLyricProgressSetting
//     setting['playDetail.style.fontSize'] = setting.playDetail?.style?.fontSize
//     setting['playDetail.style.align'] = setting.playDetail?.style?.align
//     setting['desktopLyric.enable'] = setting.desktopLyric?.enable
//     setting['desktopLyric.isLock'] = setting.desktopLyric?.isLock
//     setting['desktopLyric.isAlwaysOnTop'] = setting.desktopLyric?.isAlwaysOnTop
//     setting['desktopLyric.isAlwaysOnTopLoop'] = setting.desktopLyric?.isAlwaysOnTopLoop
//     setting['desktopLyric.width'] = setting.desktopLyric?.width
//     setting['desktopLyric.height'] = setting.desktopLyric?.height
//     setting['desktopLyric.x'] = setting.desktopLyric?.x
//     setting['desktopLyric.y'] = setting.desktopLyric?.y
//     setting['desktopLyric.isLockScreen'] = setting.desktopLyric?.isLockScreen
//     setting['desktopLyric.isDelayScroll'] = setting.desktopLyric?.isDelayScroll
//     setting['desktopLyric.isHoverHide'] = setting.desktopLyric?.isHoverHide
//     setting['desktopLyric.style.font'] = setting.desktopLyric?.style?.font
//     if (setting.desktopLyric?.style?.fontSize) setting['desktopLyric.style.fontSize'] = setting.desktopLyric.style.fontSize / 100 * 16
//     setting['desktopLyric.style.opacity'] = setting.desktopLyric?.style?.opacity
//     setting['desktopLyric.style.isZoomActiveLrc'] = setting.desktopLyric?.style?.isZoomActiveLrc
//     setting['list.isClickPlayList'] = setting.list?.isClickPlayList
//     setting['list.isShowAlbumName'] = setting.list?.isShowAlbumName
//     setting['list.isShowSource'] = setting.list?.isShowSource
//     setting['list.isSaveScrollLocation'] = setting.list?.isSaveScrollLocation
//     setting['list.addMusicLocationType'] = setting.list?.addMusicLocationType
//     setting['download.enable'] = setting.download?.enable
//     setting['download.savePath'] = setting.download?.savePath
//     setting['download.fileName'] = setting.download?.fileName
//     setting['download.maxDownloadNum'] = setting.download?.maxDownloadNum
//     setting['download.isDownloadLrc'] = setting.download?.isDownloadLrc
//     setting['download.lrcFormat'] = setting.download?.lrcFormat
//     setting['download.isEmbedPic'] = setting.download?.isEmbedPic
//     setting['download.isEmbedLyric'] = setting.download?.isEmbedLyric
//     setting['download.isUseOtherSource'] = setting.download?.isUseOtherSource
//     setting['search.isShowHotSearch'] = setting.search?.isShowHotSearch
//     setting['search.isShowHistorySearch'] = setting.search?.isShowHistorySearch
//     setting['search.isFocusSearchBox'] = setting.search?.isFocusSearchBox
//     setting['network.proxy.enable'] = setting.network?.proxy?.enable
//     setting['network.proxy.host'] = setting.network?.proxy?.host
//     setting['network.proxy.port'] = setting.network?.proxy?.port
//     setting['network.proxy.username'] = setting.network?.proxy?.username
//     setting['network.proxy.password'] = setting.network?.proxy?.password
//     setting['tray.enable'] = setting.tray?.enable
//     setting['tray.themeId'] = setting.tray?.themeId
//     setting['sync.enable'] = setting.sync?.enable
//     setting['sync.port'] = setting.sync?.port
//     setting['theme.id'] = oldThemeMap[setting.theme?.id as keyof typeof oldThemeMap]
//     setting['theme.lightId'] = oldThemeMap[setting.theme?.lightId as keyof typeof oldThemeMap]
//     setting['theme.darkId'] = oldThemeMap[setting.theme?.darkId as keyof typeof oldThemeMap]
//     setting['odc.isAutoClearSearchInput'] = setting.odc?.isAutoClearSearchInput
//     setting['odc.isAutoClearSearchList'] = setting.odc?.isAutoClearSearchList
//     setting.version = '2.0.0'
//   }
//   // 迁移 v2.2.0 之前的设置数据
//   if (compareVer(setting.version, '2.1.0') < 0) {
//     setting['sync.erver.port'] = setting['sync.port']
//     setting.version = '2.1.0'
//   }
//   return setting
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlncmF0ZVNldHRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL3V0aWxzL21pZ3JhdGVTZXR0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1QztBQUV2Qyx3QkFBd0I7QUFDeEIsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLHlCQUF5QjtBQUN6QixhQUFhO0FBRWIsNkRBQTZEO0FBQzdELDZCQUE2QjtBQUU3Qix1QkFBdUI7QUFDdkIsb0RBQW9EO0FBQ3BELDRCQUE0QjtBQUM1QixrQ0FBa0M7QUFDbEMseUNBQXlDO0FBQ3pDLDREQUE0RDtBQUM1RCxtQ0FBbUM7QUFDbkMsUUFBUTtBQUVSLDJCQUEyQjtBQUMzQiwyREFBMkQ7QUFDM0QscUZBQXFGO0FBQ3JGLG9EQUFvRDtBQUNwRCxRQUFRO0FBRVIsMEJBQTBCO0FBQzFCLHFDQUFxQztBQUNyQywwQkFBMEI7QUFDMUIsK0JBQStCO0FBQy9CLFVBQVU7QUFDViwrQkFBK0I7QUFDL0IsUUFBUTtBQUVSLG1GQUFtRjtBQUVuRiw0REFBNEQ7QUFDNUQsc0VBQXNFO0FBQ3RFLGdEQUFnRDtBQUNoRCxzREFBc0Q7QUFDdEQsZ0VBQWdFO0FBQ2hFLDRDQUE0QztBQUM1QyxrRUFBa0U7QUFDbEUsOERBQThEO0FBQzlELDBEQUEwRDtBQUMxRCx3RUFBd0U7QUFFeEUsNEVBQTRFO0FBQzVFLGtFQUFrRTtBQUNsRSw4RUFBOEU7QUFDOUUsd0RBQXdEO0FBQ3hELHdEQUF3RDtBQUN4RCxzRUFBc0U7QUFDdEUsb0dBQW9HO0FBQ3BHLHdGQUF3RjtBQUN4RiwwRUFBMEU7QUFDMUUsc0RBQXNEO0FBQ3RELGtFQUFrRTtBQUNsRSx3RUFBd0U7QUFDeEUsZ0ZBQWdGO0FBQ2hGLDBFQUEwRTtBQUMxRSxrRkFBa0Y7QUFDbEYsMEVBQTBFO0FBRTFFLGtGQUFrRjtBQUNsRix3R0FBd0c7QUFDeEcsaUZBQWlGO0FBQ2pGLDJFQUEyRTtBQUUzRSxvRUFBb0U7QUFDcEUsb0VBQW9FO0FBQ3BFLGtGQUFrRjtBQUNsRiwwRkFBMEY7QUFDMUYsa0VBQWtFO0FBQ2xFLG9FQUFvRTtBQUNwRSwwREFBMEQ7QUFDMUQsMERBQTBEO0FBQzFELGdGQUFnRjtBQUNoRixrRkFBa0Y7QUFDbEYsOEVBQThFO0FBQzlFLDZFQUE2RTtBQUM3RSx5SUFBeUk7QUFDekksbUZBQW1GO0FBQ25GLG1HQUFtRztBQUVuRyxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFLGdFQUFnRTtBQUNoRSxnRkFBZ0Y7QUFDaEYsZ0ZBQWdGO0FBRWhGLDREQUE0RDtBQUM1RCxnRUFBZ0U7QUFDaEUsZ0VBQWdFO0FBQ2hFLDRFQUE0RTtBQUM1RSwwRUFBMEU7QUFDMUUsa0VBQWtFO0FBQ2xFLG9FQUFvRTtBQUNwRSx3RUFBd0U7QUFDeEUsZ0ZBQWdGO0FBRWhGLDBFQUEwRTtBQUMxRSxrRkFBa0Y7QUFDbEYsNEVBQTRFO0FBRTVFLHVFQUF1RTtBQUN2RSxtRUFBbUU7QUFDbkUsbUVBQW1FO0FBQ25FLDJFQUEyRTtBQUMzRSwyRUFBMkU7QUFFM0Usb0RBQW9EO0FBQ3BELHNEQUFzRDtBQUd0RCxvREFBb0Q7QUFDcEQsZ0RBQWdEO0FBRWhELHVGQUF1RjtBQUN2RixpR0FBaUc7QUFDakcsK0ZBQStGO0FBRS9GLGtGQUFrRjtBQUNsRixnRkFBZ0Y7QUFFaEYsZ0NBQWdDO0FBQ2hDLE1BQU07QUFFTix5QkFBeUI7QUFDekIsb0RBQW9EO0FBQ3BELHdEQUF3RDtBQUN4RCxnQ0FBZ0M7QUFDaEMsTUFBTTtBQUdOLG1CQUFtQjtBQUNuQixJQUFJIn0=