const download = require("download-git-repo");
const ora = require("ora");
const chalk = require("chalk");
const log = console.log;

const downloaAction = async ({ project, url }) => {
  const spinner = ora("项目初始化...").start();

  download(`direct:${url}`, project, {clone: true}, function (err) {
  // download(`direct:${url}`, project, function (err) {
    if (err) {
      spinner.fail("下载失败");
      log(err);
    } else {
      spinner.succeed("下载成功");
      log(`     ${chalk.bold(`cd ${project}, you run:`)}`);
      log("     npm install");
      log("     npm run dev");
    }
  });
};
module.exports = downloaAction;