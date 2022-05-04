
module.exports = {
  buildPermissions:function (appSource){
    return appSource.tables.map(el => { 
        const permissionArray = Object.keys(el).filter(option => (option.slice(option.length - 11) === 'permissions'))
        return {
          slug: el.table.name.replace(/_/g,''),
          options: permissionArray,
          roles:   [...new Set( permissionArray.map(perm => {
            return el[perm].map(role => {return role.role})
          }).flat() )]
        }
      }) 
  },
  buildEntities:function (permissions, entities){
    // build entities
    permissions.forEach((el,i) => {
        entities[el.slug] = {
        fields:{}
        }
    })
  },
  buildEntitiesFields:function (permissions, entities, appSource){
    permissions.forEach((option,i) => {
    option.options.forEach((perm)=>{
        appSource.tables[i][perm].forEach((role)=>{
        entities[permissions[i].slug].fields[role.permission.columns] = {}
        })
    })
    });
  }
  
};

var data = function () {
}