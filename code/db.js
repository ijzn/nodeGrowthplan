const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const getDb = async () => {
  const _data =await readFile('./db.json', 'utf8');
  const data = JSON.parse(_data);
  return data;
};

const saveDb = async (data) => {
  let stringData = JSON.stringify(data);
  return await writeFile("./db.json", stringData);
};

module.exports = {
  getDb,
  saveDb,
};
