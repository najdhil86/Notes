var test  = 'j'
let test2 = 2
const test3 = 'jf'
const obj1 = {
    name:'hunt',
    age:40,
    random:`will this work? ${test3}`
}

// new learning you cannot access the obj1 property before it is initialization

console.log(test);
console.log(test2);
console.log(test3);

console.log(obj1);

console.log(obj1.age);
console.log(obj1.name);
console.log(obj1.random);

var anotherone = test + test2;
let anothertwo = test + test3;

console.log(anotherone);
console.log(anothertwo);


var practice = `this is how it\'s going to happen. ${test2}`

console.log(practice);

let math1 = 1 + 2;
let math2 = 1 - 2;
let math3 = 1 * 2;
let math4 = 1/2;

console.log(math1);
console.log(math2);
console.log(math3);
console.log(math4);

let math5 = 2 % 1;

console.log(math5);

let math6 = 2 ** 2;

console.log(math6);

let math7 = Math.round(1/2);
let math8 = Math.ceil(1/2);
let math9 = Math.floor(1/2);
let math10 = Math.random();


console.log(math7);
console.log(math8);
console.log(math9);
console.log(math10);
