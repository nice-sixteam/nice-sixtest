const http = require('http');

//创建一个服务
//createServer的回调函数的形参分别是request和response，代表请求和响应
const server = http.createServer((request, response) => {
    //在返回相应之前，需要设置响应头的数据格式
    response.setHeader('content-Type', 'text/html;charset=utf-8')
        //返回相应
    response.end('<h1>今天的代码格外的烫手</h1>');
})

const prot = 3000;
const host = '192.168.20.36';
server.listen(prot, host, (err) => {
    if (err) {
        console.log('服务器启动失败:' + err);
        return;
    }
    console.log(`服务器启动成功：请反问http://${host}:${prot}`);
})