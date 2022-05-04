// https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
const inquirer = require('inquirer');
const fs = require('fs');
var files = require('./app/files');
var ls = require('./commands/ls');
var listComp = require('./commands/listComp');
var regEntity = require('./commands/regEntity');
var regContextMenu = require('./commands/regContextMenu');

// init starting files and dirs
const entityDir = `${files.outputPath}emptyview`
if (!fs.existsSync(entityDir)){
    fs.mkdirSync(entityDir);
}
const slotsDir = `${files.outputPath}emptyview/slots`
if (!fs.existsSync(slotsDir)){
    fs.mkdirSync(slotsDir);
}
const barsDir = `${files.outputPath}bars`
if (!fs.existsSync(barsDir)){
    fs.mkdirSync(barsDir);
}
if (!fs.existsSync(`${files.outputPath}bars/ContextMenu.tsx`)) {
  console.log('BaldrCLI first init: create empty context Menu');
  files.registerTpl('emptyPanelMenu', {}, '/bars/ContextMenu.tsx')
}
files.registerEntity('empty', 'Emptys')
console.log(' ')
console.log('┌───────────────────────────────────────────────────────┐')
console.log('│                                                       │')
console.log('│ BaldrCli                                              │')
console.log('│ start on http://localhost:3001/hasuraPanel/emptyview  │')
console.log('┌───────────────────────────────────────────────────────┐')

function start(){
  console.log(' ')
  console.log('\x1b[33m%s\x1b[0m', '┌───────────────────────────────────────────────────────┐')
  inquirer.prompt([
      {
        type: 'list',
        name: 'command',
        message: 'Select command',
        choices: [
          'ls', 
          'regEntity', 
          'regContextMenu', 
          new inquirer.Separator(), 
          'listComp', 
          'insertComp', 
          'updateComp' 
        ],
      },
    ])
    .then(answers => {
      if(answers.command == 'ls'){
        ls.run((callback)=>{
            start()
        })
      }
      if(answers.command == 'regEntity'){
        regEntity.run((callback)=>{
            start()
        })
      }
      if(answers.command == 'listComp'){
        listComp.run((callback)=>{
            start()
        })
      }
      if(answers.command == 'regContextMenu'){
        regContextMenu.run((callback)=>{
            start()
        })
      }
  });
}
start()


