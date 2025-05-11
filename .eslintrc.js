module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["standard", "plugin:vue/strongly-recommended"],
  // vue代码规范，即vue相关的rules配置
  plugins: ["vue"],
  parserOptions: {
    ecmaVersion: "latest", // 支持最新es语法
    sourceType: "module", // 使用es6模块化
    ecmaFeatures: {
      jsx: true, // 支持jsx
    },
  },
  rules: {
    // eslint检查的规则  0 忽略 1 警告 2 错误
    "no-console": 0,
    eqeqeq: 1, // 用 == 而不用 === 就报错
    quotes: 0, // 引号类型
    semi: 0, // 分号
    "comma-dangle": 0, // 对象字面量项尾是否尾随逗号
  },
};
