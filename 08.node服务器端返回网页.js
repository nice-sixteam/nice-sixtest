const http = require('http');
const fs = require('fs');
const path = require('path')

const filepath = path.resolve(__dirname, './liuwer/index.html');
const rs = fs.createReadStream(filepath);

//创建一个服务
const server = http.createServer((request, response) => {
        //在返回相应之前，需要设置响应头中的数据格式
        response.setHeader("Content-Type", "text/html;charset=utf-8")
            //返回相应
        rs.pipe(response)
    })
    //启动服务 使用listen方法，三个参数：端口号，主机地址/域名地址，回调函数
    //本地的主机地址：localhost\127.0.0.1 或者是局域网地址 或者是服务器地址
const port = 3000;
const host = '192.168.20.36';
server.listen(port, host, (err) => {
    if (err) {
        console.log("服务器启动失败：" + err);
        return;
    }
    console.log(`服务器启动成功:请访问 http://${host}:${port}`)
})