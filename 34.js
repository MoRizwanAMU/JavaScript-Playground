// for in loop in array
// this loop proving index

const fruits = ["apple", "mango","grapes"];

for (let MyFruit in fruits) {
    console.log(MyFruit);          // The for...in loop iterates over keys (indexes) of the array, not values.
     
}



           // for item 

const AllFruits = ["apple", "mango","grapes"];

for (let fruits4 in AllFruits) {
    console.log( AllFruits[fruits4]);
}



// we can push and convert upperCase

const ListOfFruits =  ["apple", "mango","grapes"];
const FinalFruits = [];

for (let fruits1 in ListOfFruits){
    FinalFruits.push(ListOfFruits[fruits1].toUpperCase());
}
console.log(FinalFruits);




      // using a simple loop

const ManyFruits =  ["apple", "mango","grapes"];

for (let i = 0 ; i <= ManyFruits.length; i ++){
    console.log(ManyFruits[i])
}