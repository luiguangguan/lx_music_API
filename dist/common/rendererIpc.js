"use strict";
const { ipcRenderer } = require('electron');
function rendererSend(name) {
    ipcRenderer.send(name);
}
function rendererSendSync(name, params) {
    ipcRenderer.sendSync(name, params);
}
async function rendererInvoke(name, params) {
    return await ipcRenderer.invoke(name, params);
}
function rendererOn(name, listener) {
    ipcRenderer.on(name, (event, params) => {
        listener({ event, params });
    });
}
function rendererOnce(name, listener) {
    ipcRenderer.once(name, (event, params) => {
        listener({ event, params });
    });
}
const rendererOff = (name, listener) => {
    ipcRenderer.removeListener(name, listener);
};
const rendererOffAll = (name) => {
    ipcRenderer.removeAllListeners(name);
};
module.exports = {
    rendererSend,
    rendererSendSync,
    rendererInvoke,
    rendererOn,
    rendererOnce,
    rendererOff,
    rendererOffAll,
};
