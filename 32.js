// while loop in array

const fruits = ["apple","mango","grapes"];

const fruits1 = [];
let i = 0;
while(i <= fruits.length-1) {
    fruits1.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits1);