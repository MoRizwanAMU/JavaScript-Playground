
// appendChild;
// some old methods to support poor((bad) EnterNet Explorer. because append,prepend,remove,beforebegin afterbegin etc. so that we used this ↓ old methods for supporting internet Explorer

// insertBefore;
// replaceChild;
// removeChild;
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
const referenceNode = document.querySelector(".first-todo")
li.textContent = "its hard";
// ul.appendChild(li);
ul.insertBefore(li, referenceNode);  // we inserign li before referenceNode
 


// we can replace 
const ul1 = document.querySelector(".todo-list");
const li1 = document.createElement("li");
li1.textContent = "i don't know";
const referenceNode1 = document.querySelector(".first-todo");
ul1.replaceChild(li1, referenceNode1)  // new chile li and old child refereceNode1
 

// we can use all tag as per as