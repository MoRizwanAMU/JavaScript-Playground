// select element using query selector method

// query selector will be work for everyone like id class tag etc as per as css

const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

const header = document.querySelector(".header");
console.log(header);

const navItem = document.querySelector(".nav-item");  // only first nav item will be selected. it will not check furthre so that 2nd and 3rd will be ignore 


const allNavItem = document.querySelectorAll (".nav-item"); // it will select all classes of nav-item 
console.log(allNavItem);