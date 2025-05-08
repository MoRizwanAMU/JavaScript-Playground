// async await

const URL = "https://jsonplaceholder.typicode.com/postss";


fetch(URL) 
    // .then (response => response.json())  both syntax are same
    .then (response => {
        return response.json();
    })
    .then (data => {
        console.log(data);
    });


    // if i use async before function thenafter call it will be  always(bydefault) provide/return promise
    // aysnc always work on background of browswer. so that where aysnc then it will goes to the background    
async function getposts() {
    const response = await fetch(URL);
    if(!response.ok) {
        throw new Error ("Something went wrong");
    }
    const data = await response.json();
    return (data);   // it is returning promise with value of resolve of data
}
getposts()
    .then ((myData) => {
        console.log(myData);
    })
// const returned = getposts();
// console.log(returned);  // it is returning promise

.catch (error => {
    console.log("inside catch");
    console.log(error);
})