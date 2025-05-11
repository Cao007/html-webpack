const baseConfig = require("./webpack.base.config");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
  mode: "production",

  devtool: "source-map", // 生成source-map文件

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },

  plugins: [
    // 提取css
    new MiniCssExtractPlugin({
      filename: "css/main.[hash].css",
    }),

    // 打包分析
    new BundleAnalyzerPlugin(),
  ],

  optimization: {
    minimizer: [
      `...`, // 默认使用TerserPlugin压缩JS
      new CssMinimizerPlugin(), // 使用css-minimizer-webpack-plugin压缩css
    ],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          filename: "js/vendors.[hash].js",
          chunks: "all",
          minChunks: 1,
        },
        common: {
          filename: "js/common.[hash].js",
          chunks: "all",
          minChunks: 2,
          minSize: 0,
        },
      },
    },
    runtimeChunk: {
      name: "runtime~main",
    },
  },
});
