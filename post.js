const http = require('http'); //用于创建网站服务器
const app = http.createServer(); //网站服务器对象
const querystring = require('querystring'); //处理请求参数的模块,把参数直接转换成对象
app.on('request', (req, res) => { //当客户端有请求来的时候，
    // post参数是通过事件方式接收的  data   end
    // data 当请求参数传递的时候发出data事件
    // end 当参数完成时发出end事件

    let postParams = '';
    req.on('data', params => {
        postParams += params
    })

    req.on('end', () => {
        console.log(querystring.parse(postParams));
    });

    res.end('ok');
});

//服务器创建好了，一定要监听端口
app.listen(3000);
console.log('网站服务器启动成功');