import { ipcMain } from 'electron';
export function mainOn(name, listener) {
    ipcMain.on(name, (event, params) => {
        listener({ event, params });
    });
}
export function mainOnce(name, listener) {
    ipcMain.once(name, (event, params) => {
        listener({ event, params });
    });
}
export const mainOff = (name, listener) => {
    ipcMain.removeListener(name, listener);
};
export const mainOffAll = (name) => {
    ipcMain.removeAllListeners(name);
};
export function mainHandle(name, listener) {
    ipcMain.handle(name, async (event, params) => {
        return await listener({ event, params });
    });
}
export function mainHandleOnce(name, listener) {
    ipcMain.handleOnce(name, async (event, params) => {
        return await listener({ event, params });
    });
}
export const mainHandleRemove = (name) => {
    ipcMain.removeHandler(name);
};
export function mainSend(window, name, params) {
    window.webContents.send(name, params);
}
