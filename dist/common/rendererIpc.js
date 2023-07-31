"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rendererOffAll = exports.rendererOff = exports.rendererOnce = exports.rendererOn = exports.rendererInvoke = exports.rendererSendSync = exports.rendererSend = void 0;
const electron_1 = require("electron");
function rendererSend(name, params) {
    electron_1.ipcRenderer.send(name, params);
}
exports.rendererSend = rendererSend;
function rendererSendSync(name, params) {
    electron_1.ipcRenderer.sendSync(name, params);
}
exports.rendererSendSync = rendererSendSync;
async function rendererInvoke(name, params) {
    return await electron_1.ipcRenderer.invoke(name, params);
}
exports.rendererInvoke = rendererInvoke;
function rendererOn(name, listener) {
    electron_1.ipcRenderer.on(name, (event, params) => {
        listener({ event, params });
    });
}
exports.rendererOn = rendererOn;
function rendererOnce(name, listener) {
    electron_1.ipcRenderer.once(name, (event, params) => {
        listener({ event, params });
    });
}
exports.rendererOnce = rendererOnce;
const rendererOff = (name, listener) => {
    electron_1.ipcRenderer.removeListener(name, listener);
};
exports.rendererOff = rendererOff;
const rendererOffAll = (name) => {
    electron_1.ipcRenderer.removeAllListeners(name);
};
exports.rendererOffAll = rendererOffAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXJJcGMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbW9uL3JlbmRlcmVySXBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFzQztBQUl0QyxTQUFnQixZQUFZLENBQUksSUFBWSxFQUFFLE1BQVU7SUFDdEQsc0JBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0FBQ2hDLENBQUM7QUFGRCxvQ0FFQztBQUlELFNBQWdCLGdCQUFnQixDQUFJLElBQVksRUFBRSxNQUFVO0lBQzFELHNCQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQTtBQUNwQyxDQUFDO0FBRkQsNENBRUM7QUFNTSxLQUFLLFVBQVUsY0FBYyxDQUFRLElBQVksRUFBRSxNQUFVO0lBQ2xFLE9BQU8sTUFBTSxzQkFBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7QUFDL0MsQ0FBQztBQUZELHdDQUVDO0FBSUQsU0FBZ0IsVUFBVSxDQUFJLElBQVksRUFBRSxRQUE4QztJQUN4RixzQkFBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDckMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDN0IsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBSkQsZ0NBSUM7QUFJRCxTQUFnQixZQUFZLENBQUksSUFBWSxFQUFFLFFBQThDO0lBQzFGLHNCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUN2QyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtJQUM3QixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFKRCxvQ0FJQztBQUVNLE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBWSxFQUFFLFFBQWlDLEVBQUUsRUFBRTtJQUM3RSxzQkFBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7QUFDNUMsQ0FBQyxDQUFBO0FBRlksUUFBQSxXQUFXLGVBRXZCO0FBRU0sTUFBTSxjQUFjLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUM3QyxzQkFBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3RDLENBQUMsQ0FBQTtBQUZZLFFBQUEsY0FBYyxrQkFFMUIifQ==