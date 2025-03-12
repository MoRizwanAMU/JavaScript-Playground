// global execution context(G.E.C) always in stack. when crate G.E.C then its automatically create/set window{},this: window

//in the case of let
//console.log(firstName)      // in the case of let value is uninitialized/error means we can not used before initialized. jab tak variable uninitialized rahta hai tab tak(us time period ko) use temporal dead zone(T.D.Z) bolte hai. it happend special with let and const
let firstName = "Rizwan";
console.log(firstName);

// Not: Let and const are hoisted

//Uncaught ReferenceError:  can not access "firstName" befoer initialization
// ye error tab show hota hai jab aapke pass variable hai but initialized nhi kiya gya hai


// Uncaught ReferenceErro: "firstName" is not define
// ye error tab show hoga jab aap ke pass koi variable hai hi nhi.



//console.log(typeof secondName);     // it showing error => ReferenceError: Cannot access 'secondName' before initialization
let secondName = "Rizwan";

// but after remove let secondName = "Rizwan"  then its showing undefine
console.log(typeof thirdName);
 
