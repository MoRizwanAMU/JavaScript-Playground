// promise and setTimeout

//  i want to resolve / reject promise after 2 second

function myPromise() {
    return new Promise( (resolve, reject) => {
        const value = true;
        setTimeout(  () => {
            if (value) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    })
}

myPromise()
    .then( () => {      // if this true then it will be execute
        console.log("resolved");
    })
    .catch( () => {         // if false then it will be execute
        console.log("error");
    })