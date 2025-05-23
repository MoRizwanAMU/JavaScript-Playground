
// synchronous programming vs asynchronous programming

// synchronous programming
// Note -> javaScript is synchronous and single threaded



// setTimeOut
// set timeout will take a function as a input
// setTimeOut is provide by browser not javsScript
// setTimeOut give a id in return
console.log("1");
function hello() {
    console.log("insdie 1");
}
setTimeout(hello, 1000)     // minimum delay of 1000 miliSecond(1second) 
console.log("3");


console.log("1");
// we can also make arrow function
setTimeout( () => {     // it is callback arrow function
    console.log("inside 2"); // this will execute after 1 second
}, 0); // there is 0 milisecond but executed all normal function then turn here for execute the code

for (let i = 0; i < 100; i++){
    console.log("....");
}

console.log("3");



// setTimeOut give a id in return
const id = setTimeout( () => {
    console.log("setIimeout : ", id);
}, 500);    // 500mili second means half second

console.log("set time out id is = ", id);
console.log("clearing time out ");
clearTimeout(id) ;   // i don't need settimeout. its clear it (ise delete karo)
