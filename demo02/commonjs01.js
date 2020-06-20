var http = require('http');

// http://www.itying.com/api/plist

function formatApi(api) {
    return "httpL://www.itying.com/" + api;
}

http.createServer(function (req, res) {
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})//解决乱码
    res.write("<head> <meta charset='utf-8'> </head>")
    res.write('你好 nodejs<br/>');
    var api = formatApi('api/plist')
    res.write(api);
    res.end();
}).listen(3000);
