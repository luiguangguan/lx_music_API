// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports["default"] = void 0;
// var _require = require('@renderer/plugins/i18n'),
//   useI18n = _require.useI18n;
// var _require2 = require('@renderer/plugins/Dialog'),
//   dialog = _require2.dialog;
// var _default = function _default() {
//   var t = useI18n();
//   return function (type) {
//     var message;
//     switch (type) {
//       case 'defautlList':
//       case 'playList':
//       case 'playList_v2':
//         message = t('list_import_tip__playlist');
//         break;
//       case 'setting':
//       case 'setting_v2':
//         message = t('list_import_tip__setting');
//         break;
//       case 'allData':
//       case 'allData_v2':
//         message = t('list_import_tip__alldata');
//         break;
//       case 'playListPart':
//       case 'playListPart_v2':
//         message = t('list_import_tip__playlist_part');
//         break;
//       default:
//         message = t('list_import_tip__unknown');
//         break;
//     }
//     dialog({
//       message: message,
//       confirmButtonText: t('ok')
//     });
//   };
// };
// exports["default"] = _default;