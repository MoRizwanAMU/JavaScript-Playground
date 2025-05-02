// 4th example of closer

 function func () {
    let counter = 0;
    return function () {
        if (counter < 1) {
            console.log("hi you called me");
            counter++;
        }
        else {
            console.log("i have called already");
        }
    }
 }

const myFunc = func();
myFunc();
myFunc();
myFunc();
const myFunc2 = func();
myFunc2();
myFunc2();






