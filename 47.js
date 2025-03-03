// hoisting


hello();  // i can call fucntion anywhere in the case of function decalrariton
function hello(){
    console.log("hello world");
}



// but i can call function anywhere in the case of function expression and arrow functoin

// helloWorld();      // i can not call here
const helloWorld = function () {
    console.log("hello world");
}

//  thisHello();    // i can't call here
const thisHello = () => {
    console.log("Hello");
}


console.log(hel);  // i can initialized before, only in var not in case of let,const
var hel = "hello world";

 
  