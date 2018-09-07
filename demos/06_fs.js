const fs = require('fs')
// 异步操作是没有返回结果的，result是空
const result = fs.readFile('./06_fs.js', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
})

console.log(result)