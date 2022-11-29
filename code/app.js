const express = require('express');
const db = require('./db.js');
const app = express();
// 使用urlencoded数据格式
// app.use(express.urlencoded())
// 使用json格式
app.use(express.json());



// 获取参数
app.get('/list/:id/vedio/:vid', (req, res) => {
  console.log(req.method, req.params.id, req.params.vid);
  // JSON.parse('/0------')
  res.send('/list')
})

app.get("/list", async (req, res) => {
 res.send(req.url)
})
  .post('/user', (req, res) => {
  res.send(` post ${req.url}`)
})

// 路由的链式调用





// 错误中间件 
app.use((err, req, res, next) => {
  console.log('======>', err);
  res.status(500).json({
    code: 1,
    msg: err.message,
  });
})


app.listen(3001, () => {
  console.log("Run http://127.0.0.1:3001");
});