const fs = require('fs')

fs.stat('./34_stat.js', (err, stats) => {
  if (err) throw err

  console.log(stats.isFile())
  console.log(stats.isDirectory())

  console.log(stats)
})
// 判断文件是否存在
fs.stat('./34_stat.jss', (err, stats) => {
  if (err) {
    console.log('文件不存在')
    return
  }

  console.log(stats.isFile())
  console.log(stats.isDirectory())

  console.log(stats)
})