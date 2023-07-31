// const { appSetting, setTogglePlayMode } = require('@renderer/store/setting');
// import {
//   computed,
// } from '@common/utils/vueTools'
// const { useI18n } = require('@renderer/plugins/i18n');
// // const playNextModes = [
// //   'listLoop',
// //   'random',
// //   'list',
// //   'singleLoop',
// //   'none',
// // ] as const
// export default () => {
//   const t = useI18n()
//   const nextTogglePlayName = computed(() => {
//     switch (appSetting['player.togglePlayMethod']) {
//       case 'listLoop': return t('player__play_toggle_mode_list_loop')
//       case 'random': return t('player__play_toggle_mode_random')
//       case 'singleLoop': return t('player__play_toggle_mode_single_loop')
//       case 'list': return t('player__play_toggle_mode_list')
//       default: return t('player__play_toggle_mode_off')
//     }
//   })
//   const toggleNextPlayMode = (mode: LX.AppSetting['player.togglePlayMethod']) => {
//     if (mode == appSetting['player.togglePlayMethod']) return
//     // let index = playNextModes.indexOf(appSetting['player.togglePlayMethod'])
//     // if (++index >= playNextModes.length) index = 0
//     setTogglePlayMode(mode)
//   }
//   return {
//     nextTogglePlayName,
//     toggleNextPlayMode,
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlTmV4dFRvZ2dsZVBsYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcmVuZGVyZXIvdXRpbHMvY29tcG9zaXRpb25zL3VzZU5leHRUb2dnbGVQbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdGQUFnRjtBQUNoRixXQUFXO0FBQ1gsY0FBYztBQUNkLGtDQUFrQztBQUNsQyx5REFBeUQ7QUFFekQsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2YsZ0JBQWdCO0FBRWhCLHlCQUF5QjtBQUN6Qix3QkFBd0I7QUFDeEIsZ0RBQWdEO0FBQ2hELHVEQUF1RDtBQUN2RCx3RUFBd0U7QUFDeEUsbUVBQW1FO0FBQ25FLDRFQUE0RTtBQUM1RSwrREFBK0Q7QUFDL0QsMERBQTBEO0FBQzFELFFBQVE7QUFDUixPQUFPO0FBRVAscUZBQXFGO0FBQ3JGLGdFQUFnRTtBQUNoRSxrRkFBa0Y7QUFDbEYsd0RBQXdEO0FBQ3hELDhCQUE4QjtBQUM5QixNQUFNO0FBRU4sYUFBYTtBQUNiLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsTUFBTTtBQUNOLElBQUkifQ==