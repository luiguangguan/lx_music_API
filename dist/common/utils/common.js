// 非业务工具方法
/**
 * 获取两个数之间的随机整数，大于等于min，小于max
 * @param {*} min
 * @param {*} max
 */
export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const sizeFormate = (size) => {
    // https://gist.github.com/thomseddon/3511330
    if (!size)
        return '0 B';
    let units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let number = Math.floor(Math.log(size) / Math.log(1024));
    return `${(size / Math.pow(1024, Math.floor(number))).toFixed(2)} ${units[number]}`;
};
/**
 * 将字符串、时间戳等格式转成时间对象
 * @param date 时间
 * @returns 时间对象或空字符串
 */
export const toDateObj = (date) => {
    // console.log(date)
    if (!date)
        return '';
    switch (typeof date) {
        case 'string':
            if (!date.includes('T'))
                date = date.split('.')[0].replace(/-/g, '/');
        // eslint-disable-next-line no-fallthrough
        case 'number':
            date = new Date(date);
        // eslint-disable-next-line no-fallthrough
        case 'object':
            break;
        default: return '';
    }
    return date;
};
const numFix = (n) => n < 10 ? (`0${n}`) : n.toString();
/**
 * 时间格式化
 * @param _date 时间
 * @param format Y-M-D h:m:s Y年 M月 D日 h时 m分 s秒
 */
export const dateFormat = (_date, format = 'Y-M-D h:m:s') => {
    // console.log(date)
    const date = toDateObj(_date);
    if (!date)
        return '';
    return format
        .replace('Y', date.getFullYear().toString())
        .replace('M', numFix(date.getMonth() + 1))
        .replace('D', numFix(date.getDate()))
        .replace('h', numFix(date.getHours()))
        .replace('m', numFix(date.getMinutes()))
        .replace('s', numFix(date.getSeconds()));
};
export const formatPlayTime = (time) => {
    let m = Math.trunc(time / 60);
    let s = Math.trunc(time % 60);
    return m == 0 && s == 0 ? '--/--' : numFix(m) + ':' + numFix(s);
};
export const formatPlayTime2 = (time) => {
    let m = Math.trunc(time / 60);
    let s = Math.trunc(time % 60);
    return numFix(m) + ':' + numFix(s);
};
const encodeNames = {
    '&nbsp;': ' ',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': "'",
    '&#039;': "'",
};
export const decodeName = (str = '') => {
    return str?.replace(/(?:&amp;|&lt;|&gt;|&quot;|&apos;|&#039;|&nbsp;)/gm, (s) => encodeNames[s]) ?? '';
};
export const isUrl = (path) => /https?:\/\//.test(path);
// 解析URL参数为对象
export const parseUrlParams = (str) => {
    const params = {};
    if (typeof str !== 'string')
        return params;
    const paramsArr = str.split('&');
    for (const param of paramsArr) {
        let [key, value] = param.split('=');
        params[key] = value;
    }
    return params;
};
/**
 * 生成节流函数
 * @param fn 回调
 * @param delay 延迟
 * @returns
 */
export function throttle(fn, delay = 100) {
    let timer = null;
    let _args;
    return (...args) => {
        _args = args;
        if (timer)
            return;
        timer = setTimeout(() => {
            timer = null;
            void fn(..._args);
        }, delay);
    };
}
/**
 * 生成防抖函数
 * @param fn 回调
 * @param delay 延迟
 * @returns
 */
export function debounce(fn, delay = 100) {
    let timer = null;
    let _args;
    return (...args) => {
        _args = args;
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            void fn(..._args);
        }, delay);
    };
}
const fileNameRxp = /[\\/:*?#"<>|]/g;
export const filterFileName = (name) => name.replace(fileNameRxp, '');
// https://blog.csdn.net/xcxy2015/article/details/77164126#comments
/**
 *
 * @param a
 * @param b
 */
export const similar = (a, b) => {
    if (!a || !b)
        return 0;
    if (a.length > b.length) { // 保证 a <= b
        let t = b;
        b = a;
        a = t;
    }
    let al = a.length;
    let bl = b.length;
    let mp = []; // 一个表
    let i, j, ai, lt, tmp; // ai：字符串a的第i个字符。 lt：左上角的值。 tmp：暂存新的值。
    for (i = 0; i <= bl; i++)
        mp[i] = i;
    for (i = 1; i <= al; i++) {
        ai = a.charAt(i - 1);
        lt = mp[0];
        mp[0] = mp[0] + 1;
        for (j = 1; j <= bl; j++) {
            tmp = Math.min(mp[j] + 1, mp[j - 1] + 1, lt + (ai == b.charAt(j - 1) ? 0 : 1));
            lt = mp[j];
            mp[j] = tmp;
        }
    }
    return 1 - (mp[bl] / bl);
};
/**
 * 排序字符串
 * @param arr
 * @param data
 */
export const sortInsert = (arr, data) => {
    let key = data.num;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.trunc((left + right) / 2);
        if (key == arr[middle].num) {
            left = middle;
            break;
        }
        else if (key < arr[middle].num) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }
    while (left > 0) {
        if (arr[left - 1].num != key)
            break;
        left--;
    }
    arr.splice(left, 0, data);
};
export const encodePath = (path) => {
    return encodeURI(path.replaceAll('\\', '/'));
};
export const arrPush = (list, newList) => {
    for (let i = 0; i * 1000 < newList.length; i++) {
        list.push(...newList.slice(i * 1000, (i + 1) * 1000));
    }
    return list;
};
export const arrUnshift = (list, newList) => {
    for (let i = 0; i * 1000 < newList.length; i++) {
        list.splice(i * 1000, 0, ...newList.slice(i * 1000, (i + 1) * 1000));
    }
    return list;
};
export const arrPushByPosition = (list, newList, position) => {
    for (let i = 0; i * 1000 < newList.length; i++) {
        list.splice(position + i * 1000, 0, ...newList.slice(i * 1000, (i + 1) * 1000));
    }
    return list;
};
