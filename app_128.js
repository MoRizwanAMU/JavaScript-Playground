// event bubbling / event propogation
// event capturing
// event delegation

// note => cycle like this => first all capture then second all bubbling


// its ↓ all called event bubbling / event propogation . its all not caputuring

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector (".parent");
const child = document.querySelector(".child")


child.addEventListener("click", () => {
    console.log("bubbled  child")
})  // not cupturing means false;

parent.addEventListener("click", () => {
    console.log("bubbled  parent")
});     // not cupturing means false;

grandparent.addEventListener("click", () => {
    console.log("bubbled  grandParent");
})      // not cupturing means false;

const body1 = document.body;
body1.addEventListener("click", () => {
    console.log("bubbled on body");
})    // not cupturing means false;




// its ↓ all called event event capturing
const grandparent1 = document.querySelector(".grandparent");
const parent1 = document.querySelector (".parent");
const child1 = document.querySelector(".child")

child1.addEventListener("click", () => {
    console.log("capture !!! child")
},true)     // true means capture

parent1.addEventListener("click", () => {
    console.log("capture !!! parent")
} , true);   // true means capture

grandparent1.addEventListener("click", () => {
    console.log("capture !!! grandparent");
} , true)   // true means capture

// const body = document.body;
document.body.addEventListener("click", () => {
    console.log("capture !!! body");
}, true)   // true means capture







// event delegation
const grandparent2 = document.querySelector(".grandparent");
grandparent2.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target)  // these one single event listener working on all three div. 
    console.log(e.target.textContent);
})