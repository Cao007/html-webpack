const baseConfig = require('./webpack.base.config.js');
const { merge } = require('webpack-merge');

module.exports = merge(baseConfig, {

  mode: 'development',

  devtool: 'cheap-module-source-map', // 生成source-map文件

  devServer: {
    host: 'localhost',
    port: 8080,
    compress: true, // 开启gzip压缩
    open: true, // 自动打开浏览器
    proxy: [
      {
        context: ['/front'], // 匹配以/front开头的请求
        target: 'https://api.superblog.top', // 代理的目标地址
        changeOrigin: true, // 是否改变请求源地址
        secure: false // 如果是https接口，需要配置这个参数
      }
    ]
  }
})