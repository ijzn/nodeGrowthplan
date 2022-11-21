const express = require('express');
const fs = require('fs');
const db = require('./db.js');
const {promisify} = require('util');
const app = express();

const readFile = promisify(fs.readFile);
// 使用urlencoded数据格式
// app.use(express.urlencoded())
// 使用json格式
app.use(express.json());

app.get('/', async (req, res) => {
  
  // try {
  //   const data = readFile('./db.js', 'utf8');
  //   res.send(data)
  // } catch (error) {
  //   res.status(500).json({error})
  // }
  if (req.url) {
    res.send(db.users)
  } else {
    res.status(500);
    res.send(req)
  }
});
app.post('/', async (req, res) => {
  console.log(req.headers);
  console.log(req.body);
});

app.listen(3001, () => {
  console.log("Run http://127.0.0.1:3001");
});