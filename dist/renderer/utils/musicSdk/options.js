"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timeout = exports.headers = exports.bHh = void 0;
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj);
}
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
}
else {
    obj[key] = value;
} return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null)
    return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
        return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
} return (hint === "string" ? String : Number)(input); }
var bHh = '624868746c';
exports.bHh = bHh;
var headers = _defineProperty({
    'User-Agent': 'lx-music request'
}, bHh, [bHh]);
exports.headers = headers;
var timeout = 15000;
exports.timeout = timeout;
