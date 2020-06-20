const url = require('url');

var api = 'http://www.baidu.com?name=zpw&age=20';

var getValue = url.parse(api,true).query


console.log(getValue);

console.log(`姓名：${getValue.name}--年龄：${getValue.age}`)