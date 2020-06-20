var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){
    // 设置响应头
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    // 第二个参数是true
    var userUrl = url.parse(req.url,true);
    if(userUrl.pathname == '/login'){
        res.end("登录名："+userUrl.query.username)
    }
    else if(userUrl.pathname == '/register'){
        res.end("注册名："+userUrl.query.username)
    }else{
        res.end("请求")
    }
    res.end();
})

server.listen(3000,"127.0.0.1")