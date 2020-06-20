var http = require("http");
var url = require("url");
var server = http.createServer(function(req,res){
    if(req.url == '/favicon.ico'){
        return;
    }
    console.log(req.url)
    
    var urlObj = url.parse(req.url);
    console.log(urlObj)
    console.log(urlObj.pathname)
    res.end();
})

server.listen(3000, "localhost");

