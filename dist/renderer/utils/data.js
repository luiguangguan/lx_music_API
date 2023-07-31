// /* eslint-disable @typescript-eslint/no-dynamic-delete */
// import {
//   saveListPositionInfo as saveListPositionInfoFromData,
//   getListPositionInfo as getListPositionInfoFromData,
//   saveListPrevSelectId as saveListPrevSelectIdFromData,
//   getListPrevSelectId as getListPrevSelectIdFromData,
//   saveListUpdateInfo as saveListUpdateInfoFromData,
//   getListUpdateInfo as getListUpdateInfoFromData,
//   saveSearchSetting as saveSearchSettingFromData,
//   getSearchSetting as getSearchSettingFromData,
//   saveSongListSetting as saveSongListSettingFromData,
//   getSongListSetting as getSongListSettingFromData,
//   saveLeaderboardSetting as saveLeaderboardSettingFromData,
//   getLeaderboardSetting as getLeaderboardSettingFromData,
//   saveViewPrevState as saveViewPrevStateFromData,
// } from '@renderer/utils/ipc'
// const { throttle } = require('@common/utils');
// const { type DEFAULT_SETTING, LIST_IDS } = require('@common/constants');
// const { dateFormat } = require('./index');
// const { setUpdateTime } = require('@renderer/store/list/action');
// let listPosition: LX.List.ListPositionInfo
// let listPrevSelectId: string
// let listUpdateInfo: LX.List.ListUpdateInfo
// let searchSetting: typeof DEFAULT_SETTING['search']
// let songListSetting: typeof DEFAULT_SETTING['songList']
// let leaderboardSetting: typeof DEFAULT_SETTING['leaderboard']
// const saveListPositionThrottle = throttle(() => {
//   saveListPositionInfoFromData(listPosition)
// }, 1000)
// const saveSearchSettingThrottle = throttle(() => {
//   saveSearchSettingFromData(searchSetting)
// }, 1000)
// const saveSongListSettingThrottle = throttle(() => {
//   saveSongListSettingFromData(songListSetting)
// }, 1000)
// const saveLeaderboardSettingThrottle = throttle(() => {
//   saveLeaderboardSettingFromData(leaderboardSetting)
// }, 1000)
// const saveViewPrevStateThrottle = throttle((state) => {
//   saveViewPrevStateFromData(state)
// }, 1000)
// const initPosition = async() => {
//   listPosition ??= await getListPositionInfoFromData() ?? {}
// }
// export const getListPosition = async(id: string): Promise<number> => {
//   await initPosition()
//   return listPosition[id] ?? 0
// }
// export const setListPosition = async(id: string, position?: number) => {
//   await initPosition()
//   listPosition[id] = position ?? 0
//   saveListPositionThrottle()
// }
// export const removeListPosition = (id: string) => {
//   delete listPosition[id]
//   saveListPositionThrottle()
// }
// export const overwriteListPosition = async(ids: string[]) => {
//   await initPosition()
//   const removedIds = []
//   for (const id of Object.keys(listPosition)) {
//     if (ids.includes(id)) continue
//     removedIds.push(id)
//   }
//   for (const id of removedIds) delete listPosition[id]
//   saveListPositionThrottle()
// }
// const saveListPrevSelectIdThrottle = throttle(() => {
//   saveListPrevSelectIdFromData(listPrevSelectId)
// }, 200)
// export const getListPrevSelectId = async() => {
//   listPrevSelectId ??= await getListPrevSelectIdFromData() ?? LIST_IDS.DEFAULT
//   return listPrevSelectId ?? LIST_IDS.DEFAULT
// }
// export const saveListPrevSelectId = (id: string) => {
//   listPrevSelectId = id
//   saveListPrevSelectIdThrottle()
// }
// const saveListUpdateInfo = throttle(() => {
//   saveListUpdateInfoFromData(listUpdateInfo)
// }, 1000)
// const initListUpdateInfo = async() => {
//   if (listUpdateInfo == null) {
//     listUpdateInfo = await getListUpdateInfoFromData() ?? {}
//     for (const [id, info] of Object.entries(listUpdateInfo)) {
//       setUpdateTime(id, info.updateTime ? dateFormat(info.updateTime) : '')
//     }
//   }
// }
// export const getListUpdateInfo = async() => {
//   await initListUpdateInfo()
//   return listUpdateInfo
// }
// export const setListUpdateInfo = async(info: LX.List.ListUpdateInfo) => {
//   await initListUpdateInfo()
//   listUpdateInfo = info
//   saveListUpdateInfo()
// }
// export const setListAutoUpdate = async(id: string, enable: boolean) => {
//   await initListUpdateInfo()
//   const targetInfo = listUpdateInfo[id] ?? { updateTime: 0, isAutoUpdate: false }
//   targetInfo.isAutoUpdate = enable
//   listUpdateInfo[id] = targetInfo
//   saveListUpdateInfo()
// }
// export const setListUpdateTime = async(id: string, time: number) => {
//   await initListUpdateInfo()
//   const targetInfo = listUpdateInfo[id] ?? { updateTime: 0, isAutoUpdate: false }
//   targetInfo.updateTime = time
//   listUpdateInfo[id] = targetInfo
//   saveListUpdateInfo()
// }
// // export const setListUpdateInfo = (id, { updateTime, isAutoUpdate }) => {
// //   listUpdateInfo[id] = { updateTime, isAutoUpdate }
// //   saveListUpdateInfo()
// // }
// export const removeListUpdateInfo = (id: string) => {
//   delete listUpdateInfo[id]
//   saveListUpdateInfo()
// }
// export const overwriteListUpdateInfo = async(ids: string[]) => {
//   await initListUpdateInfo()
//   const removedIds = []
//   for (const id of Object.keys(listUpdateInfo)) {
//     if (ids.includes(id)) continue
//     removedIds.push(id)
//   }
//   for (const id of removedIds) delete listUpdateInfo[id]
//   saveListUpdateInfo()
// }
// export const getSearchSetting = async() => {
//   searchSetting ??= await getSearchSettingFromData()
//   return { ...searchSetting }
// }
// export const setSearchSetting = async(setting: Partial<typeof DEFAULT_SETTING['search']>) => {
//   if (!searchSetting) await getSearchSetting()
//   let requiredSave = false
//   if (setting.source && searchSetting.source != setting.source) requiredSave = true
//   if (setting.type && searchSetting.type != setting.type) requiredSave = true
//   if (setting.temp_source && searchSetting.temp_source != setting.temp_source) requiredSave = true
//   if (!requiredSave) return
//   searchSetting = Object.assign(searchSetting, setting)
//   saveSearchSettingThrottle()
// }
// export const getSongListSetting = async() => {
//   songListSetting ??= await getSongListSettingFromData()
//   return { ...songListSetting }
// }
// export const setSongListSetting = async(setting: Partial<typeof DEFAULT_SETTING['songList']>) => {
//   if (!songListSetting) await getSongListSetting()
//   songListSetting = Object.assign(songListSetting, setting)
//   saveSongListSettingThrottle()
// }
// export const getLeaderboardSetting = async() => {
//   leaderboardSetting ??= await getLeaderboardSettingFromData()
//   return { ...leaderboardSetting }
// }
// export const setLeaderboardSetting = async(setting: Partial<typeof DEFAULT_SETTING['leaderboard']>) => {
//   if (!leaderboardSetting) await getLeaderboardSetting()
//   leaderboardSetting = Object.assign(leaderboardSetting, setting)
//   saveLeaderboardSettingThrottle()
// }
// export const saveViewPrevState = (state: typeof DEFAULT_SETTING['viewPrevState']) => {
//   saveViewPrevStateThrottle(state)
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci91dGlscy9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDtBQUM1RCxXQUFXO0FBQ1gsMERBQTBEO0FBQzFELHdEQUF3RDtBQUN4RCwwREFBMEQ7QUFDMUQsd0RBQXdEO0FBQ3hELHNEQUFzRDtBQUN0RCxvREFBb0Q7QUFDcEQsb0RBQW9EO0FBQ3BELGtEQUFrRDtBQUNsRCx3REFBd0Q7QUFDeEQsc0RBQXNEO0FBQ3RELDhEQUE4RDtBQUM5RCw0REFBNEQ7QUFDNUQsb0RBQW9EO0FBQ3BELCtCQUErQjtBQUMvQixpREFBaUQ7QUFDakQsMkVBQTJFO0FBQzNFLDZDQUE2QztBQUM3QyxvRUFBb0U7QUFFcEUsNkNBQTZDO0FBQzdDLCtCQUErQjtBQUMvQiw2Q0FBNkM7QUFFN0Msc0RBQXNEO0FBQ3RELDBEQUEwRDtBQUMxRCxnRUFBZ0U7QUFFaEUsb0RBQW9EO0FBQ3BELCtDQUErQztBQUMvQyxXQUFXO0FBQ1gscURBQXFEO0FBQ3JELDZDQUE2QztBQUM3QyxXQUFXO0FBQ1gsdURBQXVEO0FBQ3ZELGlEQUFpRDtBQUNqRCxXQUFXO0FBQ1gsMERBQTBEO0FBQzFELHVEQUF1RDtBQUN2RCxXQUFXO0FBQ1gsMERBQTBEO0FBQzFELHFDQUFxQztBQUNyQyxXQUFXO0FBRVgsb0NBQW9DO0FBQ3BDLCtEQUErRDtBQUMvRCxJQUFJO0FBQ0oseUVBQXlFO0FBQ3pFLHlCQUF5QjtBQUN6QixpQ0FBaUM7QUFDakMsSUFBSTtBQUNKLDJFQUEyRTtBQUMzRSx5QkFBeUI7QUFDekIscUNBQXFDO0FBQ3JDLCtCQUErQjtBQUMvQixJQUFJO0FBQ0osc0RBQXNEO0FBQ3RELDRCQUE0QjtBQUM1QiwrQkFBK0I7QUFDL0IsSUFBSTtBQUNKLGlFQUFpRTtBQUNqRSx5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCLGtEQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsMEJBQTBCO0FBQzFCLE1BQU07QUFDTix5REFBeUQ7QUFDekQsK0JBQStCO0FBQy9CLElBQUk7QUFFSix3REFBd0Q7QUFDeEQsbURBQW1EO0FBQ25ELFVBQVU7QUFDVixrREFBa0Q7QUFDbEQsaUZBQWlGO0FBQ2pGLGdEQUFnRDtBQUNoRCxJQUFJO0FBQ0osd0RBQXdEO0FBQ3hELDBCQUEwQjtBQUMxQixtQ0FBbUM7QUFDbkMsSUFBSTtBQUVKLDhDQUE4QztBQUM5QywrQ0FBK0M7QUFDL0MsV0FBVztBQUVYLDBDQUEwQztBQUMxQyxrQ0FBa0M7QUFDbEMsK0RBQStEO0FBQy9ELGlFQUFpRTtBQUNqRSw4RUFBOEU7QUFDOUUsUUFBUTtBQUNSLE1BQU07QUFDTixJQUFJO0FBQ0osZ0RBQWdEO0FBQ2hELCtCQUErQjtBQUMvQiwwQkFBMEI7QUFDMUIsSUFBSTtBQUNKLDRFQUE0RTtBQUM1RSwrQkFBK0I7QUFDL0IsMEJBQTBCO0FBQzFCLHlCQUF5QjtBQUN6QixJQUFJO0FBQ0osMkVBQTJFO0FBQzNFLCtCQUErQjtBQUMvQixvRkFBb0Y7QUFDcEYscUNBQXFDO0FBQ3JDLG9DQUFvQztBQUNwQyx5QkFBeUI7QUFDekIsSUFBSTtBQUNKLHdFQUF3RTtBQUN4RSwrQkFBK0I7QUFDL0Isb0ZBQW9GO0FBQ3BGLGlDQUFpQztBQUNqQyxvQ0FBb0M7QUFDcEMseUJBQXlCO0FBQ3pCLElBQUk7QUFDSiw4RUFBOEU7QUFDOUUseURBQXlEO0FBQ3pELDRCQUE0QjtBQUM1QixPQUFPO0FBQ1Asd0RBQXdEO0FBQ3hELDhCQUE4QjtBQUM5Qix5QkFBeUI7QUFDekIsSUFBSTtBQUNKLG1FQUFtRTtBQUNuRSwrQkFBK0I7QUFDL0IsMEJBQTBCO0FBQzFCLG9EQUFvRDtBQUNwRCxxQ0FBcUM7QUFDckMsMEJBQTBCO0FBQzFCLE1BQU07QUFDTiwyREFBMkQ7QUFDM0QseUJBQXlCO0FBQ3pCLElBQUk7QUFHSiwrQ0FBK0M7QUFDL0MsdURBQXVEO0FBQ3ZELGdDQUFnQztBQUNoQyxJQUFJO0FBQ0osaUdBQWlHO0FBQ2pHLGlEQUFpRDtBQUNqRCw2QkFBNkI7QUFDN0Isc0ZBQXNGO0FBQ3RGLGdGQUFnRjtBQUNoRixxR0FBcUc7QUFFckcsOEJBQThCO0FBQzlCLDBEQUEwRDtBQUMxRCxnQ0FBZ0M7QUFDaEMsSUFBSTtBQUVKLGlEQUFpRDtBQUNqRCwyREFBMkQ7QUFDM0Qsa0NBQWtDO0FBQ2xDLElBQUk7QUFDSixxR0FBcUc7QUFDckcscURBQXFEO0FBQ3JELDhEQUE4RDtBQUM5RCxrQ0FBa0M7QUFDbEMsSUFBSTtBQUVKLG9EQUFvRDtBQUNwRCxpRUFBaUU7QUFDakUscUNBQXFDO0FBQ3JDLElBQUk7QUFDSiwyR0FBMkc7QUFDM0csMkRBQTJEO0FBQzNELG9FQUFvRTtBQUNwRSxxQ0FBcUM7QUFDckMsSUFBSTtBQUVKLHlGQUF5RjtBQUN6RixxQ0FBcUM7QUFDckMsSUFBSSJ9