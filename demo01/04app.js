const http = require("http");
const url = require('url');

http.createServer((req,res)=>{
    console.log(req.url)// 获取url
  
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})//解决乱码
  
    res.write("<head> <meta charset='utf-8'> </head>") //解决乱码
  
    console.log(req.url)
    
    if(req.url!='/favicon.ico'){
        var userInfo = url.parse(req.url,true).query;
        console.log(`姓名：${userInfo.name}--年龄：${userInfo.age}`)
    }

    res.end(); //结束响应
}).listen(3000);