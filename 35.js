
// array destructuring

// example =>
const myArray = ["vlaue1", "value2"];
let myvar1 = myArray[0];
let myvar2 = myArray[1];

console.log(`value of my first variable is => ${myvar1}`);
console.log(`value of my second variable is => ${myvar2}`);



// same work i can do like this => called array destructuring
let myArray1 = ["VAlUE1", "VALUE2"];
let [myvar11, myvar22] = myArray1;  

console.log(`value of my first variable is => ${myvar11}`);
console.log(`value of my second variable is => ${myvar22}`);
       // myvar11 and 22 is noraml variable. i am going change value
myvar11 = "Now value has been changed";
console.log(myvar11)




// i can store value skip of the variable

const thisArray = ["apple", "banana", "grapes"];
// if i want to store 1st and third value
 let [firstVar , , secondVar] = thisArray;
 console.log(firstVar, secondVar);
 



   // if i want to slice value
   let otherArray = ["apple", "banana", "grapes","pineApple"];
   // if i want to slice grapes and pineApple
   let newArray = otherArray.slice(2);
   console.log(newArray);

   // this work in shortcut
   let otherArray1 = ["apple", "banana", "grapes","pineApple","other fruits"];
   [firstVariable ,secondVariable, ...myNewArray] = otherArray1; // other than 1st and 2nd(expcept ) element , all element will be store in myNewArray
   console.log(myNewArray);


