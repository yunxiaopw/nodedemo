// const fs = require('fs');

// fs.readFile('input.txt', (err, data) => {
//   if (err) {
//     {
//       return console.error('err')
//     }
//   }
//   console.log('异步读取' + data.toString())
// })

// const data = fs.readFileSync('input.txt');
// console.log('同步读取' + data.toString())

// console.log('执行完毕')

var fs = require("fs");

// 异步打开文件
// console.log("准备打开文件！");
// fs.open('input.txt', 'r+', function (err, fd) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("文件打开成功！");
// });

// 获取文件信息
// var fs = require('fs')

// fs.stat('input.txt', (err, stats) => {
//   console.log(stats)
//   console.log(stats.isFile())
//   console.log(stats.isSymbolicLink())
// })

var fs = require('fs')
var buf = new Buffer.alloc(1024)

console.log('准备打开文件')

fs.open('input.txt', 'r+', function (err, fd) {
  if (err) {
    return console.error(err)
  }
  console.log('文件打开成功')
  console.log('截取10字节内的文字内容，超出部分将被去除')

  // 截取文件
  fs.ftruncate(fd, 10, (err) => {
    if (err) {
      console.log(err)
    }
    console.log("文件截取成功。");
    console.log("读取相同的文件");
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
      console.log(fd)
      if (err) {
        console.log(err);
      }

      // 仅输出读取的字节
      if (bytes > 0) {
        console.log(buf.slice(0, bytes).toString());
      }

      // 关闭文件
      fs.close(fd, function (err) {
        if (err) {
          console.log(err);
        }
        console.log("文件关闭成功！");
      });
    });
  })
})