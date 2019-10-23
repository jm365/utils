const express = require('express');
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, '../test')));
let server = app.listen(3000, () => {
  console.log('学习服务启动成功');
})
server.on('error', (err) => {
  console.log(err, '学习服务启动失败');
})
