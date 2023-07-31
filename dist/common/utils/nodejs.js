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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveFile = exports.copyFile = exports.b64DecodeUnicode = exports.saveStrToFile = exports.readLxConfigFile = exports.saveLxConfigFile = exports.gunzipData = exports.gzipData = exports.toMD5 = exports.readFile = exports.removeFile = exports.createDir = exports.getFileStats = exports.checkPath = exports.dirname = exports.basename = exports.extname = exports.joinPath = void 0;
// import fs from 'fs'
// import crypto from 'crypto'
const zlib_1 = require("zlib");
const utils_1 = require("@common/utils");
const path_1 = __importDefault(require("path"));
const fs = __importStar(require("fs"));
const crypto = __importStar(require("crypto"));
const joinPath = (...paths) => path_1.default.join(...paths);
exports.joinPath = joinPath;
const extname = (p) => path_1.default.extname(p);
exports.extname = extname;
const basename = (p, ext) => path_1.default.basename(p, ext);
exports.basename = basename;
const dirname = (p) => path_1.default.dirname(p);
exports.dirname = dirname;
/**
 * 检查路径是否存在
 * @param {*} path 路径
 */
const checkPath = async (path) => {
    return await new Promise(resolve => {
        if (!path) {
            resolve(false);
            return;
        }
        fs.access(path, fs.constants.F_OK, err => {
            if (err) {
                resolve(false);
                return;
            }
            resolve(true);
        });
    });
};
exports.checkPath = checkPath;
const getFileStats = async (path) => {
    return await new Promise(resolve => {
        if (!path) {
            resolve(null);
            return;
        }
        fs.stat(path, (err, stats) => {
            if (err) {
                resolve(null);
                return;
            }
            resolve(stats);
        });
    });
};
exports.getFileStats = getFileStats;
/**
 * 检查路径并创建目录
 * @param path
 * @returns
 */
const createDir = async (path) => new Promise((resolve, reject) => {
    fs.access(path, fs.constants.F_OK | fs.constants.W_OK, err => {
        if (err) {
            if (err.code === 'ENOENT') {
                fs.mkdir(path, { recursive: true }, err => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve();
                });
                return;
            }
            reject(err);
            return;
        }
        resolve();
    });
});
exports.createDir = createDir;
const removeFile = async (path) => new Promise((resolve, reject) => {
    fs.access(path, fs.constants.F_OK, err => {
        if (err) {
            err.code == 'ENOENT' ? resolve() : reject(err);
            return;
        }
        fs.unlink(path, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
});
exports.removeFile = removeFile;
const readFile = async (path) => fs.promises.readFile(path);
exports.readFile = readFile;
/**
 * 创建 MD5 hash
 * @param {*} str
 */
const toMD5 = (str) => crypto.createHash('md5').update(str).digest('hex');
exports.toMD5 = toMD5;
const gzipData = async (str) => {
    return await new Promise((resolve, reject) => {
        (0, zlib_1.gzip)(str, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};
exports.gzipData = gzipData;
const gunzipData = async (buf) => {
    return await new Promise((resolve, reject) => {
        (0, zlib_1.gunzip)(buf, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result.toString());
        });
    });
};
exports.gunzipData = gunzipData;
/**
 * 保存lx配置文件
 * @param path 保存路径
 * @param data 数据
 */
const saveLxConfigFile = async (path, data) => {
    if (!path.endsWith('.lxmc'))
        path += '.lxmc';
    fs.writeFile(path, await (0, exports.gzipData)(JSON.stringify(data)), 'binary', err => {
        console.log(err);
    });
};
exports.saveLxConfigFile = saveLxConfigFile;
/**
 * 读取lx配置文件
 * @param path 文件路径
 * @returns 数据
 */
const readLxConfigFile = async (path) => {
    let isJSON = path.endsWith('.json');
    let data = await fs.promises.readFile(path, isJSON ? 'utf8' : 'binary');
    if (!data || isJSON)
        return data;
    data = await (0, exports.gunzipData)(Buffer.from(data, 'binary'));
    data = JSON.parse(data);
    // 修复v1.14.0出现的导出数据被序列化两次的问题
    if (typeof data != 'object') {
        try {
            data = JSON.parse(data);
        }
        catch (err) {
            return data;
        }
    }
    return data;
};
exports.readLxConfigFile = readLxConfigFile;
const saveStrToFile = async (path, str) => {
    await new Promise((resolve, reject) => {
        fs.writeFile(path, str, err => {
            if (err) {
                utils_1.log.error(err);
                reject(err);
                return;
            }
            resolve();
        });
    });
};
exports.saveStrToFile = saveStrToFile;
const b64DecodeUnicode = (str) => {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    // return decodeURIComponent(window.atob(str).split('').map(function(c) {
    //   return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    // }).join(''))
    return Buffer.from(str, 'base64').toString();
};
exports.b64DecodeUnicode = b64DecodeUnicode;
const copyFile = async (sourcePath, distPath) => {
    return fs.promises.copyFile(sourcePath, distPath);
};
exports.copyFile = copyFile;
const moveFile = async (sourcePath, distPath) => {
    return fs.promises.rename(sourcePath, distPath);
};
exports.moveFile = moveFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZWpzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi91dGlscy9ub2RlanMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQkFBc0I7QUFDdEIsOEJBQThCO0FBQzlCLCtCQUFtQztBQUNuQyx5Q0FBbUM7QUFDbkMsZ0RBQXVCO0FBQ3ZCLHVDQUF5QjtBQUN6QiwrQ0FBaUM7QUFHMUIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLEtBQWUsRUFBVSxFQUFFLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFBO0FBQTlELFFBQUEsUUFBUSxZQUFzRDtBQUVwRSxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQVMsRUFBVSxFQUFFLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFoRCxRQUFBLE9BQU8sV0FBeUM7QUFDdEQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFTLEVBQUUsR0FBWSxFQUFVLEVBQUUsQ0FBQyxjQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUFyRSxRQUFBLFFBQVEsWUFBNkQ7QUFDM0UsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFTLEVBQVUsRUFBRSxDQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFBaEQsUUFBQSxPQUFPLFdBQXlDO0FBRTdEOzs7R0FHRztBQUNJLE1BQU0sU0FBUyxHQUFHLEtBQUssRUFBQyxJQUFZLEVBQW9CLEVBQUU7SUFDL0QsT0FBTyxNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDZCxPQUFNO1NBQ1A7UUFDRCxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENB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