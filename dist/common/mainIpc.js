"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainSend = exports.mainHandleRemove = exports.mainHandleOnce = exports.mainHandle = exports.mainOffAll = exports.mainOff = exports.mainOnce = exports.mainOn = void 0;
const electron_1 = require("electron");
function mainOn(name, listener) {
    electron_1.ipcMain.on(name, (event, params) => {
        listener({ event, params });
    });
}
exports.mainOn = mainOn;
function mainOnce(name, listener) {
    electron_1.ipcMain.once(name, (event, params) => {
        listener({ event, params });
    });
}
exports.mainOnce = mainOnce;
const mainOff = (name, listener) => {
    electron_1.ipcMain.removeListener(name, listener);
};
exports.mainOff = mainOff;
const mainOffAll = (name) => {
    electron_1.ipcMain.removeAllListeners(name);
};
exports.mainOffAll = mainOffAll;
function mainHandle(name, listener) {
    electron_1.ipcMain.handle(name, async (event, params) => {
        return await listener({ event, params });
    });
}
exports.mainHandle = mainHandle;
function mainHandleOnce(name, listener) {
    electron_1.ipcMain.handleOnce(name, async (event, params) => {
        return await listener({ event, params });
    });
}
exports.mainHandleOnce = mainHandleOnce;
const mainHandleRemove = (name) => {
    electron_1.ipcMain.removeHandler(name);
};
exports.mainHandleRemove = mainHandleRemove;
function mainSend(window, name, params) {
    window.webContents.send(name, params);
}
exports.mainSend = mainSend;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbklwYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbWFpbklwYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBa0M7QUFJbEMsU0FBZ0IsTUFBTSxDQUFJLElBQVksRUFBRSxRQUEwQztJQUNoRixrQkFBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDakMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDN0IsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBSkQsd0JBSUM7QUFJRCxTQUFnQixRQUFRLENBQUksSUFBWSxFQUFFLFFBQTBDO0lBQ2xGLGtCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNuQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtJQUM3QixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFKRCw0QkFJQztBQUVNLE1BQU0sT0FBTyxHQUFHLENBQUMsSUFBWSxFQUFFLFFBQWtDLEVBQUUsRUFBRTtJQUMxRSxrQkFBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7QUFDeEMsQ0FBQyxDQUFBO0FBRlksUUFBQSxPQUFPLFdBRW5CO0FBRU0sTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUN6QyxrQkFBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2xDLENBQUMsQ0FBQTtBQUZZLFFBQUEsVUFBVSxjQUV0QjtBQU1ELFNBQWdCLFVBQVUsQ0FBTyxJQUFZLEVBQUUsUUFBd0Q7SUFDckcsa0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDMUMsT0FBTyxNQUFNLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO0lBQzFDLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUpELGdDQUlDO0FBTUQsU0FBZ0IsY0FBYyxDQUFPLElBQVksRUFBRSxRQUF3RDtJQUN6RyxrQkFBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUM5QyxPQUFPLE1BQU0sUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDMUMsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBSkQsd0NBSUM7QUFDTSxNQUFNLGdCQUFnQixHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7SUFDL0Msa0JBQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDN0IsQ0FBQyxDQUFBO0FBRlksUUFBQSxnQkFBZ0Isb0JBRTVCO0FBSUQsU0FBZ0IsUUFBUSxDQUFJLE1BQThCLEVBQUUsSUFBWSxFQUFFLE1BQVU7SUFDbEYsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0FBQ3ZDLENBQUM7QUFGRCw0QkFFQyJ9