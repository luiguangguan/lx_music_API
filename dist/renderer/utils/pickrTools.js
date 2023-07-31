// const { throttle } = require('@common/utils/common');
// const Pickr = require('@simonwep/pickr');
// import '@simonwep/pickr/dist/themes/classic.min.css'
// export interface PickrTools {
//   pickr: Pickr | null
//   create: (dom: HTMLElement, color: string, swatches: string[] | null, change: (color: string) => void, reset?: () => void) => PickrTools
//   destroy: () => void
//   setColor: (color: string) => void
// }
// export const pickrTools: PickrTools = {
//   pickr: null,
//   create(dom, color, swatches, change, reset) {
//     const pickrTools: PickrTools = Object.create(this)
//     pickrTools.pickr = Pickr.create({
//       el: dom,
//       default: color,
//       theme: 'classic', // or 'monolith', or 'nano'
//       defaultRepresentation: 'RGBA',
//       autoReposition: false,
//       closeWithKey: '',
//       appClass: 'color-picker',
//       comparison: false,
//       useAsButton: true,
//       swatches,
//       components: {
//         // Main components
//         preview: true,
//         opacity: true,
//         hue: true,
//         // Input / output Options
//         interaction: {
//           hex: true,
//           rgba: true,
//           input: true,
//           cancel: true,
//           // save: true,
//         },
//       },
//       i18n: {
//         // Strings visible in the UI
//         'ui:dialog': ' ',
//         'btn:toggle': window.i18n.t('theme_edit_modal__pick_color'),
//         'btn:swatch': ' ',
//         'btn:last-color': window.i18n.t('theme_edit_modal__pick_last_color'),
//         'btn:save': window.i18n.t('theme_edit_modal__pick_save'),
//         'btn:cancel': window.i18n.t('theme_edit_modal__pick_cancel'),
//         // Strings used for aria-labels
//         'aria:btn:save': ' ',
//         'aria:btn:cancel': ' ',
//         'aria:input': ' ',
//         'aria:palette': ' ',
//         'aria:hue': '',
//         'aria:opacity': ' ',
//       },
//     })
//     let swatchselectColor: any
//     const throttleChange = throttle((color: any, source: string) => {
//       if (source == 'swatch' && swatchselectColor !== color) return
//       change(color.toRGBA().toString())
//     })
//     pickrTools.pickr.on('swatchselect', (color: any) => {
//       swatchselectColor = color
//     }).on('change', throttleChange).on('cancel', () => {
//       console.log('cancel')
//       change(color)
//       reset?.()
//     })
//     return pickrTools
//   },
//   destroy() {
//     if (!this.pickr) return
//     this.pickr.destroyAndRemove()
//     this.pickr = null
//   },
//   setColor(color) {
//     this.pickr?.setColor(color)
//   },
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja3JUb29scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci91dGlscy9waWNrclRvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdEQUF3RDtBQUN4RCw0Q0FBNEM7QUFDNUMsdURBQXVEO0FBRXZELGdDQUFnQztBQUNoQyx3QkFBd0I7QUFDeEIsNElBQTRJO0FBQzVJLHdCQUF3QjtBQUN4QixzQ0FBc0M7QUFDdEMsSUFBSTtBQUVKLDBDQUEwQztBQUMxQyxpQkFBaUI7QUFDakIsa0RBQWtEO0FBQ2xELHlEQUF5RDtBQUV6RCx3Q0FBd0M7QUFDeEMsaUJBQWlCO0FBQ2pCLHdCQUF3QjtBQUN4QixzREFBc0Q7QUFDdEQsdUNBQXVDO0FBQ3ZDLCtCQUErQjtBQUMvQiwwQkFBMEI7QUFDMUIsa0NBQWtDO0FBQ2xDLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFFM0Isa0JBQWtCO0FBRWxCLHNCQUFzQjtBQUV0Qiw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFFckIsb0NBQW9DO0FBQ3BDLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6QiwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixXQUFXO0FBRVgsZ0JBQWdCO0FBQ2hCLHVDQUF1QztBQUN2Qyw0QkFBNEI7QUFDNUIsdUVBQXVFO0FBQ3ZFLDZCQUE2QjtBQUM3QixnRkFBZ0Y7QUFDaEYsb0VBQW9FO0FBQ3BFLHdFQUF3RTtBQUV4RSwwQ0FBMEM7QUFDMUMsZ0NBQWdDO0FBQ2hDLGtDQUFrQztBQUNsQyw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLDBCQUEwQjtBQUMxQiwrQkFBK0I7QUFDL0IsV0FBVztBQUNYLFNBQVM7QUFFVCxpQ0FBaUM7QUFFakMsd0VBQXdFO0FBQ3hFLHNFQUFzRTtBQUN0RSwwQ0FBMEM7QUFDMUMsU0FBUztBQUNULDREQUE0RDtBQUM1RCxrQ0FBa0M7QUFDbEMsMkRBQTJEO0FBQzNELDhCQUE4QjtBQUM5QixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLFNBQVM7QUFFVCx3QkFBd0I7QUFDeEIsT0FBTztBQUNQLGdCQUFnQjtBQUNoQiw4QkFBOEI7QUFDOUIsb0NBQW9DO0FBQ3BDLHdCQUF3QjtBQUN4QixPQUFPO0FBQ1Asc0JBQXNCO0FBQ3RCLGtDQUFrQztBQUNsQyxPQUFPO0FBQ1AsSUFBSSJ9