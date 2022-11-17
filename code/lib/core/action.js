const inquirer = require("inquirer");
const config = require("./config.js");
const downLoad = require("./down.js");


const myAction = async (project, argvs) => {
  // 命令行的执行逻辑代码
  console.log("action", project);
  console.log("action", argvs);
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "frowName",
      message: "请选择下载的模板类型",
      choices: config.frameList,
    },
  ]);
  console.log("选择结果", answers); // 返回的结果
  // 执行下载操作
  console.log("下载路径：", config.frameUrl[answers.frowName]);
  downLoad({ project, url: config.frameUrl[answers.frowName] });
};;

module.exports = myAction;
