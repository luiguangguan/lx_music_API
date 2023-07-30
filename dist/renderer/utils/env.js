"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.debugRequest = exports.debugDownload = exports.debug = void 0;
var isDev = process.env.NODE_ENV === 'development';
var debug = isDev && true;
exports.debug = debug;
var debugRequest = isDev && false;
exports.debugRequest = debugRequest;
var debugDownload = isDev && false;
exports.debugDownload = debugDownload;
