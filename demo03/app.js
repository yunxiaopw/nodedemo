const md5 = require('md5');
const sd=  require('silly-datetime');

console.log(md5("123456"))

console.log(new Date())

console.log(sd.format(new Date(),'YYYY-MM-DD HH:mm'))

// 指定版本安装 npm i md5@1.0.0