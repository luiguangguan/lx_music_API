// import {
//   computed,
// } from '@common/utils/vueTools'
// const { useI18n } = require('@renderer/plugins/i18n');
// const { appSetting, setLockDesktopLyric, setVisibleDesktopLyric } = require('@renderer/store/setting');
// export default () => {
//   const t = useI18n()
//   const toggleDesktopLyricBtnTitle = computed(() => {
//     return `${
//       appSetting['desktopLyric.enable']
//         ? t('player__desktop_lyric_off')
//         : t('player__desktop_lyric_on')
//     }（${
//       appSetting['desktopLyric.isLock']
//         ? t('player__desktop_lyric_unlock')
//         : t('player__desktop_lyric_lock')
//     }）`
//   })
//   const toggleDesktopLyric = () => {
//     setVisibleDesktopLyric(!appSetting['desktopLyric.enable'])
//   }
//   const toggleLockDesktopLyric = () => {
//     setLockDesktopLyric(!appSetting['desktopLyric.isLock'])
//   }
//   return {
//     toggleDesktopLyricBtnTitle,
//     toggleDesktopLyric,
//     toggleLockDesktopLyric,
//   }
// }
"use strict";
