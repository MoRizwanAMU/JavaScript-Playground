// little practice with click event

const allButtons = document.querySelectorAll(".My-buttons button");
//  console.log(allButtons.length);     // it will show all buttons

allButtons.forEach((button) => {
    button.addEventListener("click" , (event)=>{
        event.target.style.backgroundColor  = "#FFB0B0";
        event.target.style.color  = "#yellow";
        event.target.style.border = "5px solid black";
    })
})




