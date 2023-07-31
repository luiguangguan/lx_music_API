"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodePath = exports.clipboardReadText = exports.clipboardWriteText = exports.openUrl = exports.openDirInExplorer = void 0;
const electron_1 = require("electron");
/**
 * 在资源管理器中打开目录
 * @param {string} dir
 */
const openDirInExplorer = (dir) => {
    electron_1.shell.showItemInFolder(dir);
};
exports.openDirInExplorer = openDirInExplorer;
/**
 * 在浏览器打开URL
 * @param {*} url
 */
const openUrl = async (url) => {
    if (!/^https?:\/\//.test(url))
        return;
    await electron_1.shell.openExternal(url);
};
exports.openUrl = openUrl;
/**
 * 复制文本到剪贴板
 * @param str
 */
const clipboardWriteText = (str) => {
    electron_1.clipboard.writeText(str);
};
exports.clipboardWriteText = clipboardWriteText;
/**
 * 从剪贴板读取文本
 * @returns
 */
const clipboardReadText = () => {
    return electron_1.clipboard.readText();
};
exports.clipboardReadText = clipboardReadText;
const encodePath = (path) => {
    // https://github.com/lyswhut/lx-music-desktop/issues/963
    return path.replaceAll('%', '%25');
};
exports.encodePath = encodePath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL3V0aWxzL2VsZWN0cm9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUEyQztBQUczQzs7O0dBR0c7QUFDSSxNQUFNLGlCQUFpQixHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUU7SUFDL0MsZ0JBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUM3QixDQUFDLENBQUE7QUFGWSxRQUFBLGlCQUFpQixxQkFFN0I7QUFHRDs7O0dBR0c7QUFDSSxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUMsR0FBVyxFQUFFLEVBQUU7SUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQUUsT0FBTTtJQUNyQyxNQUFNLGdCQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQy9CLENBQUMsQ0FBQTtBQUhZLFFBQUEsT0FBTyxXQUduQjtBQUdEOzs7R0FHRztBQUNJLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtJQUNoRCxvQkFBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUMxQixDQUFDLENBQUE7QUFGWSxRQUFBLGtCQUFrQixzQkFFOUI7QUFFRDs7O0dBR0c7QUFDSSxNQUFNLGlCQUFpQixHQUFHLEdBQVcsRUFBRTtJQUM1QyxPQUFPLG9CQUFTLENBQUMsUUFBUSxFQUFFLENBQUE7QUFDN0IsQ0FBQyxDQUFBO0FBRlksUUFBQSxpQkFBaUIscUJBRTdCO0FBR00sTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUN6Qyx5REFBeUQ7SUFDekQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUNwQyxDQUFDLENBQUE7QUFIWSxRQUFBLFVBQVUsY0FHdEIifQ==