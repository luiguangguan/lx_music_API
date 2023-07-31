"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.compareVer = exports.isProd = exports.isMac = exports.isWin = exports.isLinux = void 0;
const electron_log_1 = __importDefault(require("electron-log"));
exports.log = electron_log_1.default;
electron_log_1.default.transports.file.level = 'info';
exports.isLinux = process.platform == 'linux';
exports.isWin = process.platform == 'win32';
exports.isMac = process.platform == 'darwin';
exports.isProd = process.env.NODE_ENV == 'production';
// https://stackoverflow.com/a/53387532
function compareVer(currentVer, targetVer) {
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
exports.compareVer = compareVer;
__exportStar(require("./common"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL3V0aWxzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQThCO0FBK0I1QixjQS9CSyxzQkFBRyxDQStCTDtBQTdCTCxzQkFBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQTtBQUVyQixRQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQTtBQUNyQyxRQUFBLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQTtBQUNuQyxRQUFBLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQTtBQUNwQyxRQUFBLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxZQUFZLENBQUE7QUFHMUQsdUNBQXVDO0FBQ3ZDLFNBQWdCLFVBQVUsQ0FBQyxVQUFrQixFQUFFLFNBQWlCO0lBQzlELGtEQUFrRDtJQUNsRCw0RUFBNEU7SUFDNUUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQTtJQUU1RSxNQUFNLGFBQWEsR0FBMkIsQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbkcsTUFBTSxZQUFZLEdBQTJCLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2pHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDM0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQiw0Q0FBNEM7UUFDNUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDckMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkMsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFBO2FBQzNDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBO0tBQ3ZEO0lBQ0QsT0FBTyxDQUFDLENBQUE7QUFDVixDQUFDO0FBaEJELGdDQWdCQztBQU9ELDJDQUF3QiJ9