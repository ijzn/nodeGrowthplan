const express = require('express');
const db = require('./db.js');
const app = express();
// 使用urlencoded数据格式
// app.use(express.urlencoded())
// 使用json格式
app.use(express.json());

app.get('/', async (req, res) => {
  
  try {
    const data = await db.getDb();
    console.log('data===>', data);
    res.send(data);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({error})
  }

});
app.post('/', async (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  const body = req.body;
  if (!body.username) {
    res.status(403).json({
      errorMessage: "缺少用户心虚",
    });
  } 
  const dbJosn = await db.getDb();
  const lastUser = dbJosn.users[dbJosn.users.length - 1];
  const newUser = {
    id: lastUser.id + 1,
    username: body.username,
    age: body.age || 0,
  };
  dbJosn.users.push(newUser);
  try {
    let w = await db.saveDb(dbJosn);
    console.log('===>', w);
    res.send({
      code: 0,
      msg: '更新成功-1',
      err: w
    })
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});

app.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { username, age } = req.body;
  console.log(id, username, age);
  try {
    let userInfos = await db.getDb();
    const userId = Number.parseInt(id);
    const orderItem = userInfos.users.filter((item) => item.id == userId);
    console.log(orderItem);
    if (orderItem.length === 0) {
      res.status(403).json({
        code: 1,
        error: '用户不存在'
      })
      return;
    }
    const newUserInfo = {
      ...orderItem[0],
      username: username || orderItem[0].username,
      age: age || orderItem[0].age,
    };
    userInfos.users[id - 1] = newUserInfo;
    console.log(newUserInfo, userInfos.users);
    if (!(await db.saveDb(userInfos))) {
      res.status(200).json({
        msg: "修改成功",
      });
    } else {
      console.log("==>", 11);
    }

  } catch (error) {
    res.status(500).json({
      code: 1,
      msg: JSON.stringify(error),
    });
  }
  
})

app.listen(3001, () => {
  console.log("Run http://127.0.0.1:3001");
});