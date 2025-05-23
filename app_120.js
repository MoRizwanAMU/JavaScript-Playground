// intor to events
//  event means some thing happend after button press and hover like => click,botton,mousover etc
// there is 3 way to add event
        // 1. isnide html (not remcommended)
        // 2 way ↓   (not recommended because its overwrites first event)
        // 3. method -> addEventListner  (Recommended)
const btn = document.querySelector(".btn-headline");
console.log(btn);  // its showing like html element
console.dir(btn)  // its represent in the object form

// its not recommended way perform click event because we can not assign click even more than one time.
btn.onclick = function() { 
    console.log("you clicke me");           
}
// its overwrite first click
btn.onclick = function () {
    console.log("you clicked me second time")  
}


// its remcommended for using click event
function clickMe() {
    console.log("you clicked me using addEvenListener");
}
btn.addEventListener("click",clickMe);  // first "what event" and then "what will show"

// also we can write like this
btn.addEventListener("click", function() {
    console.log("you clicke me");
})

// also we can use arrow function
btn.addEventListener("click", () => {
    console.log("using arrow function");
})