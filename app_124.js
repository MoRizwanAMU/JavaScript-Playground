
console.log("scirpt start")
const allButtons = document.querySelectorAll(".My-buttons button");

// using forEach because => forEach will take callBack function
allButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let num = 0;
        for (let i = 0; i <= 100000000; i++){
             num += i;
        }
        console.log(event.currentTarget.textContent , num);
    })
})


let outervar = 0;
for (let i = 0; i <= 100000000; i++){
    outervar += i;
}
 console.log("value of outer variable is ", outervar) ;


console.log("Script End");



// Note => browser contain two things 1. javaScript Engine(v8) 2. web  API (DOm API, Fetch API LocalStorage Api, Geolocaition API WebSockets API)