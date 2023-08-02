import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// 设置模板引擎为EJS，并指定模板文件的位置为./MVC/views目录
app.set('views', path.join(__dirname, 'MVC', 'views'));
app.set('view engine', 'ejs');

// 引入HomeController
import HomeController from './MVC/controllers/HomeController';

// 设置路由，当访问根目录时，交给HomeController的index方法处理
app.get('/', HomeController.index);

// 启动Web服务器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
