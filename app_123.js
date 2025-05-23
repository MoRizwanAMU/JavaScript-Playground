// event object

const firstButton = document.querySelector("#one");
firstButton.addEventListener("click", function() {
    console.log(this);  // this containe button value himself
})          // note => in the case of arrow function this value has been changed intp window object
firstButton.addEventListener("click", function(event) {
    console.log(event);   // event perform on point event
});


const allButtons = document.querySelectorAll(".My-buttons button");
for (let button of allButtons) {
    button.addEventListener("click", function() {
        console.log(this);
        console.log(this.textContent);
    })
}


// in the case of arrow function it will show undefined but we can add event
const allButtons1 = document.querySelectorAll(".My-buttons button");
for (let button1 of allButtons1){
    button1.addEventListener("click" , (event) => {
        console.log(event.target);      // likely "target" and "currentTarget" is same
        console.log(event.currentTarget);
    })
}


