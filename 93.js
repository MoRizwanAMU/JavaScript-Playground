
// java Script is a single threaded, synchronous programming language
// lexical(lexical scope) means => when you write code then where you write code : global or under function ans so on



// note : global execution context add into stack
console.log(this);      // print window{}
 console.log(window);   // print window{}
 console.log(myFunction);   // print function as it is. in the case of funcion declaration
 console.log(fullName);       // undefined

 // in the case of function delaration using var
 function myFunction(){       // this line skipe because already finihsed
    console.log("this is my function");
 }

 // in the case of var
 var firstName = "Mohammad";  // cut undefined and print Mohammad
 var lastName = "Rizwan";     // print Rizwan
 var fullName = firstName + " " + lastName;  // Mohammad Rizwan
 console.log(fullName);    // Mohammad Rizwan




 //  functionn expression using var

console.log(myFunction);   // its treat like a variable so that its showing(value) undefined because its funtion expression

var myFunction = function(){        // this line will be work and print the value
    console.log("this is my function");
}
 
console.log(myFunction)     // it will print all fucntion in case of fucntion expression




