// keypress event
// mouseover event
// mouseleave event
const body = document.body;

body.addEventListener("keypress", (e) => {
    console.log(e);
    console.log(e.key);
})


const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover" , () => {
    console.log("mouseOver Event ocurred");
})

mainButton.addEventListener("mouseleave", () => {
    console.log("mouseLeave Event Ocurred");
})


 
 

