// function returning promise
 
function ricePromise() {
    const bucket = ["rice", "salt", "oil", "coffee", "chips", "vegetables"];
    return new Promise((resolve, reject) => {
        if (bucket.includes ("vegetables") && bucket.includes("salt") && bucket.includes ("vegetables")) {
            resolve({value : "friedRice"});
        }
        else {
            reject("coud not do it");
        }
    })
}

ricePromise().then (
    // jab promise resolve hoga
    (myFriedRice) => {
        console.log("let eat", myFriedRice);
    }
).catch ( (error) => {
    console.log("error");
}) 





