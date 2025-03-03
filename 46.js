// Arrow Functions

  

// function expression
const singHappyBirthday = function () {
    console.log("happy birthday to you......");
}
singHappyBirthday();
// convert into arrow functoin
const happyBithdaySong = () => {
    console.log("this is happy birthday song.");
}
happyBithdaySong();



// function epxression
const sumOfNumbers = function(num1,num2,num3) {
        return num1+num2+num3;
}
console.log(sumOfNumbers(5,3,2));
// convert into Arrow function
const sumOfThreeNumbers = (num1,num2,num3) => {
    return num1 + num2 + num3;
}
console.log(sumOfThreeNumbers(10,20,30));




// function epxression
const isEven = function(number) {
        return number % 2 === 0;
}
console.log(isEven(4));
// convert into Arrow Function
const checkEven = (number) => {
        return number % 2 === 0;
}
console.log(checkEven(88));




// function expression
const firstChr = function (anyString) {
        return anyString[0];
}
console.log(firstChr("Rizwan"));
// convert into Arrow Function
const secondChr = (str) => {
    return str[1];
}
console.log(secondChr("Rizwan"));


// we can remove parenthesis for only single parameter
const Name = myName => {
    return "hi i am Rizwan" ;
}
console.log(Name());




// minimize arrow function this ↓
const isThisEven = (number) => {
    return number % 2 === 0;
}
console.log(isThisEven(4));
// minimized arrow fucntion for single parameter
const thisEven = number => number % 2 === 0;
console.log(thisEven(6));


// minimize arrow function this ↓
const findFirstChr = (anyString) => {
    return anyString[1];
}
console.log(findFirstChr("Rizwan"));
// minimized arrow function
const findChara = anyStri => anyStri[2];
console.log(findChara("Rizwan"));
