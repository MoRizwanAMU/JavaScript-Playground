// Map (object) is a data structure used to store key-value pairs...we are studying map object in this file
// map() (method) is an array method that creates a new array by applying a function to each element.






// key -> always in (99.9%) stirng and 0.1% chances key in symbol
// object literal
const person = {
    firstName : "harshit",
    age : 7,
    1 : "one"
};
console.log(person.firstName);
console.log(person["firstName"]);

for (let check in person){  // for in used iterate over object properties .its return only key not values.
    console.log(typeof check); // all value is string becaue js automatically change every key into string
}





// using map ->  add key value pair in map use set
const Details = new Map();
Details.set('firstName' , 'Rizwan');
Details.set('age' , '7');
Details.set(1,'one');       // 1 is a number
Details.set([1,2,3], 'this is object');
Details.set({1 : 'one'} ,'its key value pair')
console.log(typeof Details);

// checking type of key
for (let key of Details.keys()){    // keys() is a builtin method of map
    console.log(`key : ${key}, type : ${typeof key}`);
}

// using get method
console.log(Details.get('firstName'));
console.log(Details.get(1));

// if we want to print all keys
console.log(Details.keys());

// using for of loop 
for (let key of Details.keys()){
    console.log(key)
    console.log(typeof key);  // for check data type
}





const allDetails = new Map();
allDetails.set('myName', 'Rizwan');
allDetails.set('age',7);
allDetails.set(1,'one');

for (let key of allDetails){
    console.log(key);   // its providing array
    console.log(Array.isArray(key));  
}
// for of loop giving array so we can use like array destrucutred
for (let [key,value] of allDetails){
    console.log(key,value);
}






// we can directlty pass arrays(in arrays key value pairs) in map(object)
const detail = new Map([['firstName', 'Rizwan'],['age',7]]);
console.log(detail);




// used addition key value pair using map object
const person1 = {
    id : 1,
    firstName : "harshit",
}
const extraInfo = new Map();
extraInfo.set(person1, {age : 8, gender : "male"});
console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).age);
