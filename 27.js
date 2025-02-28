// array push and pop

// array shift unshift


let fruits = ["apple","mango","grapes"];
console.log(fruits);

//push --> push add a item in last
fruits.push("banana");
console.log(fruits);




// pop --> pop remove last item
fruits.pop();
console.log(fruits);

let fruitList = ["papaya","pears","plums","stranberries"];
// i can print/store pop value
//print pop value
console.log(fruitList.pop());
// store pop value in varible
let poppedFruit = fruitList.pop();
console.log(`poped fruits is ${poppedFruit}`);




// unshift --> add from starting
let allFruits = ["cherry","kiwi","apricot","plum"];
allFruits.unshift("banana");
console.log(allFruits);


// Shift --> remove from starting
let listOfFruits = ["Muskmelon","watermelon","Pomegaranet","mango"];
listOfFruits.shift();
console.log(listOfFruits);
// i can store remove item
let removeitem = listOfFruits.shift();
console.log(removeitem);
