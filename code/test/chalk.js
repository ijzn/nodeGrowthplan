// node命令行，颜色设置
const chalk = require("chalk");
const log = console.log;
log(chalk.blue("Hello world!"));
log(`
  Egg: ${chalk.blue('12321')}
  Vue: ${chalk.red('vue')}
`);
