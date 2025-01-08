// 导入样式
import './css/index.less'

let num1 = 1;
const num2 = 1_2_3;
console.log('num1', num1);
console.log('num2', num2);

fetch('/front/home', {
  method: 'GET',
}).then(response => {
  console.log(response); // 检查 response 对象
  return response.json(); // 转换为 JSON
})
  .then(data => {
    console.log(data); // 输出数据
  })
  .catch(error => {
    console.error('Error:', error);
  });