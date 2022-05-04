#!/usr/bin/env node
'use strict';
module.exports = {
  run: function(callback){
    const inquirer = require('inquirer');
    const fs = require('fs');
    const metadataImport = fs.readFileSync('metadata_import/import.json');
    const metadata = JSON.parse(metadataImport);
    const appSource = metadata.metadata.sources[0];
    var files = require('../app/files');

    const entities = appSource.tables.map((table) => {
        return table.table.name
    })

    inquirer.prompt([
      {
        type: 'list',
        name: 'entity',
        message: 'select entity',
        choices: entities,
      },
    ])
    .then(answers => {
      const entity = answers.entity;
      const roles = appSource.tables.find(x => x.table.name === entity).select_permissions
      const fields = [...new Set(roles.map(el=>{
        return el.permission.columns
      }).flat())]
      inquirer.prompt([
        {
          type: 'checkbox',
          name: 'fields',
          message: 'Select fields',
          choices: fields,
        },
      ])
      .then(answers => {
        const selectedFields = answers.fields
        inquirer.prompt([
          {
            type: 'list',
            name: 'template',
            message: 'Select template',
            choices: ['TableComponent', 'CardsComponent', 'HorizontalCardsComponent'],
          },
        ])
        .then(answers => {
          const template = answers.template
          const path = `${files.outputPath}${entity}view/slots/MainView.tsx`
          const tableTpl = files.getTemplate('TableComponent', {selectedFields})
          files.applayTplToFile(path, '#MainView Slot Body#', tableTpl)
          callback()
        });
        
      });
    });
  }
} 

var listComp = function () {
}


