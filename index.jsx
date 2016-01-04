import Collection from "./collection"

let myCollection = Collection({
  "name": "pipe",
  "age": 30,
  another: {
    pipe: "WTF"
  },
  "sayHello": () => "Hello"
});

myCollection.push({
  "name": "pipe",
  "age": 30,
  another: {
    pipe: "LOL"
  },
  "sayHello": () => "Hello"
});


myCollection.push({
  "name": "beto",
  "age": 35,
  another: {
    pipe: "COPTER"
  },
  "sayHello": () => "Hello"
});

myCollection.push({
  "name": "mama",
  "age": 65,
  another: {
    pipe: "REALLY"
  },
  "sayHello": () => "Hello"
});

console.log(myCollection.another);

// mycollection.filterBy.thisProp.largerthan(scopedValue);
// mycollection.filterBy.fn(); //copout
