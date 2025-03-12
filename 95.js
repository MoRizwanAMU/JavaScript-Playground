//  Global execution context

                                // deciding scope ↓ on the basis of written code
console.log("hello world");         
let firstName = "Mohammad";     // belong to golobal scope
let lastName = "Rizwan";         // belong to golobal scope

const myFuction = function(){           // function delared in the global scope
    let var1 = "First Variable";        // var1 is a function scope
    let var2 = "second Variable";       // var 2 is a function scope
    console.log(var1);
    console.log(var2);
}
