// clone using object.assign

const obj = {
    key1 : "value1",
    key2 : "value2",
}
const obj2 = obj;

obj.key3 = "value3"; // i add key:value in ojb but also change reflect in obje 
console.log(obj);   // because obj2 stor object in same memory location
console.log(obj2);



// if i used spread operator then it will not add in both(its first way of cloning)
const info = {
    name1 : "Rizwan",
    name2 : "yasir",
}
const info2 = {...info};
info.name3 = "Lukman";
console.log(info);
console.log(info2);


// 2nd way of cloning
const user = {
    firstName : "Rizwan",
    SecondName : "Mohammad",
}
const user2 = Object.assign( {},user)
user.lastName = "bhai";
console.log(user);
console.log(user2);