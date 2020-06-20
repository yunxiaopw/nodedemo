var http = require("http");
var url = require("url");
var server = http.createServer(function(req,res){
    if(req.url == '/favicon.ico'){
        return;
    }
// format 把一个复杂的url对象进行格式化操作，返回一个url字符串
    // var urlObj = {
    //     protocol:"http",
    //     host:"www.baidu.com",
    //     query:{
    //         name:"zhangsan",
    //         age:20
    //     },
    //     pathname:"sport",
    //     hash:"#one"
    // }
    // var obj = url.format(urlObj);
    // console.log(obj)
// 返回一个“from/to”的字符串，相当于对路径进行拼接
    var result = url.resolve("http://test.com/","sport")
    console.log(result)
    res.end();
})

server.listen(3000, "localhost");

