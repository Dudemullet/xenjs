function Collection(collection){
  let proxy = {};

  let filterExtension = function(prop) {
    return {
      "greaterThan": function(prop2) {
        return this.filter( (elem) => {
          return elem[prop] > prop2;
        });
      }
    }
  };

  var filterProxy = new Proxy({}, {
    get: function(target, propKey) {
      var filteredCollection = collection.filter( function (elem) {
        return elem[propKey];
      });


      return {
        "result": filteredCollection,
        "greaterThan": filterExtension(propKey).greaterThan
      }
    }
  });

  var getProxy = new Proxy({}, {
    get: function(target, propKey) {
      return collection.map( function(elem) {
        return elem[propKey];
      });
    }
  });

  Object.defineProperty(proxy, 'filterBy', {
    get: function() { 
      return filterProxy;
    }
  });
  Object.defineProperty(proxy, 'extract', {
    get: function() { 
      return getProxy;
    }
  });

  proxy = new Proxy(proxy, {
    get: function(target, propKey) {
      return target[propKey];
    }
  });

  return proxy;
};
