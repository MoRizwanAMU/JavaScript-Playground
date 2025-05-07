// promise -> future value
// promise is feature of borwser not javaScipt


console.log("script start");

const bucket = ["coffee", "chips", "vegetable", "salt", "rice"];

// promise is a object its contain two value -> 1.status 2. status ki value
const frideRicePromise = new Promise( (resolve, reject) => {             // // new is a constructor and iside bracket passed callback function . also i can called executer function
    if (bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("friedRice");
        resolve({value : "friedRice"});  // i can pass every type of value insdie reolve
    } else {
        reject ("could not do it");   // i can pass every type of value insdie re
    }
});

// Note -> as a javaScript developer you will create or produce little bit but consume is higher than creat

// then is a feature of browser not a javaScipt
// consume   -> how to consume   
frideRicePromise.then( (myFriedRice) => {   //then always take a callback function. i can pass two callback function inside then and inside myFriedRice stored resolve values
    console.log("let eat", myFriedRice);

 // }  , (error) => {console.log(error)}) // reject value will save inside error
 
}).catch( (error) => {   // after promis refected .catch will be run
    console.log(error);
})

setTimeout( () => {
    console.log("hello from setTimeout");
} ,1000);

for (let i = 0; i <= 100; i++) {
    console.log(Math.random() * i);
}

 console.log("scritp end");

 // note -> first execute microtask queue and after empty then callback queue(macrotask queue) will be execute 