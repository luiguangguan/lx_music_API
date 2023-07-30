import { shell, clipboard } from 'electron';
/**
 * 在资源管理器中打开目录
 * @param {string} dir
 */
export const openDirInExplorer = (dir) => {
    shell.showItemInFolder(dir);
};
/**
 * 在浏览器打开URL
 * @param {*} url
 */
export const openUrl = async (url) => {
    if (!/^https?:\/\//.test(url))
        return;
    await shell.openExternal(url);
};
/**
 * 复制文本到剪贴板
 * @param str
 */
export const clipboardWriteText = (str) => {
    clipboard.writeText(str);
};
/**
 * 从剪贴板读取文本
 * @returns
 */
export const clipboardReadText = () => {
    return clipboard.readText();
};
export const encodePath = (path) => {
    // https://github.com/lyswhut/lx-music-desktop/issues/963
    return path.replaceAll('%', '%25');
};