
const fs =  require('fs');
const upload = './upload'

fs.stat(upload,(err,data)=>{
    if(err){
        mkdir(upload);
        return;
    }
    if(data.isDirectory()){
        console.log('upload目录存在')
    }else{
        // 首先删除文件，再去执行创建目录
        fs.unlink(upload,(err)=>{
            if(!err){
                mkdir(upload)
            }else{
                console.log("请检测传入的数据是否正确")
            }
        })
        mkdir(upload);
    }
})

function mkdir(dir){
    fs.mkdir(dir,err=>{
        if(err){
            console.log(err);
            return;
        }
    });
}