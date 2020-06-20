var http = require('http');

http.createServer(function (request, response) {
    // 对获取的字符串进行小写处理
    if (request.method.toLowerCase() == 'post'){
        // nodejs处理post请求会把请求拆分成一小段一小段的二进制的数据
        // 定义一个变量接受所有的二进制数据
        var allData = "";
        request.on("data",function(chunk){
            // 每当有新的数据都需要用allData来接收
            allData += chunk;
        })
        // 全部数据传输完毕
        request.on("end",function(){
            var dataString = allData.toString();
            response.end(dataString);
        })
    }
}).listen(3000);

