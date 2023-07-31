// const { onMounted, onBeforeUnmount, ref } = require('@common/utils/vueTools');
// export default (name: string) => {
//   const keyDown = ref(false)
//   const down = `key_${name}_down`
//   const up = `key_${name}_up`
//   const handle_key_down = (event: LX.KeyDownEevent) => {
//     if (!keyDown.value) {
//       // console.log(event)
//       switch ((event.event?.target as HTMLElement).tagName) {
//         case 'INPUT':
//         case 'SELECT':
//         case 'TEXTAREA':
//           return
//         default: if ((event.event?.target as HTMLElement).isContentEditable) return
//       }
//       keyDown.value = true
//     }
//   }
//   const handle_key_up = () => {
//     keyDown.value &&= false
//   }
//   onMounted(() => {
//     window.key_event.on(down, handle_key_down)
//     window.key_event.on(up, handle_key_up)
//   })
//   onBeforeUnmount(() => {
//     window.key_event.off(down, handle_key_down)
//     window.key_event.off(up, handle_key_up)
//   })
//   return keyDown
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlS2V5RG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZW5kZXJlci91dGlscy9jb21wb3NpdGlvbnMvdXNlS2V5RG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBaUY7QUFFakYscUNBQXFDO0FBQ3JDLCtCQUErQjtBQUMvQixvQ0FBb0M7QUFDcEMsZ0NBQWdDO0FBRWhDLDJEQUEyRDtBQUMzRCw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLGdFQUFnRTtBQUNoRSx3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLDJCQUEyQjtBQUMzQixtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLFVBQVU7QUFFViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSLE1BQU07QUFFTixrQ0FBa0M7QUFDbEMsOEJBQThCO0FBQzlCLE1BQU07QUFFTixzQkFBc0I7QUFDdEIsaURBQWlEO0FBQ2pELDZDQUE2QztBQUM3QyxPQUFPO0FBRVAsNEJBQTRCO0FBQzVCLGtEQUFrRDtBQUNsRCw4Q0FBOEM7QUFDOUMsT0FBTztBQUVQLG1CQUFtQjtBQUNuQixJQUFJIn0=