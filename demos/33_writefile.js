const fs = require('fs')

// 写字符串
// fs.writeFile('./test', 'This is a test', {encoding: 'utf8'},
// err => {
//   if (err) throw err
//   console.log('done!')
// })
// 写buffer
const content = Buffer.from('this is a test.')
fs.writeFile('./test', content, 
err => {
  if (err) throw err
  console.log('done!')
})