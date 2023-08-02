import kw from '../../renderer/utils/musicSdk/kw/index';
import tx from '../../renderer/utils/musicSdk/tx/index';
import kg from '../../renderer/utils/musicSdk/kg/index';
import wy from '../../renderer/utils/musicSdk/wy/index';
import express from 'express';

class HomeController {
  static index(req, res) {
    // 渲染index.ejs模板，并传递一个变量给模板
    const { mid, type } = req.query;
    console.log(tx.musicSearch);
    res.render('index', { type, mid });
  }
}

export default HomeController;
