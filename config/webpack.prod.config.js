const baseConfig = require('./webpack.base.config');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(baseConfig, {

  mode: 'production',

  devtool: 'source-map', // 生成source-map文件

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/main.[hash].css",
    }),
  ],

  optimization: {
    minimizer: [
      `...`, // 默认使用TerserPlugin压缩JS
      new CssMinimizerPlugin()
    ]
  }
})