#!/usr/bin/env node
process.env.NODE_PATH = __dirname + '/../node_modules/'
const { resolve } = require('path')
const res = command => resolve(__dirname, '../commands/', command)
const program = require('commander')

program.version(require('../package').version)

program.usage('<command>')

program.command('init')
  .description('创建一个新的工程')
  .alias('i')
  .action(() => {
    require(res('init'))
  })
  program.parse(process.argv)

if(!program.args.length){
  program.help()
}