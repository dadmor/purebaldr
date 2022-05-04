#!/usr/bin/env node
'use strict';
module.exports = {
    run: function(callback){
        const fs = require('fs');

        const metadataImport = fs.readFileSync('metadata_import/import.json');
        const metadata = JSON.parse(metadataImport);
        const appSource = metadata.metadata.sources[0];

        const out = appSource.tables.map((table) => {
            const permissionArray = Object.keys(table).filter(option => (option.slice(option.length - 11) === 'permissions'))
            return {entityName:table.table.name, permissions:permissionArray.join(', ')}
        })
        console.log('┌───────────────┐')
        console.log('│ Entities list │')
        console.table(out);
        callback()
    }
} 
var ls = function () {
}

