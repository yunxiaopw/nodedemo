var http = require("http");

var server = http.createServer(function(req,res){
    res.end("success");
})

server.listen(3000,"localhost");