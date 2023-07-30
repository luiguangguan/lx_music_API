import log from 'electron-log';
log.transports.file.level = 'info';
export const isLinux = process.platform == 'linux';
export const isWin = process.platform == 'win32';
export const isMac = process.platform == 'darwin';
export const isProd = process.env.NODE_ENV == 'production';
// https://stackoverflow.com/a/53387532
export function compareVer(currentVer, targetVer) {
    // treat non-numerical characters as lower version
    // replacing them with a negative number based on charcode of each character
    const fix = (s) => `.${s.toLowerCase().charCodeAt(0) - 2147483647}.`;
    const currentVerArr = ('' + currentVer).replace(/[^0-9.]/g, fix).split('.');
    const targetVerArr = ('' + targetVer).replace(/[^0-9.]/g, fix).split('.');
    let c = Math.max(currentVerArr.length, targetVerArr.length);
    for (let i = 0; i < c; i++) {
        // convert to integer the most efficient way
        currentVerArr[i] = ~~currentVerArr[i];
        targetVerArr[i] = ~~targetVerArr[i];
        if (currentVerArr[i] > targetVerArr[i])
            return 1;
        else if (currentVerArr[i] < targetVerArr[i])
            return -1;
    }
    return 0;
}
export { log, };
export * from './common';
