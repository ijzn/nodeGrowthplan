
const fs = require('fs');
// console.log('fs' ,fs);
fs.readFile('./a.txt', 'utf8', (error, data) => {
  console.log("err", error);
  console.log("data", data);
})