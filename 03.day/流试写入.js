const fs = require('fs');
const path = require('path');
//拼接路径
const filepath = path.resolve(__dirname, './01.txt')

//创建一个课写流
const ws = fs.createWriteStream(filepath);

//分批次写入
ws.write('今天的代码格外的烫手！');
ws.write('锄禾日当午');
ws.write('今天的代码依旧格外的烫手！');

//写完之后要关闭管道
// ws.close(); //关闭末尾，可能会丢失数据
ws.end(); //关闭开头

ws.on('open', () => {
    console.log('open啦');
})
ws.on('close', () => {
    console.log('close啦');
})