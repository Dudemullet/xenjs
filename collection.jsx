export default function coll(ObjModel) {
  let base = [];

  let properties = Object.keys(ObjModel);
  let getterObject = {};
 
  properties.forEach(function(propName, i){
    Object.defineProperty(getterObject, propName.toString(), {
      get: function () {
        return base.map( (val) => val[propName] );
      }
    })
  });

  Object.defineProperty(base, "get", {
    get: () => getterObject
  });

  return base;
}
