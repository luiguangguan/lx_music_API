// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports["default"] = void 0;
// var _require = require('@common/utils/vueTools'),
//   onMounted = _require.onMounted,
//   onBeforeUnmount = _require.onBeforeUnmount,
//   watch = _require.watch,
//   reactive = _require.reactive,
//   ref = _require.ref;
// var _default = function _default(_ref) {
//   var visible = _ref.visible,
//     location = _ref.location,
//     onHide = _ref.onHide;
//   var transition1 = 'transform, opacity';
//   var transition2 = 'transform, opacity, top, left';
//   var show = false;
//   var dom_menu = ref(null);
//   var menuStyles = reactive({
//     left: 0,
//     top: 0,
//     opacity: 0,
//     transitionProperty: 'transform, opacity',
//     transform: 'scale(.8, .7) translate(0,0)',
//     pointerEvents: 'none'
//   });
//   var handleShow = function handleShow() {
//     show = true;
//     menuStyles.opacity = 1;
//     menuStyles.transform = "scale(1) translate(".concat(handleGetOffsetXY(location.value.x, location.value.y), ")");
//     menuStyles.pointerEvents = 'auto';
//   };
//   var handleHide = function handleHide() {
//     menuStyles.opacity = 0;
//     menuStyles.transform = 'scale(.8, .7) translate(0, 0)';
//     menuStyles.pointerEvents = 'none';
//     show = false;
//   };
//   var handleGetOffsetXY = function handleGetOffsetXY(left, top) {
//     var listWidth = dom_menu.value.clientWidth;
//     var listHeight = dom_menu.value.clientHeight;
//     var dom_container_parant = dom_menu.value.offsetParent;
//     var containerWidth = dom_container_parant.clientWidth;
//     var containerHeight = dom_container_parant.clientHeight;
//     var offsetWidth = containerWidth - left - listWidth;
//     var offsetHeight = containerHeight - top - listHeight;
//     var x = 0;
//     var y = 0;
//     if (containerWidth > listWidth && offsetWidth < 12) {
//       x = offsetWidth - 12;
//     }
//     if (containerHeight > listHeight && offsetHeight < 5) {
//       y = offsetHeight - 5;
//     }
//     return "".concat(x, "px, ").concat(y, "px");
//   };
//   var handleDocumentClick = function handleDocumentClick(event) {
//     if (!show) return;
//     if (event.target == dom_menu.value || dom_menu.value.contains(event.target)) return;
//     if (show && menuStyles.transitionProperty != transition1) menuStyles.transitionProperty = transition1;
//     onHide();
//   };
//   watch(visible, function (visible) {
//     visible ? handleShow() : handleHide();
//   }, {
//     immediate: true
//   });
//   watch(location, function (location) {
//     menuStyles.left = location.x - window.lx.rootOffset + 2 + 'px';
//     menuStyles.top = location.y - window.lx.rootOffset + 'px';
//     // nextTick(() => {
//     if (show) {
//       if (menuStyles.transitionProperty != transition2) menuStyles.transitionProperty = transition2;
//       menuStyles.transform = "scale(1) translate(".concat(handleGetOffsetXY(location.x, location.y), ")");
//     }
//     // })
//   }, {
//     deep: true
//   });
//   onMounted(function () {
//     document.addEventListener('click', handleDocumentClick);
//   });
//   onBeforeUnmount(function () {
//     document.removeEventListener('click', handleDocumentClick);
//   });
//   return {
//     dom_menu: dom_menu,
//     menuStyles: menuStyles
//   };
// };
// exports["default"] = _default;