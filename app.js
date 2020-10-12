const http = require('http'); //用于创建网站服务器
const url = require('url'); //用于处理url地址
const app = http.createServer(); //网站服务器对象

app.on('request', (req, res) => { //当客户端有请求来的时候，
    // res.end('<h2>hello user</h2>') 做出响应

    //req.headers获取请求报文信息
    // console.log(req.headers['accept']);

    // req.url获取请求地址 console.log(req.url);
    //console.log(url.parse(req.url, true).query); //引入url模块，使用parse方法分割url地址,第二个参数决定返回的对象
    let { query, pathname } = url.parse(req.url, true); //对象解构赋值，对象会自己找到自己一一对应的
    console.log(query.name);
    console.log(query.age);

    // console.log(params.age);



    res.writeHead(200, {
        // 'content-type': 'text/plain'//返回的是纯文本
        'content-type': 'text/html;charset=utf-8' //返回的是html文本内容,返回中文时候后面要加上万国码
    });


    // req.url获取请求地址;
    if (pathname == '/index' || pathname == '/') {
        res.end('<h2>欢迎来到首页！</h2>')
    } else if (pathname == '/list') {
        res.end('welcome to listpage')
    } else {
        res.end('<h2>404 not fond</h2>');
    }

    // req.method 获得请求方式    console.log(req.method);
    if (req.method == 'POST') {
        res.end('post')
    } else if (req.method == 'GET') {
        res.end('get')

    }

});

//服务器创建好了，一定要监听端口
app.listen(3000);
console.log('网站服务器启动成功');