// get and set attributes

const link = document.querySelector("a");
console.log(link.getAttribute("href"));
console.log(link.getAttribute("href").slice(1))  // if we dont want to see #with home or remove #with home

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));


// we can change href or link using set
const link1 = document.querySelector("a");
link1.setAttribute("href", "https://google.com");
console.log(link1);
console.log(link1.getAttribute("href"))  // we can see href hase been change to google.com
