// closures

// function can return function

function outerFunction(){
    function innerFunction(){
        console.log("hello world");
    }
    return innerFunction;
}

const ans = outerFunction();
// console.log(ans);
ans();



        // first example of closeres
function printFullName(firsName, lastName){
    function printName(){
        console.log(firsName, lastName);
    }
    return printName;       // this printName returning with firstName and LastName its called closer or => "A closure is a function that retains access to variables from its outer function's scope even after the outer function has finished executing." or return function return with his lexical environment value is called closer
}
const answ = printFullName("mohammad", "Rizwan");
answ();








