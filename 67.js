// // sets (it is iterable)
// // sotre data
// // sets also have its own method
// // no index based access
// // order is not guaranteed
// // unique items only (no dublicate allowed) but array allow dublicate item. its one biggest different between set and arrays



// const numbers = new Set([1,2,3]);   // i am entring array in sets   // sets always ignore dublicate value
// console.log(numbers);
// console.log(numbers[2]);     // arrays can access index base but sets not




// const chara = new Set("abc")   // we have enterd string becasue string is iterable
// console.log(chara);



// // if we want to add something in set then we can define empty set
// const nums = new Set();
// nums.add(1);
// nums.add(2);
// console.log(nums);



// // we can store defferent data types  in the set
// const manyItem = new Set();
// manyItem.add(chara,1,numbers);
// manyItem.add(['item1', 'item2']);  // these both are different becase different memory allcation so it will be add
// manyItem.add(['item1', 'item2']);
// console.log(manyItem);



// for check element exist are not
const newSet = new Set([2,3,5,6]);
console.log(newSet.has(2));  //
console.log(newSet); 

// i can use if else
if (newSet.has(5)){
    console.log(" 5 is preset");
} else {
    console.log("1 is not present");
}



// using for of loop for set because set is iterable
const num = new Set([1,2,3,4,5,7,8,9]);
for (let finalNum of num){
    console.log(finalNum);
}



// use set when value will be unique
// exa - user id , rollno , adharno and so on
const myArray = [1,2 ,3,5,5,2,6,7,9];
const uniqueValues = new Set(myArray);
console.log(uniqueValues);
console.log(myArray);  // myArray is same

// for find length of set of uniques value
let length = 0;
for (let totalLength of uniqueValues){
    length++;
}
console.log("total total unique element of sets is => " ,length);