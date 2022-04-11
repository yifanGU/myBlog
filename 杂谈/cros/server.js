const express = require('express');
const app = express();
app.get('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('HELLO AJAX -2')
})

app.get('/home',(request,response)=>{
    response.sendFile(__dirname+'/index.html');
});
app.get('/data',(request,response)=>{
    response.send('用户数据')
})

app.listen(9000,()=>{
    console.log("服务已经启动!");
});

app.all('/jsonp-server',(request,response)=>{
    const data = {
        name:'尚硅谷'
    };
    let str = JSON.stringify(data)
    response.send(`console.log(${str})`)
})