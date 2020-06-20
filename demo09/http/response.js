var http = require("http");

var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    res.write("<head><meta charset:utf-8></head>")
    res.write("<h1>周攀蔚</h2>")
    res.end();
})

server.listen(3000,"localhost")