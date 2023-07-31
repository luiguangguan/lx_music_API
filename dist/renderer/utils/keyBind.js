// const { isMac } = require('@common/utils');
// const downKeys = new Set<string>()
// export type KeyActionType = LX.KeyDownEevent['type']
// export type Keys = LX.KeyDownEevent['keys']
// export type Key = LX.KeyDownEevent['key']
// export type EventKey = LX.KeyDownEevent['eventKey']
// export type Event = LX.KeyDownEevent['event']
// const handleEvent = (type: KeyActionType, event: LX.KeyEvent, keys: Keys, isEditing: boolean) => {
//   let eventKey = event.key
//   if (isMac) {
//     let index = keys.indexOf('meta')
//     if (index > -1) keys.splice(index, 1, 'mod')
//     if (eventKey == 'Meta') eventKey = 'mod'
//   } else {
//     let index = keys.indexOf('ctrl')
//     if (index > -1) keys.splice(index, 1, 'mod')
//     if (eventKey == 'Control') eventKey = 'mod'
//   }
//   let key = keys.join('+')
//   switch (type) {
//     case 'down':
//       downKeys.add(key)
//       break
//     case 'up':
//       downKeys.delete(key)
//       break
//   }
//   handleSendEvent(key, eventKey, type, event, keys, isEditing)
// }
// // 修饰键处理
// const eventModifiers = (event: LX.KeyEvent): string[] => {
//   let modifiers: string[] = []
//   if (event.ctrlKey) modifiers.push('ctrl')
//   if (event.shiftKey) modifiers.push('shift')
//   if (event.altKey) modifiers.push('alt')
//   if (event.metaKey) modifiers.push('meta')
//   return modifiers
// }
// // 是否忽略事件（表单元素等默认忽略）
// const assertStopCallback = (element: HTMLElement) => {
//   // if the element has the class "keybind" then no need to stop
//   if (element.classList.contains('key-bind')) return false
//   // stop for input, select, and textarea
//   switch (element.tagName) {
//     case 'INPUT':
//     case 'SELECT':
//     case 'TEXTAREA':
//       return true
//     default:
//       return !!element.isContentEditable
//   }
// }
// const handleKeyDown = (event: LX.KeyEvent) => {
//   // if (assertStopCallback(event.target)) return
//   // event.preventDefault()
//   let keys = eventModifiers(event)
//   switch (event.key) {
//     case 'Control':
//     case 'Alt':
//     case 'Meta':
//     case 'Shift':
//       break
//     case ' ':
//       keys.push('space')
//       break
//     default:
//       keys.push((event.code.includes('Numpad') ? event.code.replace(/^Numpad(\w{1,3})\w*$/i, 'num$1') : event.key).toLowerCase())
//       break
//   }
//   handleEvent('down', event, keys, event.target ? assertStopCallback(event.target as HTMLElement) : false)
// }
// const handleKeyUp = (event: LX.KeyEvent) => {
//   // if (assertStopCallback(event.target)) return
//   event.preventDefault()
//   let keys = eventModifiers(event)
//   switch (event.key) {
//     case 'Control':
//       keys.push('ctrl')
//       break
//     case ' ':
//       keys.push('space')
//       break
//     default:
//       keys.push((event.code.includes('Numpad') ? event.code.replace(/^Numpad(\w{1,3})\w*$/i, 'num$1') : event.key).toLowerCase())
//       break
//   }
//   handleEvent('up', event, keys, event.target ? assertStopCallback(event.target as HTMLElement) : false)
// }
// type HandleSendEvent = (key: Key, eventKey: EventKey, type: KeyActionType, event: Event, keys: Keys, isEditing: boolean) => void
// let handleSendEvent: HandleSendEvent
// const bindKey = (handle: HandleSendEvent = () => {}) => {
//   handleSendEvent = handle
//   document.addEventListener('keydown', handleKeyDown)
//   document.addEventListener('keyup', handleKeyUp)
// }
// const unbindKey = () => {
//   document.removeEventListener('keydown', handleKeyDown)
//   document.removeEventListener('keyup', handleKeyUp)
// }
// const clearDownKeys = () => {
//   let keys = Array.from(downKeys)
//   for (let i = keys.length - 1; i > -1; i--) {
//     handleSendEvent(keys[i], keys[i], 'up', null, [keys[i]], false)
//   }
//   downKeys.clear()
// }
// export default {
//   bindKey,
//   unbindKey,
//   clearDownKeys,
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5QmluZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci91dGlscy9rZXlCaW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUE4QztBQUU5QyxxQ0FBcUM7QUFFckMsdURBQXVEO0FBQ3ZELDhDQUE4QztBQUM5Qyw0Q0FBNEM7QUFDNUMsc0RBQXNEO0FBQ3RELGdEQUFnRDtBQUVoRCxxR0FBcUc7QUFDckcsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQix1Q0FBdUM7QUFDdkMsbURBQW1EO0FBQ25ELCtDQUErQztBQUMvQyxhQUFhO0FBQ2IsdUNBQXVDO0FBQ3ZDLG1EQUFtRDtBQUNuRCxrREFBa0Q7QUFDbEQsTUFBTTtBQUNOLDZCQUE2QjtBQUU3QixvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2QsTUFBTTtBQUNOLGlFQUFpRTtBQUNqRSxJQUFJO0FBRUosV0FBVztBQUNYLDZEQUE2RDtBQUM3RCxpQ0FBaUM7QUFDakMsOENBQThDO0FBQzlDLGdEQUFnRDtBQUNoRCw0Q0FBNEM7QUFDNUMsOENBQThDO0FBRTlDLHFCQUFxQjtBQUNyQixJQUFJO0FBRUosdUJBQXVCO0FBQ3ZCLHlEQUF5RDtBQUN6RCxtRUFBbUU7QUFDbkUsNkRBQTZEO0FBRTdELDRDQUE0QztBQUM1QywrQkFBK0I7QUFDL0Isb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQix1QkFBdUI7QUFDdkIsb0JBQW9CO0FBQ3BCLGVBQWU7QUFDZiwyQ0FBMkM7QUFDM0MsTUFBTTtBQUNOLElBQUk7QUFFSixrREFBa0Q7QUFDbEQsb0RBQW9EO0FBQ3BELDhCQUE4QjtBQUM5QixxQ0FBcUM7QUFDckMseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLDJCQUEyQjtBQUMzQixjQUFjO0FBQ2QsZUFBZTtBQUNmLG9JQUFvSTtBQUNwSSxjQUFjO0FBQ2QsTUFBTTtBQUNOLDZHQUE2RztBQUM3RyxJQUFJO0FBRUosZ0RBQWdEO0FBQ2hELG9EQUFvRDtBQUNwRCwyQkFBMkI7QUFDM0IscUNBQXFDO0FBQ3JDLHlCQUF5QjtBQUN6QixzQkFBc0I7QUFDdEIsMEJBQTBCO0FBQzFCLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsMkJBQTJCO0FBQzNCLGNBQWM7QUFDZCxlQUFlO0FBQ2Ysb0lBQW9JO0FBQ3BJLGNBQWM7QUFDZCxNQUFNO0FBQ04sMkdBQTJHO0FBQzNHLElBQUk7QUFFSixtSUFBbUk7QUFDbkksdUNBQXVDO0FBRXZDLDREQUE0RDtBQUM1RCw2QkFBNkI7QUFDN0Isd0RBQXdEO0FBQ3hELG9EQUFvRDtBQUNwRCxJQUFJO0FBRUosNEJBQTRCO0FBQzVCLDJEQUEyRDtBQUMzRCx1REFBdUQ7QUFDdkQsSUFBSTtBQUVKLGdDQUFnQztBQUNoQyxvQ0FBb0M7QUFDcEMsaURBQWlEO0FBQ2pELHNFQUFzRTtBQUN0RSxNQUFNO0FBQ04scUJBQXFCO0FBQ3JCLElBQUk7QUFFSixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsSUFBSSJ9