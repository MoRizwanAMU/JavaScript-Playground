
const obj1 = {
    key1 : "value1",
    key2 : "value2",
}

const obj2 = {
    key3 : "value3"
} 
console.log(obj2.key1);    // i want to print, if key1 not present in obj2 then it will be search of obj1 of key1. how it will done

// i can write this code like this
const obj3 = {};  // empty object
obj3.key4 = "value4";
console.log(obj3.key4);

// there is one more way to create empty object
const obj4 = Object.create(obj1);
obj4.key5 = "vlaue5";
console.log(obj4.key5);
console.log(obj4.key1)   // now if value not exist in obj4 then i will go through obj1 and check the value
console.log(obj4);  // it will show [[prototype]]:object  => if some thing not find int this object js go through reference object.[[prototype]] is a referecne objec(obj1)and obj1 key:values

console.log(Object.getPrototypeOf(obj4));
console.log(obj4.__proto__);

  // these proto is same => __proto__ , [[Prototype]]
  // but prototype is different than this =>  __proto__ , [[Prototype]]

   // __protot__  => double underScores called dunder property
   // A dunder property (short for "double underscore" property) refers to special methods or properties in programming languages that start and end with double underscores (__).


// 1. Understanding the Prototype Chain
// Every JavaScript object has a hidden property called [[Prototype]], which references another object
// (its prototype). This allows inheritance—an object can use methods or properties from its prototype.
// If a property/method is not found in an object, JavaScript looks up the prototype chain until it finds the
// property or reaches null (end of the chain).










