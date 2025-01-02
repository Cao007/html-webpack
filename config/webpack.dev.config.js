const baseConfig = require('./webpack.base.config.js');
const { merge } = require('webpack-merge');

module.exports = merge(baseConfig, {
  
  mode: 'development',

  devtool: 'cheap-module-source-map', // 生成source-map文件

  devServer: {
    host: 'localhost',
    port: 8080,
    compress: true, // 开启gzip压缩
    open: true // 自动打开浏览器
  }
})