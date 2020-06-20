var mkdirp = require('mkdirp');

mkdirp('./aaa/bbb/xxx',function (err){
    if(err){
        console.log(err)
        return;
    }
})