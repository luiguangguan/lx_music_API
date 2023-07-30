"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.weapi = exports.linuxapi = exports.eapiDecrypt = exports.eapi = void 0;
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj);
}
// https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/util/crypto.js
var _require = require('crypto'), createCipheriv = _require.createCipheriv, createDecipheriv = _require.createDecipheriv, publicEncrypt = _require.publicEncrypt, randomBytes = _require.randomBytes, createHash = _require.createHash, constants = _require.constants;
var iv = Buffer.from('0102030405060708');
var presetKey = Buffer.from('0CoJUm6Qyw8W8jud');
var linuxapiKey = Buffer.from('rFgB&h#%2?^eDg:Q');
var base62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var publicKey = '-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDgtQn2JZ34ZC28NWYpAUd98iZ37BUrX/aKzmFbt7clFSs6sXqHauqKWqdtLkF2KexO40H1YTX8z2lSgBBOAxLsvaklV8k4cBFK9snQXE9/DDaFt6Rr7iVZMldczhC0JNgTz+SHXT6CBHuX3e9SdB1Ua44oncaTWz7OBGLbCiK45wIDAQAB\n-----END PUBLIC KEY-----';
var eapiKey = 'e82ckenh8dichen8';
var aesEncrypt = function aesEncrypt(buffer, mode, key, iv) {
    var cipher = createCipheriv(mode, key, iv);
    return Buffer.concat([cipher.update(buffer), cipher["final"]()]);
};
var aesDecrypt = function aesDecrypt(cipherBuffer, mode, key, iv) {
    var decipher = createDecipheriv(mode, key, iv);
    return Buffer.concat([decipher.update(cipherBuffer), decipher["final"]()]);
};
var rsaEncrypt = function rsaEncrypt(buffer, key) {
    buffer = Buffer.concat([Buffer.alloc(128 - buffer.length), buffer]);
    return publicEncrypt({
        key: key,
        padding: constants.RSA_NO_PADDING
    }, buffer);
};
var weapi = function weapi(object) {
    var text = JSON.stringify(object);
    var secretKey = randomBytes(16).map(function (n) {
        return base62.charAt(n % 62).charCodeAt();
    });
    return {
        params: aesEncrypt(Buffer.from(aesEncrypt(Buffer.from(text), 'aes-128-cbc', presetKey, iv).toString('base64')), 'aes-128-cbc', secretKey, iv).toString('base64'),
        encSecKey: rsaEncrypt(secretKey.reverse(), publicKey).toString('hex')
    };
};
exports.weapi = weapi;
var linuxapi = function linuxapi(object) {
    var text = JSON.stringify(object);
    return {
        eparams: aesEncrypt(Buffer.from(text), 'aes-128-ecb', linuxapiKey, '').toString('hex').toUpperCase()
    };
};
exports.linuxapi = linuxapi;
var eapi = function eapi(url, object) {
    var text = _typeof(object) === 'object' ? JSON.stringify(object) : object;
    var message = "nobody".concat(url, "use").concat(text, "md5forencrypt");
    var digest = createHash('md5').update(message).digest('hex');
    var data = "".concat(url, "-36cd479b6b5-").concat(text, "-36cd479b6b5-").concat(digest);
    return {
        params: aesEncrypt(Buffer.from(data), 'aes-128-ecb', eapiKey, '').toString('hex').toUpperCase()
    };
};
exports.eapi = eapi;
var eapiDecrypt = function eapiDecrypt(cipherBuffer) {
    return aesDecrypt(cipherBuffer, 'aes-128-ecb', eapiKey, '').toString();
};
exports.eapiDecrypt = eapiDecrypt;
