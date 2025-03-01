// for of loop in array


const fruits = ["apple", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}



  // if we want to push and UpperCase

  const allFruits = ["apple", "pineApple","Banana"];

const fruits2 = [];

for (let fruits1 of allFruits) {
     fruits2.push (fruits1.toUpperCase());
}

console.log(fruits2);