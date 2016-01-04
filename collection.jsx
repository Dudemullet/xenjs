export default function coll(ObjModel) {
  let base = [];

  // Get all of the base object properties
  let properties = Object.keys(ObjModel);
 
  properties.forEach(function(propName, i){
    
    Object.defineProperty(base, propName.toString(), {
      get: function () {
        return coll(this.map( (val) => val[propName] ));
      }
    })
   
  });

  return base;
}
