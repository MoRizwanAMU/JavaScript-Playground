// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll

// array like indexing => indexing, length property

// we can use for iterate html colletion
// simple for loop
// for of loop
// forEach 
// Note => we can't use forEach method to iterae through HTML collection

// we can also change nodelist to array then perfor task on the array


// change background color , font color
const navItems = document.getElementsByTagName("a");
for (let i = 0; i < navItems.length; i++){
    // console.log(navItems[i]);

    const changeOfNavItem = navItems[i];
    changeOfNavItem.style.backgroundColor = "#5F99AE";
    changeOfNavItem.style.color = "#F5ECE0";
    

}

// using for of loop 
for (let changeStyle of navItems){
    
    changeStyle.style.borderRadius = "5px"
    changeStyle.style.paddingBottom = "5px"

}


// Note => we can't use forEach method to iterae through HTML collection

// navItems.forEach((allnavItems) => {
//     allnavItems.style.textDecoration = "none"
// })


// it ↑ all about HTML collection







// Now we will learn about nodeList
// we can use all three loop(for for of forEach) in nodelist
let allnav = document.querySelectorAll("a");
console.log(allnav);

for (let i = 0; i < allnav.length; i++){
    allnav[i].style.fontWeight = "bold";
}

// we can also change nodelist to array then perfor task on the array
