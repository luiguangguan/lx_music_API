// import { APP_EVENT_NAMES } from './constants'
// const keyName = {
//   common: APP_EVENT_NAMES.winMainName,
//   player: APP_EVENT_NAMES.winMainName,
//   desktop_lyric: APP_EVENT_NAMES.winLyricName,
// }
// const hotKey = {
//   common: {
//     min: {
//       name: 'min',
//       action: 'min',
//       type: '',
//     },
//     min_toggle: {
//       name: 'toggle_min',
//       action: 'toggle_min',
//       type: '',
//     },
//     hide_toggle: {
//       name: 'toggle_hide',
//       action: 'toggle_hide',
//       type: '',
//     },
//     close: {
//       name: 'toggle_close',
//       action: 'toggle_close',
//       type: '',
//     },
//     focusSearchInput: {
//       name: 'focus_search_input',
//       action: 'focus_search_input',
//       type: '',
//     },
//   },
//   player: {
//     toggle_play: {
//       name: 'toggle_play',
//       action: 'toggle_play',
//       type: '',
//     },
//     next: {
//       name: 'next',
//       action: 'next',
//       type: '',
//     },
//     prev: {
//       name: 'prev',
//       action: 'prev',
//       type: '',
//     },
//     volume_up: {
//       name: 'volume_up',
//       action: 'volume_up',
//       type: '',
//     },
//     volume_down: {
//       name: 'volume_down',
//       action: 'volume_down',
//       type: '',
//     },
//     volume_mute: {
//       name: 'volume_mute',
//       action: 'volume_mute',
//       type: '',
//     },
//   },
//   desktop_lyric: {
//     toggle_visible: {
//       name: 'toggle_visible',
//       action: 'toggle_visible',
//       type: '',
//     },
//     toggle_lock: {
//       name: 'toggle_lock',
//       action: 'toggle_lock',
//       type: '',
//     },
//     toggle_always_top: {
//       name: 'toggle_always_top',
//       action: 'toggle_always_top',
//       type: '',
//     },
//   },
// }
// for (const type of Object.keys(hotKey) as Array<keyof typeof hotKey>) {
//   let keys = hotKey[type]
//   for (const key of Object.keys(keys) as Array<keyof typeof keys>) {
//     const keyInfo: LX.HotKey = keys[key]
//     keyInfo.action = `${type}_${keyInfo.action}`
//     keyInfo.name = `${type}_${keyInfo.name}`
//     keyInfo.type = keyName[type] as keyof typeof hotKey
//   }
// }
// export const HOTKEY_COMMON = hotKey.common
// export const HOTKEY_PLAYER = hotKey.player
// export const HOTKEY_DESKTOP_LYRIC = hotKey.desktop_lyric
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi9ob3RLZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBR2hELG9CQUFvQjtBQUNwQix5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDLGlEQUFpRDtBQUNqRCxJQUFJO0FBRUosbUJBQW1CO0FBQ25CLGNBQWM7QUFDZCxhQUFhO0FBQ2IscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2QixrQkFBa0I7QUFDbEIsU0FBUztBQUNULG9CQUFvQjtBQUNwQiw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0Isa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxlQUFlO0FBQ2YsOEJBQThCO0FBQzlCLGdDQUFnQztBQUNoQyxrQkFBa0I7QUFDbEIsU0FBUztBQUNULDBCQUEwQjtBQUMxQixvQ0FBb0M7QUFDcEMsc0NBQXNDO0FBQ3RDLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsT0FBTztBQUNQLGNBQWM7QUFDZCxxQkFBcUI7QUFDckIsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixrQkFBa0I7QUFDbEIsU0FBUztBQUNULGNBQWM7QUFDZCxzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsY0FBYztBQUNkLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxtQkFBbUI7QUFDbkIsMkJBQTJCO0FBQzNCLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsU0FBUztBQUNULHFCQUFxQjtBQUNyQiw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0Isa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxPQUFPO0FBQ1AscUJBQXFCO0FBQ3JCLHdCQUF3QjtBQUN4QixnQ0FBZ0M7QUFDaEMsa0NBQWtDO0FBQ2xDLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0Isa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCwyQkFBMkI7QUFDM0IsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyxrQkFBa0I7QUFDbEIsU0FBUztBQUNULE9BQU87QUFDUCxJQUFJO0FBRUosMEVBQTBFO0FBQzFFLDRCQUE0QjtBQUM1Qix1RUFBdUU7QUFDdkUsMkNBQTJDO0FBQzNDLG1EQUFtRDtBQUNuRCwrQ0FBK0M7QUFDL0MsMERBQTBEO0FBQzFELE1BQU07QUFDTixJQUFJO0FBRUosNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3QywyREFBMkQifQ==