// find method


const myArray = ["hello", "cat", "dog", "lion"];

function islength3 (string){
    return string.length === 3;
}
const ans = islength3("dog");
console.log(ans);


 


const Array = ["hello", "cat", "dog", "lion"];

function find3word( arraylist){
    return arraylist.length === 3;
}
const answer = Array.find(find3word);
console.log(answer);




// using arrow function
const thisArray = ["hello", "cat", "dog", "lion"];
const finans = thisArray.find((word) => word.length === 3);
console.log(finans);

// i can write like this
const theseArray = ["hello", "cat", "dog", "lion"];
function theckLenth (somthing) {
    return somthing.length === 2;
}
const finalanswer = theseArray.find(theckLenth);





// find using id 
const users = [
    {userId : 1, userName : "Rizwan"},
    {userId : 2, userName : " anas"},
    {userId : 3, userName : "Rizwan"},
    {userId : 4, userName : " anas"},
]

const myUser = users.find((user) => {
    return user.userId === 3;
})
console.log(myUser);
// i can write like this
const fianlUser =  users.find((user) => user.userId === 3);
console.log(fianlUser);