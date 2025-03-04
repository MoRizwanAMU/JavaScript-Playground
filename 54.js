// callback functions

 function myFunc2 (name) {
    console.log("indside my fucn2 ");
    console.log(`my name is ${name}`);
 }

 function myFunc (callback) {
    console.log("i am inside myfunc");
       callback("Rizwan");
 }

 myFunc(myFunc2);