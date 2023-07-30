"use strict";
// "use strict";
// function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports["default"] = void 0;
// var _sortableCore = _interopRequireWildcard(require("sortablejs/modular/sortable.core.esm"));
// function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
// function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// var _require = require('@common/utils/vueTools'),
//   onMounted = _require.onMounted;
// var _require2 = require('@renderer/event'),
//   clearDownKeys = _require2.clearDownKeys;
// _sortableCore["default"].mount(new _sortableCore.AutoScroll());
// var noop = function noop() {};
// var _default = function _default(_ref) {
//   var dom_list = _ref.dom_list,
//     dragingItemClassName = _ref.dragingItemClassName,
//     filter = _ref.filter,
//     _onUpdate = _ref.onUpdate,
//     _ref$onStart = _ref.onStart,
//     onStart = _ref$onStart === void 0 ? noop : _ref$onStart,
//     _ref$onEnd = _ref.onEnd,
//     onEnd = _ref$onEnd === void 0 ? noop : _ref$onEnd;
//   var sortable;
//   onMounted(function () {
//     sortable = _sortableCore["default"].create(dom_list.value, {
//       animation: 150,
//       disabled: true,
//       forceFallback: false,
//       filter: filter ? '.' + filter : null,
//       ghostClass: dragingItemClassName,
//       onUpdate: function onUpdate(event) {
//         _onUpdate(event.newIndex, event.oldIndex);
//       },
//       onMove: function onMove(event) {
//         return filter ? !event.related.classList.contains(filter) : true;
//       },
//       onChoose: function onChoose() {
//         onStart();
//       },
//       onUnchoose: function onUnchoose() {
//         onEnd();
//         // 处于拖动状态期间，键盘事件无法监听，拖动结束手动清理按下的键
//         // window.app_event.emit(eventBaseName.setClearDownKeys)
//         clearDownKeys();
//       },
//       onStart: function onStart(event) {
//         window.app_event.dragStart();
//       },
//       onEnd: function onEnd(event) {
//         window.app_event.dragEnd();
//       }
//     });
//   });
//   return {
//     setDisabled: function setDisabled(enable) {
//       if (!sortable) return;
//       sortable.option('disabled', enable);
//     }
//   };
// };
// exports["default"] = _default;
