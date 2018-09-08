/*
  argv
  argv0
  execArgv
  execPath
*/

const {argv, argv0, execArgv, execPath} = process;

argv.forEach(item => {
  console.log(item);
  // 希望读到第三个开始的参数
});

// argv第一个值的引用
console.log(argv0)

console.log(execArgv)

console.log(execPath)