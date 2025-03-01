// for loop in array

let fruits = ["apple","mango","grapes","banana"];

for (let i = 0; i <= fruits.length-1; i++){
    console.log(fruits[i]);
    
}
console.log(fruits.length);
console.log(fruits[fruits.length-1]); // for last index



// for upperCase using new Variable
let fruits2 = [];
let allFruits = ["orange", "lemon","pomelo","Lime"];
for (let i = 0; i <= allFruits.length-1; i++){
    fruits2.push(allFruits[i]);
}

console.log(fruits2);