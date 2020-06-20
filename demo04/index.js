const fs = require('fs');

// 1.fs.stat 检测是文件还是目录

// fs.stat('./html',(err,data)=>{
//     if(err){
//         console.log(err)
//         return;
//     }

//     console.log(`是文件${data.isFile()}`);
//     console.log(`是目录${data.isDirectory()}`);
// })
// 输出
// 是文件false
// 是目录true

// 2.fs.mkdir 创建目录
/**
 * path      创建的目录路径
 * node      目录权限（读写权限）默认777
 * callback  回调，传递异常参数err
 */
// fs.mkdir('./css',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('创建成功')
// })

// 3.fs.writeFile  创建写入文件
/**
 * filename          String          文件名称
 * data          String | Buffer      将要写入的内容，可以使字符串或 buffer数据
 * options        (Object)              option数组对象，包含：
 *  encoding      string            可选值，默认为utf8,当data是buffer时，该值应该为ignore
 *  mode           number           文件读写权限，默认值 438
 *  flag            string          默认值'w'
 * callback         function        回调，传递一个异常err
*/
// fs.writeFile('./html/index.html','你好nodejs',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('创建写入文件成功')
// })

// 4.fs.appendFile  追加文件

// fs.appendFile('./css/base.css','h2{color:blue}\n',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('appendFile写入文件成功')
// })

// 5.fs.readFile 读取文件
// fs.readFile('./html/index.html',(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)   //这是buffer类型的数据

//     console.log(data.toString()) //转传承String类型
// })

// 6.fs.readdir 读取目录

// fs.readdir('./html',(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

//  7.fs.rename 重命名    1、表示重命名   2、移动文件
// fs.rename('./css/base.css','./css/index.css',(err)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log('重命名成功')
// })

// //  7.fs.rename 重命名    1、表示重命名   2、移动文件
// fs.rename('./css/index.css','./html/index.css',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('移动成功')
// })

// //8.fs.rmdir   删除目录
// fs.rmdir('./aaaa',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('删除成功')
// })

// // fs.unlink 删除文件
// fs.unlink('./aaaa/index.html',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('删除成功')
// })

