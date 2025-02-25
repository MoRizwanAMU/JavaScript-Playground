// trim()
// toUpperCase()
// toLowerCase()
// slice


// trim()
let firstName = "     Rizwan  ";
console.log(firstName.length);

// trim will give new string without spaces
firstName.trim();
let newString = firstName.trim();
console.log(newString.length);

// i can check without define a new varibale
firstName = firstName.trim();
console.log(firstName,firstName.length);

// toUpperCase()
let secondName = "shaahit";
secondName = secondName.toUpperCase();
console.log(secondName);

// other way to store string
let none = "shaaz";
none.toUpperCase();
nextnone = none.toUpperCase();
console.log(nextnone);


// toLowerCase()
let head = "MOhammad HaBEEb hAAl";
head = head.toLowerCase();
console.log(head);



// using Sice()
let takeString = "ahmad Shadab";
let finalString = takeString.slice(0,5);
console.log(finalString);

