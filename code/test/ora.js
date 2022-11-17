const ora = require("ora");

const spinner = ora("Loading unicorns").start();

setTimeout(() => {
  spinner.color = "yellow";
  spinner.text = "下载中···";
}, 1000);
