// function declaration



function singHappyBirthday () {
    console.log("happy birthday to you....");
}

singHappyBirthday();
singHappyBirthday();


function twoPlusFour () {
    console.log(2+4);
}

twoPlusFour();
const funcValue = twoPlusFour();  // store in a variable
console.log(funcValue);



function fourPlusSix() {
    return 4 + 6;
}
console.log(fourPlusSix());
const  returnValue = fourPlusSix();
console.log(returnValue);




function sumTwoNumbers (number1, number2) {
    return number1 + number2;
}

const returnValue1 = sumTwoNumbers(10,30);
console.log(returnValue1);




function sumOfThreeNumbers (number1, number2, number3) {
            return number1 + number2 + number3;
}

const ReturnOfThreeValue = sumOfThreeNumbers(10,29,11);
console.log(ReturnOfThreeValue);
 


// checking is odd even
function isEven (numb) {
    if (numb % 2 === 0) {
        return true;
    }else {
        return false;
    }
}
console.log(isEven());

    // i can write this program into thick program
// checking odd even
function isOdd (n) {
    if (n % 2 !== 0) {
        return true;
    }
    return false;
}
console.log(isOdd(4));

// very minimize the code
function checkingOddEven (num) {
    return num % 2 === 0;
}
console.log(checkingOddEven(6));


// this fucntion base on this logic ↓
console.log(4 % 2 === 0);  // this logic only provide output true of false


// input : string
// output : firstCharacter 
function firstChar (anystring) {
    return anystring[2];
}
console.log(firstChar("Rizwan"))



// input : string
// output : position of character

function positionOfChr (anyString , otherstring, finalString) {
        return anyString[1]+ otherstring[3]+ finalString[4] ;
}
console.log(positionOfChr("Rizwan", "Lukman", "Yasir"));




// Q => input : array , target(number)
//  output : index of target if target present in array

function findTarget (myArray , target) {
    
    for(let i = 0; i < myArray.length; i++){
        if (myArray[i] === target) {
            return i;
        }
    }
    return -1;
}
const valueOfArray = [2,4,6,3,7,1,9];
const final = findTarget(valueOfArray, 1);
console.log(final);


