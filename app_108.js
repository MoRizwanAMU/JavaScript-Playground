// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll


const navItems = document.getElementsByClassName("nav-item"); // it select all nav-item means HTML collection
console.log(navItems);  // it will show all element in the form of array like object. we can persform tast like indexing, iterating

console.log(navItems[0]) // it will show first nave items

console.log(typeof navItems);   // its showing array like object not arrau

console.log(Array.isArray (navItems)); // showing false mean not an array



// querySelectorAll
const navItems1 = document.querySelectorAll(".nav-item");
console.log(navItems1);    // it showing array like object so we can use indexing  and also showing nodelist 
console.log(navItems1[1]); // on second index showing todo
