    // prototype


// i can treate javascript function like
// javascipt built in function combo of object and function.   javaScript function => function and object 

function helloFucn(){
    console.log("hello world");
}

console.log(helloFucn.name)   //.name property tell name of the function

// you can add(make) your own properties
helloFucn.myOwnProperty = "very unique value";
console.log(helloFucn.myOwnProperty);


// function provide more usefull properties

// function can provide free space(empty objec{})
// free space means empty oject{}
// aor empty object{} ko bolte hai prototype


console.log(helloFucn.prototype);
// only function prototype property provide karta hai


  // proven => function ke pass prototype property hoti hai
  if (helloFucn.prototype){
    console.log("prototype is present");  // this conditon is become true
  }else {
    console.log("prototype is not present");
  }




  // object ke pass prototype property nhi hoti hai proven
  // onject
  const thisObj = {
    key1 : "Value1"
  }
  if (thisObj.prototype){
    console.log("prototype is present")
  }else {
    console.log("prototype is not present")
  }

//  for array
const myArr = ["array1"];
if (myArr.prototype){
    console.log("yes")
}else{
    console.log("no");
}




   // prototype sirf function ke pass hota hai
function myFucn(){
    console.log("hello wrold"); 
}
// we can treat like empty object{}
// we can remove and add any property  and function

myFucn.prototype.abc = "abc"  // add abc property
myFucn.prototype.x = "xyz"  // add x property
myFucn.prototype.trana = function(){    // add trana function
    return "ye mera chaman hai mera chaman, mai apne chaman ka bulbul hoon"
} 
console.log(myFucn.prototype);
console.log(myFucn.prototype.trana())  // trana fucntion has called


// prototype simply is an object



