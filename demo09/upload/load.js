var http = require('http');
var formidable = require("formidable");
var fs = require('fs');
var path = require('path');

http.createServer(function(req,res){
    if(req.method.toLowerCase()==="post"){
        // 创建对象
        var form = new formidable.IncomingForm();
        // 设置文件上传存放的指定的地址
        form.uploadDir = './uploadImg';
        // 解析nodejs中req请求包含的form表单中的数据
        form.parse(req,function(err,fields,files){
            // 对图片进行重新命名
            if(err){
                throw err;
            }
            // __全局变量，可以获取当前文件所在的路径
            console.log(__dirname);
            var oldPath = __dirname + "/" + files.pic.path
            // 一元加
            var time = +new Date();
            var random = parseInt(Math.random()*10000);
            var extName = path.extname(files.pic.name)
            var newPath = __dirname + "/uploadImg" +time+random+extName;
            fs.rename(oldPath,newPath,function(err){
                if(err){
                    throw Error("改名失败")
                }
                res.end("success")
            })
        });
    }else{
        console.log("err")
    }
}).listen(3000,"127.0.0.1");
