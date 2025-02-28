// primitve vs reference data types


// primitive data types
let num1 = 6;
let num2 = num1;
console.log(`ths value is num1 ${num1}`);
console.log(`the value is num2 ${num2}`);
num1++;
console.log("After incrementing num1");
console.log(`the value is num1 is ${num1}`);
console.log(`the value is num2 ${num2}`); // primitive data type store by value so num1 hold copied value of num2

// Primitive Types (Numbers, Strings, Booleans, etc.) → Stored by value



// Reference data types
let array1 = ["item1","item2"];
let array2 = array1;
console.log(`Array1 is ${array1}`);
console.log(`Array2 is ${array2}`);
array1.push("item3");
console.log("After pushing element to arra1");
console.log(`array1 is  ${array1}`);
console.log(`array2 is ${array2}`);
// Reference Types (Objects, Arrays, Functions) → Stored by reference