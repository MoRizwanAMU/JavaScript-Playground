// how to iterate object
// we have two way to iterate loop => 1.for in loop 2.object.keys


const person = {
    name : "harhsit",
    age : 22,
   "person hobbies": ["guitar", "sleeping","listening"]

}
for (let key in person) { 
    console.log(person[key])
}


// if we want key value pair

const details = {
    name : "harhsit",
    age : 22,
    "person hobbies" : ["guitar", "sleeping","listening"]

}
for (let key in details) { 
    //console.log(key, details[key])     using templete literals
    console.log(`${key} : ${details[key]}`);
}
 




         // using object.keys()
         // object.keys()  => this is build-in method
                     
const otherDetails = {
    name : "Rizwan",
    age : 24,
    "person hobbies" : ["coading", "hardworking","planing"]

}
 console.log(Object.keys(otherDetails))
 console.log(typeof (Object.keys(otherDetails))); // to check objec
 const val = Array.isArray(Object.keys(otherDetails)) // other way to check about object
 console.log(val);