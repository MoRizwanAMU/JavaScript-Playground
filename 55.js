// function returning function


function myfunc() {
     function hello() {
        console.log("hello world");
     }
     return hello;
     
}
const ans = myfunc();   // Now ans become a fucntion
ans();






function myfunc2 () {
    function hello () {
    return "hello";
    }
    return hello;
}
const answ = myfunc2();  // answ become fucntion
console.log(answ());


      // or
function myFunc3 () {
    return function() {
        return "hello moto";
    }
}
const answer = myFunc3();
console.log(answer());
 