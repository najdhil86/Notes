var x = 100;

console.log(x);

let y = " Naj";

console.log(y);

let z = "Hello ";

console.log(z);

let x2 = 3;

z = z + y;

console.log(z);

let x4 = x/x2;

console.log(x4);


console.log(Math.ceil(x4));
console.log(Math.round(x4));
console.log(Math.floor(x4));
console.log(Math.random());
console.log(Math.ceil(Math.random()*10));

let x5 = x%x2;

console.log(x5);


if (x5 == 0){
    console.log(`The situation is Even,${y}`);
    
} else {
    console.log(`The situation is Odd,${y}`);
}