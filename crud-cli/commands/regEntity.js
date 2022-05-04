#!/usr/bin/env node
'use strict';
module.exports = {
  run: function(callback){
    const inquirer = require('inquirer');
    const fs = require('fs');
    var files = require('../app/files');

    const metadataImport = fs.readFileSync('metadata_import/import.json');
    const metadata = JSON.parse(metadataImport);
    const appSource = metadata.metadata.sources[0];

    const entities = appSource.tables.map((table) => {
        return table.table.name
    })
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'entity',
          message: 'select entity',
          choices: entities,
        },
      ])
      .then(answers => {

        const entity = answers.entity;
        inquirer
        .prompt([
          {
            name: 'prularName',
            message: 'change name to display',
            default: entity
          },
        ])
        .then(answers => {
          if (fs.existsSync(`${files.outputPath}${entity}view/[[...slugPath]].tsx`)) {
            console.log('\x1b[33m%s\x1b[0m','┌────────────────────────────┐')
            console.log('\x1b[33m%s\x1b[0m','│ [!!!] Entity is resistered │')
            inquirer
            .prompt([
              {
                type: 'list',
                name: 'overwrite',
                message: 'Are you shure to overwrite entity (reset all components)',
                choices: ['YES overwrite','NO'],
              },
            ])
            .then(answers => {
              if(answers.overwrite == 'YES overwrite'){
                files.registerEntity(entity, answers.prularName)
              }
              callback()
            });
          }else{
            files.registerEntity(entity, answers.prularName)
            callback()
          }
        });

      });

    }
  } 
  
  var regEntity = function () {
  }
  
  
