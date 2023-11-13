var object = {voltage : 250 , current : 12};
var json = JSON.stringify(object);

//console.log(json);

// the correct syntax of JSON is : 2

var jsonData = '{"type" : "dog" , "age" : 3}';
var obj = JSON.parse(jsonData);

//console.log(obj);

let x = '[{"type" : "dog" , "age" : 3} , {"type" : "cat" , "age" : 2}]';
var xx = JSON.parse(x);

// xx.forEach(animal => {
//     console.log("Animal type:", animal.type);
//     console.log("Animal age:", animal.age);
//   });

console.log(xx);

var wassim = {
  nom : "syymou" , age : 22
};
  
//console.log(wassim);
var wassJ = JSON.stringify(wassim);
console.log(wassJ);