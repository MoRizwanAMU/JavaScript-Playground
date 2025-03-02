// object inside array
// very useful in real world applications


// object inside array => very useful in realworld applications
const users = [
    {userId : 1, firstName : "Rizwan", gender : "male"},
    {userId : 2, firstName : "Shadab", gender : "male"},
    {userId : 3, firstName : "suhel", gender : "male"},
];
console.log(users);
// if we want to iterate

for(let details of users) {
    console.log(details);   
}

// if want access only user Id

for (let personDetails of users) {
    console.log(personDetails.userId);
}

// if we want to access firstName
for (let detailsOfName of users) {
    console.log(detailsOfName.firstName);
}