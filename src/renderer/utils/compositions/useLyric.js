// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports["default"] = void 0;
// function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
// function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
// function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// var _require = require('@common/utils/vueTools'),
//   ref = _require.ref,
//   onMounted = _require.onMounted,
//   onBeforeUnmount = _require.onBeforeUnmount,
//   watch = _require.watch,
//   nextTick = _require.nextTick;
// var _require2 = require('@common/utils/common'),
//   throttle = _require2.throttle,
//   formatPlayTime2 = _require2.formatPlayTime2;
// var _require3 = require('@common/utils/renderer'),
//   scrollTo = _require3.scrollTo;
// var _require4 = require('@renderer/core/player/action'),
//   play = _require4.play;
// // const { player as eventPlayerNames } = require('@renderer/event/names');
// var _default = function _default(_ref) {
//   var isPlay = _ref.isPlay,
//     lyric = _ref.lyric,
//     playProgress = _ref.playProgress,
//     isShowLyricProgressSetting = _ref.isShowLyricProgressSetting,
//     offset = _ref.offset;
//   var dom_lyric = ref(null);
//   var dom_lyric_text = ref(null);
//   var dom_skip_line = ref(null);
//   var isMsDown = ref(false);
//   var isStopScroll = ref(false);
//   var timeStr = ref('--/--');
//   var msDownY = 0;
//   var msDownScrollY = 0;
//   var timeout = null;
//   var cancelScrollFn;
//   var dom_lines;
//   var isSetedLines = false;
//   var point = {
//     x: null,
//     y: null
//   };
//   var time = -1;
//   var dom_pre_line = null;
//   var isSkipMouseEnter = false;
//   var handleSkipPlay = function handleSkipPlay() {
//     if (time == -1) return;
//     handleSkipMouseLeave();
//     isStopScroll.value = false;
//     window.app_event.setProgress(time);
//     if (!isPlay.value) play();
//   };
//   var handleSkipMouseEnter = function handleSkipMouseEnter() {
//     isSkipMouseEnter = true;
//     clearLyricScrollTimeout();
//   };
//   var handleSkipMouseLeave = function handleSkipMouseLeave() {
//     isSkipMouseEnter = false;
//     startLyricScrollTimeout();
//   };
//   var throttleSetTime = throttle(function () {
//     if (!dom_skip_line.value) return;
//     var rect = dom_skip_line.value.getBoundingClientRect();
//     point.x = rect.x;
//     point.y = rect.y;
//     var dom = document.elementFromPoint(point.x, point.y);
//     if (dom_pre_line === dom) return;
//     if (dom.tagName == 'SPAN') {
//       dom = dom.parentNode.parentNode;
//     } else if (dom.classList.contains('line')) {
//       dom = dom.parentNode;
//     }
//     if (dom.time == null) {
//       if (lyric.lines.length) {
//         var _lyric$lines$time;
//         time = dom.classList.contains('pre') ? 0 : (_lyric$lines$time = lyric.lines[lyric.lines.length - 1].time) !== null && _lyric$lines$time !== void 0 ? _lyric$lines$time : 0;
//         time = Math.max(time - lyric.offset - lyric.tempOffset, 0);
//         time /= 1000;
//         if (time > playProgress.maxPlayTime) time = playProgress.maxPlayTime;
//         timeStr.value = formatPlayTime2(time);
//       } else {
//         time = -1;
//         timeStr.value = '--:--';
//       }
//     } else {
//       time = dom.time;
//       time = Math.max(time - lyric.offset - lyric.tempOffset, 0);
//       time /= 1000;
//       if (time > playProgress.maxPlayTime) time = playProgress.maxPlayTime;
//       timeStr.value = formatPlayTime2(time);
//     }
//     dom_pre_line = dom;
//   });
//   var setTime = function setTime() {
//     if (isShowLyricProgressSetting.value) throttleSetTime();
//   };
//   var handleScrollLrc = function handleScrollLrc() {
//     var _dom_lines;
//     var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
//     if (!((_dom_lines = dom_lines) !== null && _dom_lines !== void 0 && _dom_lines.length) || !dom_lyric.value) return;
//     if (cancelScrollFn) {
//       cancelScrollFn();
//       cancelScrollFn = null;
//     }
//     if (isSkipMouseEnter) return;
//     if (isStopScroll.value) return;
//     var dom_p = dom_lines[lyric.line];
//     cancelScrollFn = scrollTo(dom_lyric.value, dom_p ? dom_p.offsetTop - dom_lyric.value.clientHeight * 0.38 : 0, duration);
//   };
//   var clearLyricScrollTimeout = function clearLyricScrollTimeout() {
//     if (!timeout) return;
//     clearTimeout(timeout);
//     timeout = null;
//   };
//   var startLyricScrollTimeout = function startLyricScrollTimeout() {
//     clearLyricScrollTimeout();
//     if (isSkipMouseEnter) return;
//     timeout = setTimeout(function () {
//       timeout = null;
//       isStopScroll.value = false;
//       if (!isPlay.value) return;
//       handleScrollLrc();
//     }, 3000);
//   };
//   var handleLyricDown = function handleLyricDown(y) {
//     // console.log(event)
//     if (delayScrollTimeout) {
//       clearTimeout(delayScrollTimeout);
//       delayScrollTimeout = null;
//     }
//     isMsDown.value = true;
//     msDownY = y;
//     msDownScrollY = dom_lyric.value.scrollTop;
//   };
//   var handleLyricMouseDown = function handleLyricMouseDown(event) {
//     handleLyricDown(event.clientY);
//   };
//   var handleLyricTouchStart = function handleLyricTouchStart(event) {
//     if (event.changedTouches.length) {
//       var touch = event.changedTouches[0];
//       handleLyricDown(touch.clientY);
//     }
//   };
//   var handleMouseMsUp = function handleMouseMsUp(event) {
//     isMsDown.value = false;
//   };
//   var handleMove = function handleMove(y) {
//     if (isMsDown.value) {
//       isStopScroll.value || (isStopScroll.value = true);
//       if (cancelScrollFn) {
//         cancelScrollFn();
//         cancelScrollFn = null;
//       }
//       dom_lyric.value.scrollTop = msDownScrollY + msDownY - y;
//       startLyricScrollTimeout();
//       setTime();
//     }
//   };
//   var handleMouseMsMove = function handleMouseMsMove(event) {
//     handleMove(event.clientY);
//   };
//   var handleTouchMove = function handleTouchMove(e) {
//     if (e.changedTouches.length) {
//       var touch = e.changedTouches[0];
//       handleMove(touch.clientY);
//     }
//   };
//   var handleWheel = function handleWheel(event) {
//     console.log(event.deltaY);
//     isStopScroll.value || (isStopScroll.value = true);
//     if (cancelScrollFn) {
//       cancelScrollFn();
//       cancelScrollFn = null;
//     }
//     dom_lyric.value.scrollTop = dom_lyric.value.scrollTop + event.deltaY;
//     startLyricScrollTimeout();
//     setTime();
//   };
//   var setLyric = function setLyric(lines) {
//     var dom_line_content = document.createDocumentFragment();
//     var _iterator = _createForOfIteratorHelper(lines),
//       _step;
//     try {
//       for (_iterator.s(); !(_step = _iterator.n()).done;) {
//         var line = _step.value;
//         dom_line_content.appendChild(line.dom_line);
//       }
//     } catch (err) {
//       _iterator.e(err);
//     } finally {
//       _iterator.f();
//     }
//     dom_lyric_text.value.textContent = '';
//     dom_lyric_text.value.appendChild(dom_line_content);
//     nextTick(function () {
//       dom_lines = dom_lyric.value.querySelectorAll('.line-content');
//       handleScrollLrc();
//     });
//   };
//   var initLrc = function initLrc(lines, oLines) {
//     isSetedLines = true;
//     if (oLines) {
//       if (lines.length) {
//         setLyric(lines);
//       } else {
//         if (cancelScrollFn) {
//           cancelScrollFn();
//           cancelScrollFn = null;
//         }
//         cancelScrollFn = scrollTo(dom_lyric.value, 0, 300, function () {
//           if (lyric.lines !== lines) return;
//           setLyric(lines);
//         }, 50);
//       }
//     } else {
//       setLyric(lines);
//     }
//   };
//   var delayScrollTimeout;
//   var scrollLine = function scrollLine(line, oldLine) {
//     if (line < 0) return;
//     if (line == 0 && isSetedLines) return isSetedLines = false;
//     isSetedLines && (isSetedLines = false);
//     if (oldLine == null || line - oldLine != 1) return handleScrollLrc();
//     delayScrollTimeout = setTimeout(function () {
//       delayScrollTimeout = null;
//       handleScrollLrc(600);
//     }, 600);
//   };
//   watch(function () {
//     return lyric.lines;
//   }, initLrc);
//   watch(function () {
//     return lyric.line;
//   }, scrollLine);
//   onMounted(function () {
//     document.addEventListener('mousemove', handleMouseMsMove);
//     document.addEventListener('mouseup', handleMouseMsUp);
//     document.addEventListener('touchmove', handleTouchMove);
//     document.addEventListener('touchend', handleMouseMsUp);
//     initLrc(lyric.lines, null);
//     nextTick(function () {
//       scrollLine(lyric.line);
//     });
//   });
//   onBeforeUnmount(function () {
//     document.removeEventListener('mousemove', handleMouseMsMove);
//     document.removeEventListener('mouseup', handleMouseMsUp);
//     document.removeEventListener('touchmove', handleTouchMove);
//     document.removeEventListener('touchend', handleMouseMsUp);
//   });
//   return {
//     dom_lyric: dom_lyric,
//     dom_lyric_text: dom_lyric_text,
//     dom_skip_line: dom_skip_line,
//     isStopScroll: isStopScroll,
//     isMsDown: isMsDown,
//     timeStr: timeStr,
//     handleLyricMouseDown: handleLyricMouseDown,
//     handleLyricTouchStart: handleLyricTouchStart,
//     handleWheel: handleWheel,
//     handleSkipPlay: handleSkipPlay,
//     handleSkipMouseEnter: handleSkipMouseEnter,
//     handleSkipMouseLeave: handleSkipMouseLeave,
//     handleScrollLrc: handleScrollLrc
//   };
// };
// exports["default"] = _default;