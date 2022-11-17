#! /usr/bin/env node

const {program} = require('commander');


// commander 处理自定义命令行参数
program.command('create <project> [others...]')
  .alias('crt')
  .description('创建项目')
  .action((projectName, argvs) => {
    console.log(projectName);
    console.log(argvs);
  })

program.parse(argv);