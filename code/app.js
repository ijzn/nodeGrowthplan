const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router')
const app = express();

// 基础中间件，路由模块，业务逻辑模块 拆分
/**
 * 基础中间件
 * 1. 数据格式解析 内置中间件 express.json()
 * 2. 日志记录 morgan
 * 3. 跨域 cors
 */
// 使用json格式
app.use(express.json());
// 跨域请求
app.use(cors());
// 日志记录
app.use(morgan('dev'))


// 路由模块
app.use('/api/v1', router);

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log("Run http://127.0.0.1:3001");
});