const http = require("http");


http.createServer((req,res)=>{
    console.log(req.url)// 获取url
  
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})//解决乱码
  
    res.write("<head> <meta charset='utf-8'> </head>") //解决乱码
  
    res.write("你好this is node js")
   
    res.end(); //结束响应
}).listen(3000);