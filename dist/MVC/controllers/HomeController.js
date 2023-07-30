"use strict";
const kw = require('../../renderer/utils/musicSdk/kw/index');
;
const tx = require('../../renderer/utils/musicSdk/tx/index');
;
const kg = require('../../renderer/utils/musicSdk/kg/index');
;
const wy = require('../../renderer/utils/musicSdk/wy/index');
;
const express = require('express');
;
// const music = require('../utils/musicSdk');
class HomeController {
    static index(req, res) {
        // 渲染index.ejs模板，并传递一个变量给模板
        const { mid, type } = req.query;
        console.log(tx.musicSearch);
        res.render('index', { type, mid });
    }
}
module.exports = HomeController;
