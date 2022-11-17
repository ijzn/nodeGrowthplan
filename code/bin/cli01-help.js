#! /usr/bin/env node

const {program} = require('commander');

console.log('mycli');

// 获取后面跟的参数
// const argv = process.argv[2];
// console.log('argv===>', argv);
// if (argv === '--help') {
//   console.log('获取到了命令行参数');
// }

// 一般使用第三方库 commander, 来获取 command 命令行参数
const argv = process.argv;
program.option('-f --framwork <framwork>', '请设置选择框架')

// commander 处理自定义命令行参数
program.command('create <project> [other...]')
  .alias('crt')
  .description('创建项目')
  .action((projectName, argvs) => {
    // 命令行的执行逻辑代码
    console.log(projectName);
    console.log(argvs);
  })

program.parse(argv);
