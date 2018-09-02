const fs = require('fs')
// 必须写回调函数，否则会出现警告
fs.rmdir('./test', err => {})