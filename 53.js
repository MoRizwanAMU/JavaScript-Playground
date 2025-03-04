// parameter destructuring

// we are used parameter destructuring in object and also most used in react


// parameter destructuring ↓
const person = {
    firstName : "Mohammad Rizwan",
    gender : "Male"
};
function printDetails (obj) {
    console.log(obj.firstName);
    console.log(obj.gender);
    console.log(obj);
}
printDetails(person);

// we can same destructur like this ↓
const details = {
    myName : "Mohammad Rizwan",
    work : "Business",
    type : "hard work"
}
function  fullDetails({myName,work,type}) {
    console.log(myName);
    console.log(work);
    console.log(type);
}
fullDetails(details);