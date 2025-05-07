// understand callback



function myFunc (callback) {
    console.log("function doing task 1");
    callback();
}

function myFunc2() {
    console.log("function is doing task2")
}
myFunc(myFunc2);



// i can write same code like ↓ this

function myFunc3(callback) {
    console.log("function doing task 3");
    callback();
}
myFunc3( function () {
    console.log("function is doing taks 4");
})



// another example of callback function

function getTwoNumbers (number1, number2 , callback){
    console.log(number1, number2);
    
    // agar callback number hai tabhi call hoga
    if (typeof number1 == "number" && typeof number2 == "number") {
        callback(number1, number2);
    }
    else {
        console.log("wrong data type")
    }
}

// function addTwoNumbers (num1, num2) {
//     console.log(num1 + num2);
// }            
getTwoNumbers(4,5 ,(num1, num2) => {       // i can make arrow function
    console.log(num1 + num2);
});  




// i can write this code like this
function getTwoNumberAndAdd (number1, number2 , onSuccess, onFailure) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        onSuccess(number1, number2);
    }
    else {
        onFailure();
    }
}

getTwoNumberAndAdd( 19, 5 , (num1 , num2) => {
    console.log(num1 + num2);
}, () => {
    console.log("wrong data type")
    console.log("please enter numbers only");
});



