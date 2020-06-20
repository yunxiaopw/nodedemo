// function getData(callback){
//     setTimeout(()=>{
//         const name = '张三'
//         callback(name) 
//     },1000)
// }

// getData((aaa)=>{
//     console.log(aaa)
// })

//  ES6 处理方法
// promise处理一步函数  resolve 成功的回调函数 reject 失败的回调函数

// const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const name = '张三'
//         resolve(name) 
//     },1000)
// })

// p.then((data)=>{
//     console.log(data)
// })

async function test(){
    return '你好nodejs';
}

// 如果一个方法定义为async 他返回的是一个Promise
async function main(){
    var data = await test();
    console.log(data)
}
main()