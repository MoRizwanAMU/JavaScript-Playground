// // how can add click even multiple element (button)

// const firstButton = document.querySelector("#one") ;
// firstButton.addEventListener("click", function() {
//     console.log("you clicked me");
// })

// // if we want add click event all three buttons
// const allButtons = document.querySelectorAll("button");         // all button selected in web pages
// console.log(allButtons);

// // another way select all button inside of myButton class
// const allButtons1 = document.querySelectorAll(".My-buttons");         // all button selected in web pages
// console.log(allButtons1);




// we can add all event using loop - best way
const allButtons2 = document.querySelectorAll(".My-buttons button") ;    

// using for of loop
for(let button of allButtons2){       // this eventListener have been added all three buttons 
    button.addEventListener("click", function(){
        console.log("you clicked me !!!");
        console.log(this);  // jo button click karoge us "button ka content with button tag" print hoga
        console.log(this.textContent)  // it will show button content only
    })
}
// Note => in the case of arrow function it will be show undefined

// usign for loop
for (let i = 0; i < allButtons2.length; i++){
    allButtons2[i].addEventListener("click" , function() {
        console.log("click show using simple for looop");
    })
}

// using for each => Note => forEach always take input using call back function 
allButtons2.forEach(function (button) {
    button.addEventListener("click", function(){
        console.log("click using for each")
    })
})