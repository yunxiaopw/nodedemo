var http = require("http"),
    url = require("url"),
    fs = require("fs"),
    path = require("path");

http.createServer(function(req,res){
    // 忽略小图标的请求
    if(req.url == "favicon.ico"){
        return;
    }
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    if(pathname=='/'){
        pathname = "/index.html"
    }

    fs.readFile("./static"+pathname,function(err,data){
        if(err){
            // 显示404页面
            fs.readFile("./static/404.html",function(err,data){
                res.writeHead(404,{"Content-Type":"text/html;charset=utf-8"});
                res.end(data);
            })
            return;
        }else{
            // 获取扩展名
            var extname = path.extname(pathname)
            console.log(extname)
            var mime = getMime(extname);
            console.log(mime);
            res.writeHead(200,{"Content-Type":mime});
            res.end(data)
        }       
    })
    // res.end();
}).listen(3000,"localhost")

// 通过不同的扩展名,让Content-type对应设置mime类型
function getMime(extname){
    switch(extname){
        case './html':
            return "text/html;charset=utf-8";
        case '.jpg':
            return "image/jpg";
        case '.css':
            return "text/css";
            break;
    }
}