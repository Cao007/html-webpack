const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/app.js"),

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[hash:12].js",
    clean: true, // 每次打包会清空原来的输出目录
  },

  module: {
    rules: [
      // html
      {
        test: /\.html$/i,
        use: ["html-loader"],
        exclude: path.resolve(__dirname, "../public/index.html"), // 排除index.html
      },

      // css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      // less
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },

      // Babel语法转换
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      // 图片
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 小于20kb的图片会被base64处理
          },
        },
        generator: {
          filename: "static/images/[hash:8][ext][query]",
        },
      },

      // 字体
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: "static/fonts/[hash:8][ext][query]",
        },
      },

      // 其他资源
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[hash:8][ext][query]",
        },
      },
    ],
  },

  plugins: [
    // html模版
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      filename: "index.html",
      inject: "body",
      title: "webpack5",
      hash: true, // 防止缓存
      minify: {
        removeAttributeQuotes: true, // 移除属性空格
        collapseWhitespace: true, // 移除空格
        removeComments: true, // 移除注释
      },
    }),

    // ESlint代码规范检查
    new ESLintPlugin({
      context: path.resolve(__dirname, "../src"), // 指定检查的目录
      exclude: "node_modules/**",
    }),
  ],
};
