
// important array methods ↓

    // forEach
    // map
    // filter
    // reduce




// multiply every index element by 2
const numbers = [4,2,5,8,6,7];

function multiplyBy2 (number, index) {
    console.log("index is ", index);
    console.log(`${number} * 2 = ${number*2}`);
     
}
multiplyBy2(numbers[0],0);
multiplyBy2(numbers[1], 1);      
  {
  
}

       // or using for loop

const num = [3,5,3,6,7,4];
function multiply2 (number , index) {
    console.log(`index is ${index} and number is ${number}`);
}
for (let i = 0; i < num.length; i++) {
    multiply2(num[i],i);
}


 // same output will be show using foreach 
 const allNum = [2,3,5,3,2,1,6,7,9];

 function myfunc (number, index) {
    console.log(`index is ${index} and number is ${number}`);

 }
 allNum.forEach(myfunc);   // for each loop taking a callBack function as a input

 
 // i can use forEach method using anonymous function
 const arrNum = [5,3,6,8];

 arrNum.forEach (function (number, index) {
    console.log(`this index is ${index} and this number is ${number}`);
 });

 // multiply by 2 using forEach method
 const arr = [3,5,2,9];
 arr.forEach(function(number) {        // it is anonymous functionś
    console.log(` ${2*number}`);
 });

 // if we want to print firstName of this ↓ array's object
 const users = [
    {firstName : "Rizwan" , age : 24},
    {firstName : "salman", age : 21},
    {firstName : "rahile", age : 35},
    {firstName : "swaleh", age : 41}
 ];
 users.forEach(function(user){
    console.log( user.firstName);
 })
 
 // using for of loop
for (let user of users) {
    console.log(user.firstName);
}

// using for loopS
for (let i = 0; i < users.length; i++) {
    console.log(users[i].firstName)
}


// applying arrow function
const detail = [
    {firstName : "Rizwan", age : 24},
    {firstName : "yasir", age : 14},
    {firstName : "Rehan", age : 26}
];

detail.forEach( (showDetail) => {
        console.log(showDetail.firstName)
});

 


 