const baseConfig = require('./webpack.base.config');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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

    // 打包分析
    new bundleAnalyzerPlugin()
  ],

  optimization: {
    minimizer: [
      `...`, // 默认使用TerserPlugin压缩JS
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          filename: "js/vendors.[hash].js",
          chunks: 'all',
          minChunks: 1,
        },
        common: {
          name: 'common.js',
          chunks: 'all',
          minChunks: 2,
          minSize: 0,
        }
      }
    }
  }
})