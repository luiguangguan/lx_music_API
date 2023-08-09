import kw from '../../renderer/utils/musicSdk/kw/index.js';
import tx from '../../renderer/utils/musicSdk/tx/index.js';
import kg from '../../renderer/utils/musicSdk/kg/index.js';
import wy from '../../renderer/utils/musicSdk/wy/index.js';
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

//(\s*import\s+.+from\s+)(['"])(.*/+.*)(['"])([;]*)
// $1$2$3\.js$4$5