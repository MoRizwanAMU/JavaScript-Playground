// array

let fruits = ["apple","mango", "grapes"];
console.log(fruits);
console.log(fruits[2]);
fruits[1] = "banana";
console.log(fruits);
console.log(typeof fruits);



let numbers = [1,2,3,4,5,6];
console.log(numbers);


// we can store all data type in array
let mixed =[1,2,3.5,"Strign", null,undefined];
console.log(mixed);


// array is an object is JS
// is we want to this array or not
// lets check mixed
console.log(Array.isArray(mixed));