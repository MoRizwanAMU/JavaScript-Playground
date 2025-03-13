// function execution context => what will happen to calling function



// when javaScipt star executing a script, its creates the global execution context(G.E.C), which happen in two phase => step1. Create the window object  step2. Create this object

let foo = "foo";       // at the time of memory creation phase(hoisting) let foo is uninitialized(T.D.Z temporal dead zone) 
console.log(foo);
function getFullName(firstName, lastName){
    console.log(arguments[0]);                              // function arguments goes/create array like object(array like object have two specification=>1.length 2.index)
    console.log(arguments.length)       // i can used length property
    let myVar = "var inside function";        
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("Mohammad", "Rizwan");       //  at the time of memory creation phase(hoisting) const personName is uninitialized(T.D.Z temporal dead zone) 
console.log(personName);        // when we call function then create new(function execution context) execution context.so it will called "function execution context"
                                            // under the function first create "local memory creation". funciton arguments goes/create array like object(array like object have two specification=>1.length 2.index)
                                            // 2nd code execute code by code


// Note=> "global execution context"  push in the stack when call on the function then "function execution context" push on stack as per as global execution context




