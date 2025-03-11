
let numbers = [1, 2, 3, 4];
console.log(numbers);
//Array.prototype is the prototype object from which all arrays inherit.
console.log(Array.prototype);  // this prototype giving array   means => array prototype is array
    // check it..... is it arrays

console.log(Array.isArray(Array.prototype));

// array constructor and i call use new
let number = new Array(1, 2, 3);
console.log(Array.prototype);   // define all method here
console.log(Object.getPrototypeOf(number));   // defin all meethod here
console.log(number);




function hello(){
    console.log("hello");
}
console.log(hello.prototype) ;    // this prototype providing object
hello.prototype = [] ;   // now prototype has been changed into empty array
console.log(hello.prototype);  // so i can add because its empty array
hello.prototype.push("169");
console.log(hello.prototype);  




