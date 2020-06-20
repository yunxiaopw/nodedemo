var http = require('http');

const tools = require('./module/tools');

console.log(tools)
// http://www.itying.com/api/plist



http.createServer(function (req, res) {
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})//解决乱码
    res.write("<head> <meta charset='utf-8'> </head>")
    res.write('你好 nodejs<br/>');
    var api = tools.formatApi('api/plist')
    res.write(api);
    res.end();
}).listen(3000);
