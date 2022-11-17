const download = require("download-git-repo");
const ora = require("ora");
const chalk = require("chalk");
const log = console.log;

const downloaAction = () => {
  const spinner = ora("项目初始化...").start();

  download(
    "direct:https://gitee.com/Nealyang/ejs-express-mysql.git",
    "egg",
    { clone: true },
    function (err) {
      // console.log("download", err);
      if (err) {
        spinner.fail('下载失败');
        log(err);
      } else {
        spinner.succeed("下载成功");
        log(`     ${chalk.bold("cd egg, you run:")}`);
        log("         npm install");
        log("         npm run dev");
      }
    }
  );
}

downloaAction();
