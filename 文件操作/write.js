const fs = require('fs');

fs.writeFile('./a.txt', 'zhangsanlisiwangwu', (err) => {
  console.log(err);
} )