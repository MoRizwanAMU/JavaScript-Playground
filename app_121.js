// this keyword

const btn = document.querySelector(".btn-headline");

// in the case of normal function(anonymous function) this vlaue is button himsel 
btn.addEventListener("click", function() {
    console.log("you click me");
    console.log("vlaue of this");
    console.log(this);
})

// in the case of arrow function button value will be window object
btn.addEventListener("click", () => {
    console.log("you click me using arrow function")
    console.log(this);
})
console.log(window);  // this window is same like inside function window