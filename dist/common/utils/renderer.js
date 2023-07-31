"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTitle = exports.scrollXRTo = exports.scrollXTo = exports.scrollTo = void 0;
const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1)
        return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
};
const noop = () => { };
const handleScrollY = (element, to, duration = 300, fn = noop) => {
    if (!element) {
        fn();
        return noop;
    }
    // @ts-expect-error
    const start = element.scrollTop ?? element.scrollY ?? 0;
    let cancel = false;
    if (to > start) {
        let maxScrollTop = element.scrollHeight - element.clientHeight;
        if (to > maxScrollTop)
            to = maxScrollTop;
    }
    else if (to < start) {
        if (to < 0)
            to = 0;
    }
    else {
        fn();
        return noop;
    }
    const change = to - start;
    const increment = 10;
    if (!change) {
        fn();
        return noop;
    }
    let currentTime = 0;
    let val;
    const animateScroll = () => {
        currentTime += increment;
        val = Math.trunc(easeInOutQuad(currentTime, start, change, duration));
        if (element.scrollTo) {
            element.scrollTo(0, val);
        }
        else {
            element.scrollTop = val;
        }
        if (currentTime < duration) {
            if (cancel) {
                fn();
                return;
            }
            window.setTimeout(animateScroll, increment);
        }
        else {
            fn();
        }
    };
    animateScroll();
    return () => {
        cancel = true;
    };
};
/**
  * 设置滚动条位置
  * @param {*} element 要设置滚动的容器 dom
  * @param {*} to 滚动的目标位置
  * @param {*} duration 滚动完成时间 ms
  * @param {*} fn 滚动完成后的回调
  * @param {*} delay 延迟执行时间
  */
const scrollTo = (element, to, duration = 300, fn = () => { }, delay = 0) => {
    let cancelFn;
    let timeout;
    if (delay) {
        let scrollCancelFn;
        cancelFn = () => {
            timeout == null ? scrollCancelFn?.() : clearTimeout(timeout);
        };
        timeout = window.setTimeout(() => {
            timeout = null;
            scrollCancelFn = handleScrollY(element, to, duration, fn);
        }, delay);
    }
    else {
        cancelFn = handleScrollY(element, to, duration, fn) ?? noop;
    }
    return cancelFn;
};
exports.scrollTo = scrollTo;
const handleScrollX = (element, to, duration = 300, fn = () => { }) => {
    if (!element) {
        fn();
        return noop;
    }
    // @ts-expect-error
    const start = element.scrollLeft || element.scrollX || 0;
    let cancel = false;
    if (to > start) {
        let maxScrollLeft = element.scrollWidth - element.clientWidth;
        if (to > maxScrollLeft)
            to = maxScrollLeft;
    }
    else if (to < start) {
        if (to < 0)
            to = 0;
    }
    else {
        fn();
        return noop;
    }
    const change = to - start;
    const increment = 10;
    if (!change) {
        fn();
        return noop;
    }
    let currentTime = 0;
    let val;
    const animateScroll = () => {
        currentTime += increment;
        val = Math.trunc(easeInOutQuad(currentTime, start, change, duration));
        if (element.scrollTo) {
            element.scrollTo(val, 0);
        }
        else {
            element.scrollLeft = val;
        }
        if (currentTime < duration) {
            if (cancel) {
                fn();
                return;
            }
            window.setTimeout(animateScroll, increment);
        }
        else {
            fn();
        }
    };
    animateScroll();
    return () => {
        cancel = true;
    };
};
/**
  * 设置滚动条位置
  * @param {*} element 要设置滚动的容器 dom
  * @param {*} to 滚动的目标位置
  * @param {*} duration 滚动完成时间 ms
  * @param {*} fn 滚动完成后的回调
  * @param {*} delay 延迟执行时间
  */
const scrollXTo = (element, to, duration = 300, fn = () => { }, delay = 0) => {
    let cancelFn;
    let timeout;
    if (delay) {
        let scrollCancelFn;
        cancelFn = () => {
            timeout == null ? scrollCancelFn?.() : clearTimeout(timeout);
        };
        timeout = window.setTimeout(() => {
            timeout = null;
            scrollCancelFn = handleScrollX(element, to, duration, fn);
        }, delay);
    }
    else {
        cancelFn = handleScrollX(element, to, duration, fn);
    }
    return cancelFn;
};
exports.scrollXTo = scrollXTo;
const handleScrollXR = (element, to, duration = 300, fn = () => { }) => {
    if (!element) {
        fn();
        return noop;
    }
    // @ts-expect-error
    const start = element.scrollLeft || element.scrollX || 0;
    let cancel = false;
    if (to < start) {
        let maxScrollLeft = -element.scrollWidth + element.clientWidth;
        if (to < maxScrollLeft)
            to = maxScrollLeft;
    }
    else if (to > start) {
        if (to > 0)
            to = 0;
    }
    else {
        fn();
        return noop;
    }
    const change = to - start;
    const increment = 10;
    if (!change) {
        fn();
        return noop;
    }
    let currentTime = 0;
    let val;
    const animateScroll = () => {
        currentTime += increment;
        val = Math.trunc(easeInOutQuad(currentTime, start, change, duration));
        if (element.scrollTo) {
            element.scrollTo(val, 0);
        }
        else {
            element.scrollLeft = val;
        }
        if (currentTime < duration) {
            if (cancel) {
                fn();
                return;
            }
            window.setTimeout(animateScroll, increment);
        }
        else {
            fn();
        }
    };
    animateScroll();
    return () => {
        cancel = true;
    };
};
/**
  * 设置滚动条位置 （writing-mode: vertical-rl 专用）
  * @param element 要设置滚动的容器 dom
  * @param to 滚动的目标位置
  * @param duration 滚动完成时间 ms
  * @param fn 滚动完成后的回调
  * @param delay 延迟执行时间
  */
const scrollXRTo = (element, to, duration = 300, fn = () => { }, delay = 0) => {
    let cancelFn;
    let timeout;
    if (delay) {
        let scrollCancelFn;
        cancelFn = () => {
            timeout == null ? scrollCancelFn?.() : clearTimeout(timeout);
        };
        timeout = window.setTimeout(() => {
            timeout = null;
            scrollCancelFn = handleScrollXR(element, to, duration, fn);
        }, delay);
    }
    else {
        cancelFn = handleScrollXR(element, to, duration, fn);
    }
    return cancelFn;
};
exports.scrollXRTo = scrollXRTo;
/**
  * 设置标题
  */
let dom_title = document.getElementsByTagName('title')[0];
const setTitle = (title) => {
    title ||= '洛雪音乐助手';
    dom_title.innerText = title;
};
exports.setTitle = setTitle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL3V0aWxzL3JlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFVLEVBQUU7SUFDM0UsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDVixJQUFJLENBQUMsR0FBRyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNyQyxDQUFDLEVBQUUsQ0FBQTtJQUNILE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDekMsQ0FBQyxDQUFBO0FBR0QsTUFBTSxJQUFJLEdBQVMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFBO0FBRTNCLE1BQU0sYUFBYSxHQUFHLENBQUMsT0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBUSxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFRLEVBQUU7SUFDMUYsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLEVBQUUsRUFBRSxDQUFBO1FBQ0osT0FBTyxJQUFJLENBQUE7S0FDWjtJQUNELG1CQUFtQjtJQUNuQixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFBO0lBQ3ZELElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUNsQixJQUFJLEVBQUUsR0FBRyxLQUFLLEVBQUU7UUFDZCxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUE7UUFDOUQs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