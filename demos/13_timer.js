// 下一个队列的首部
setImmediate(() => {
  console.log('setImmediate');
})

setTimeout(() => {
  console.log('setTimeout')
}, 0)
// 当前队列的队尾
process.nextTick(() => {
  console.log('nextTick1')
  process.nextTick(() => {
    console.log('nextTick2')
  })
})// 下一个队列的首部
setImmediate(() => {
  console.log('setImmediate');
})

setTimeout(() => {
  console.log('setTimeout')
}, 0)
// 当前队列的队尾
process.nextTick(() => {
  console.log('nextTick1')
  process.nextTick(() => {
    console.log('nextTick2')
  })
})