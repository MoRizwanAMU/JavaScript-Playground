// nested Destruturing

const users = [
    {userId : 1, firstName : "Rizwan", gender : "male"},
    {userId : 2, firstName : "Shadab", gender : "male"},
    {userId : 3, firstName : "suhel", gender : "male ..."},
];
// if we want to print one by one object then ↓
const [user1,user2,user3] = users;
console.log(user1);

// if we want to user1 Name, user2 skip and user3 gdgender then ↓
const [{firstName: userFistName}, , {gender}] = users; // we have also change of the 1st variable
console.log(userFistName,gender);


 