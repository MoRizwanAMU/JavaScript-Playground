            // object
//object are reference type
// arrays are good but not sufficient
//  for real world data
// object store key value pairs
// object don't have index


// how to create object
// {name : "Rizwan",age : 24}; => also this called object literal
const person = {name : "Rizwan" ,age: 24};
console.log(typeof person);



// how to access data from objects
console.log(person.name);
console.log(person.age);
// also i can access data using square bracket
console.log(person["name"]); // beacause object always form of the string
console.log(person["age"]);




// i can use array inside object
const details = {
    name : "yasir",
    age : 15,
    hobbies : ["playing cricket", "pubg", "create problem"]  // this array inside object
}
console.log(details);
console.log(details.hobbies); // you can perform all task like normal array
// add key value pairs to objects
details.gender = "male";
console.log(details);
// we can also add using backet notation


 
 

 