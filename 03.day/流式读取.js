const fs = require('fs');
const path = require('path');

const filepath = 'E: \\js高级\\day24-git\\video\\.mp4';

//创建一个可读流
const rs = fs.createReadStream(filepath);

//rs的data事件就是用来消费可读流 每次读取的事件
//chunk就是每次读取的64kb的数据
rs.on('data', (chunk) => {
    console.log(chunk.length);
})

//end事件是读取完毕以后会自动关闭时触发
rs.on('end', () => {
    console.log('关闭了');
})