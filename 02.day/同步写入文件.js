const fs = require('fs');
const path = require('path');

//获取被写入文件的路径
const filepath = path.resolve(__dirname, '.01./txt');

const fd = fs.openSync(filepath, 'a')
console.log(fd); //文件标识

fs.writeSync(fd, '蛋蛋的长裙~')

//关闭文件 closeSync
fs.closeSync(fd);