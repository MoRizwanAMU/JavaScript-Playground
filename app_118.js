// static list vs live list

// querySelectorAll hamein static list degi. isme node list hoti hai
// getElementBySomeThing hame live list degi. isme html collection hota hai

const listItem = document.querySelectorAll(".todo-list li");
console.log(listItem);

const sixthItem = document.createElement("li");
sixthItem.textContent = "item 6";
const ul = document.querySelector(".todo-list");
ul.append(sixthItem);
console.log(listItem);
