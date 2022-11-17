#! /usr/bin/env node

const {program} = require('commander');

const help = require('../lib/core/help');
const commander = require("../lib/core/commander");
console.log('mycli22');

help(program);
commander(program);
const argv = process.argv;
program.parse(argv);
