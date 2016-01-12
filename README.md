# WARNING
extremely in a prototype stage

## Goal
The goal of this library is to make collection manipulation way more expresive and less error prone.

## building and running
`npm run build`
`node index.js`

## Example 
Given the array

```
var collection = [
  {
    "name": "beto",
    "age": 35,
    "type": "student",
  },
  {
    "name": "mama",
    "type": "teacher",
  },
  {
    "name": "dude",
    "age": 20,
    "type": "teacher",
  },
  {
    "name": "david",
    "age": 19,
    "type": "teacher",
  }
]
```

```
collection.extract.age 
// [35, undefined, 20, 19]

collection.filterBy.age;
/*
[
  {
    "name": "beto",
    "age": 35,
    "type": "student",
  },
  {
    "name": "dude",
    "age": 20,
    "type": "teacher",
  },
  {
    "name": "david",
    "age": 19,
    "type": "teacher",
  }
]
*/

collection.filterBy.age.greaterThan(19); 
/* outputs
[{
    "name": "beto",
    "age": 35,
    "type": "student",
  },
  {
    "name": "dude",
    "age": 20,
    "type": "teacher",
  }]
*/

collection.filterBy.type.equal("student");
/* outputs
[{
    "name": "beto",
    "age": 35,
    "type": "student",
  }]
*/
```

### license
MIT