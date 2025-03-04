// rest parameters

function myFunc (a,b,...c ) {
    console.log("a is ..", a);
    console.log("b is ..", b);
    console.log("c is ..", c);
}
 myFunc(2,3,4,5,6,7,8,9);   // if want to hold(print) whole parameter with limited armguments then we will use rest parameters(...c)


 // sum of all arguments using for loops
function addAll (...number) {
  let sum = 0;
  for (let count = 0; count < number.length; count++){
    sum += number[count];  // sum = sum + number [count]
  }
  return sum;
}
console.log( ans = addAll(2,3,2,4,5,6,4,3));

 // sum of all arguments using for of loops
 function sumAll (...numbers) {
    let total = 0;
    for ( let number of numbers) {
        total = total + number;
    }
    return total;
 }
 const finalAns = sumAll(2,3,4,2,3,5,279,4,1341,41,341);
 console.log(finalAns);