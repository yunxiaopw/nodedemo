var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // nodejs处理跨域问题
    res.writeHead(200,{"Content-type":"text/plain;charset=utf-8",'Access-Control-Allow-Origin':"*"})
    var json = JSON.stringify({
        "age":12
    })
    response.end(json);
}).listen(3000, "localhost");
