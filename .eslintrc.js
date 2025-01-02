module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": "latest", 			// 支持es2023
    "sourceType": "module"	// 使用es6模块化
  },
  "rules": {  		// eslint检查的规则  0 忽略 1 警告 2 错误
    "no-console": 0,
    "eqeqeq": 1,	// 用 == 而不用 === 就报错
    "no-alert": 1 // 不能使用alert
  }
}