// promise.resolve
// promise.chaining

const myPromise = Promise.resolve(5);   // promise.resolve() will take a value and this value will be print after resolve
myPromise.then(value => {   // if resolve / true then it will be execute
    console.log(value);
})

// i can write like this
Promise.resolve(8). then ( value => {
    console.log(value);
})

// Note => then method always return promise


// promise.chaining ↓

function myPromise1() {
    return new Promise( (resolve, reject) => {
        resolve("yes");
    })
}

myPromise1(). then (value => { console.log(value); 
value += " keep going on"
return value;  // promis returning not value like (   return promise.resolve(value)  );
})
.then( (value => {
    console.log(value);  // now promise become "keep going on "
    value += " right work"
    return value;
}))
.then( (value => {
    console.log(value);
}))

// it was all promise.chainig ↑

// Note => only then use on pormise not string
// "yasir".then( value => {                  // i can not write like this
//     console.log(value);
// })  