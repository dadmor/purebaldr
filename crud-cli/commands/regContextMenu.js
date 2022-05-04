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
          type: 'checkbox',
          name: 'entity',
          message: 'choose entitys',
          choices: entities,
        },
      ])
      .then(answers => {
        files.registerTpl('panelMenu', {data:answers.entity}, '/bars/ContextMenu.tsx')
        callback()
      });

    }
  } 
  
  var regContextMenu = function () {
  }
  
  
