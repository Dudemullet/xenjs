function Collection(collection){
  let proxy = {};

  var filterProxy = new Proxy({}, {
    get: function(target, propKey) {
      var filteredCollection = collection.filter( function (elem) {
        return elem[propKey];
      });


      return {
        "result": filteredCollection,
        // "greaterThan": filterExtension(propKey).greaterThan
        "greaterThan": function(prop2) {
          return collection.filter( function(elem){
            return elem[propKey] > prop2;
          });
        },
        "lessThan": function(prop2) {
          return collection.filter( function(elem){
            return elem[propKey] < prop2;
          });
        },
        "equal": function(prop2) {
          return collection.filter( function(elem){
            return elem[propKey] === prop2;
          });
        }
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

let myArr = [
  {
    "name": "pipe",
    "type": "student",
    "age": 30,
    another: {
      pipe: "LOL"
    },
    "sayHello": () => "Hi from pipe"
  },
  {
    "name": "beto",
    "age": 35,
    "type": "student",
    another: {
      pipe: "COPTER"
    },
    "sayHello": () => "Hello from beto"
  },
  {
    "name": "mama",
    "type": "teacher",
    another: {
      pipe: "REALLY"
    },
    "sayHello": () => "Hello from mama"
  },
  {
    "name": "dude",
    "age": 20,
    "type": "teacher",
    another: {
      pipe: "REALLY"
    },
    "sayHello": () => "Hello from mama"
  },
  {
    "name": "david",
    "age": 19,
    "type": "teacher",
    another: {
      pipe: "REALLY"
    },
    "sayHello": () => "Hello from mama"
  }
];

var myCollection = Collection(myArr);

console.log(myCollection.extract.age);

var ageFilter = myCollection.filterBy.age;
console.log(ageFilter.greaterThan(15));
console.log(ageFilter.lessThan(30));
// typed this way because of current proxy restrictions
// should be myCollection.filterBy.type.greaterThan(15);
// should be myCollection.filterBy.type.lessThan(30);

var typeFilter = myCollection.filterBy.type;
console.log(typeFilter.equal("teacher"));
// typed this way because of current proxy restrictions
// should be myCollection.filterBy.type.equal('teacher');
