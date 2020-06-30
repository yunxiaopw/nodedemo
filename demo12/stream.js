// var fs = require('fs')

// var data = ''

// var readerStream = fs.createReadStream('input.txt')

// readerStream.setEncoding('utf8')

// readerStream.on('data', function (chunk) {
//   data += chunk
// })

// readerStream.on('end', function () {
//   console.log(data)
// })

// readerStream.on('error', function (err) {
//   console.log(err.stack)
// })

// console.log('完毕')
// 链式流

var fs = require('fs')
var zlib = require('zlib')

// 压缩文件
// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'))

// console.log('文件压缩完成')

// 解压
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'))

console.log('文件解压完成')