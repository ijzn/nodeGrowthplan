// 命令行交互工具
const inquirer = require("inquirer");

const config = require('./config.js');
const promptList = [
  {
    type: "list",
    name: "frowName",
    message: "请选择下载的模板类型",
    choices: config.frameList,
  },
];
inquirer.prompt(promptList).then((answers) => {
  console.log(answers); // 返回的结果
  // 执行下载操作
});
// const action = (promptList) => {
//   inquirer.prompt(promptList).then((answers) => {
//     console.log(answers); // 返回的结果
//     // 执行下载操作
//   });
// };

// action(promptList);

