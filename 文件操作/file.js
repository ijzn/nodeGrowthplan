// import { readFile, writeFile } from "fs";
const fs = require('fs');

fs.readFile("./a.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
  let newData = `${data}-666`;
  fs.writeFile("./a.txt", newData, (err) => {
    if (err) throw err;
    console.log("追加成功");
  });
});
