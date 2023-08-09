const path = require('path');

module.exports = {
  entry: './src/app.ts', // 入口文件路径
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'dist') // 输出路径
  },
  resolve: {
    extensions: ['.ts', '.js'] // 解析的文件扩展名
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader', // 使用 ts-loader 处理 .ts 文件
        exclude: /node_modules/
      }
    ]
  }
};
