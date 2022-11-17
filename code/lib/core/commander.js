const action = require('./action');
const command = (program) => {
  // 一般使用第三方库 commander, 来获取 command 命令行参数
  // commander 处理自定义命令行参数
  program
    .command("create <project> [other...]")
    .alias("crt")
    .description("创建项目--1")
    .action(action);
};

module.exports = command;