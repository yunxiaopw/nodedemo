// 表示引入Http模块
var http = require('http');

// 创建web服务
http.createServer(function (request, response) {
    // 设置响应头
  response.writeHead(200, {'Content-Type': 'text/plain'});
//   表示给我们页面上输出一句话并且结束响应
  response.end('Hello World');
}).listen(8081);


console.log('Server running at http://127.0.0.1:8081/');