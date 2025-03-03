// function expression



  // this is function declaration ↓
  function singHappyBirthday () {
    console.log("happy birthday to you......");
  }
  // function declaration change to fucntion expression ↓
  const happyBirthdaySong = function () {
    console.log("happy birthday to you, happy birthday to you, Happy birthday dear, happy birthday to you");
  }
  happyBirthdaySong();

  

  // this fucntion declaration
  function sumOfThreeNumbers (num1,num2,num3) {
        return num1 + num2 + num3;
  }
 const ans = sumOfThreeNumbers(3,5,2);
 console.log(ans);
  // convert into fucntion expression
  const sumOfNumbers = function (num1,num2,num3) {
            return num1 + num2 + num3;
  }
 const answer = sumOfNumbers(5,6,7);
 console.log(answer);



 // function declaration
 function isOdd (num) {
    return num % 2 === 0;
 }
 const finalAns = isOdd(7);
 console.log(finalAns);
 // convert into fucntion declaration
 const oddEven = function(num) {
    return num % 2 === 0;
 }
console.log(oddEven(6));



// function declaration
function findChr (anyString) {
    return anyString[0];
}
console.log(findChr("Rizwan"));
// convert into expression
const findPositonOfChr = function (anyString) {
        return anyString[1];
}
console.log(findPositonOfChr("yasir"));