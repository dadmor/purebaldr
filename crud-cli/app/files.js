const fs = require('fs');
var Mustache = require('mustache');

module.exports = {
  outputPath: '../src/pages/hasuraPanel/',
  createDirectories:function (name){
    const entityDir = `${this.outputPath}${name}view`
    if (!fs.existsSync(entityDir)){
        fs.mkdirSync(entityDir);
    }
    const slotsDir = `${this.outputPath}${name}view/slots`
    if (!fs.existsSync(slotsDir)){
        fs.mkdirSync(slotsDir);
    }
  },
  registerTpl: function(tplName, data, path){
    const out =  this.getTemplate(tplName, data);
    fs.writeFile(`${this.outputPath}/${path}`, out, (err) => {if (err) throw err}); 
  },
  registerEntity: function(entity, displayName){
    this.createDirectories(entity)
    const panelTpl = this.getTemplate('panelMainPage', {entity, displayName})
    fs.writeFile(`${this.outputPath}/${entity}view/[[...slugPath]].tsx`, panelTpl, (err) => {if (err) throw err}); 
    const mainViewTpl = this.getTemplate('slotMainView')
    fs.writeFile(`${this.outputPath}/${entity}view/slots/MainView.tsx`, mainViewTpl, (err) => {if (err) throw err}); 
    const insertViewTpl = this.getTemplate('slotInsertView')
    fs.writeFile(`${this.outputPath}/${entity}view/slots/InsertView.tsx`, insertViewTpl, (err) => {if (err) throw err}); 
  },
  applayTplToFile: function (path, tag, code){
    var data = fs.readFileSync(path).toString().split("\n");
    let tergetLineNumber = 0, removerStamp = false, remover = false, removeFrom = 0, rangeLength = 0;
    data.forEach((l,i)=>{
        if(l.search('#!!#')>0) remover = false
        if(remover) rangeLength++
        if(l.search(tag)>0){
            tergetLineNumber = (i+1)
            if(l.search('#:toreplace')>0){
                removerStamp = true;
                remover = true;
                removeFrom = (i+1)
            }
        } 
    })
    if(removerStamp) data.splice(removeFrom,rangeLength);
    if(tergetLineNumber>0) data.splice(tergetLineNumber, 0, code);
    fs.writeFile(path, data.join("\n"), function (err) {
        if (err) return console.log(err);
    });
  },
  getTemplate: function (name, data){
    const buffer = fs.readFileSync(`./app/templates/${name}.jsx`);
    const fileContent = buffer.toString();
    var output = Mustache.render(fileContent, data);
    return output
  }
};

var files = function () {
}