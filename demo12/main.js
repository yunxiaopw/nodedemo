console.log(__filename)

console.log(__dirname)

setTimeout(() => {
  console.log("coderPan")
}, 3000)

process.stdout.write('hello world\n')

// 通过参数读取
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);

// 平台信息
console.log(process.platform);