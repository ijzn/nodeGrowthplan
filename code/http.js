const http = require('http');
const url = require('url');
let server = http.createServer()

server.listen(8090, () => {
  console.log('127.0.0.1:8090');
});

server.on('request', (req, res) => {
  // 请求方法
  console.log(req.method);
  // url
  console.log(req.url);

  if (req.method == "GET") {
    // 解析url参数 localhost:8090/azs?id=123
    console.log("解析url参数 ", url.parse(req.url, true));
  }
  if (req.method === "POST") {
    console.log(req.body); 
    let data = ''
    req.on('data', function (d) {
      // 二进制流
      console.log(d);
      data = data+d;
    })
    req.on('end', function () {
      let data = require('querystring').parse(data);
    })
  }
  res.write("888----111");
  res.end();
})


// 模块化拆分 MVC架构