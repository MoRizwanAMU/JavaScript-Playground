// elem.insertAdjacentHTML(where, html);
// beforebegin
// afterbegin
// beforeend
// afterend 




// its all way veryEasy than append and prepend. here working same like append prepend before and after

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend", "<li> Teach Students </li>")            // here we can insert directly. working as append


const todoList1 = document.querySelector(".todo-list");
todoList1.insertAdjacentHTML("afterbegin", "<li> Teach hard ")  //  here we can insert directly. working as preppend


const todoList2 = document.querySelector(".todo-list")
todoList2.insertAdjacentHTML("beforebegin" , "<li> learn Coding </li>")   // here we can insert directly. working as before

const todoList3 = document.querySelector(".todo-list")
todoList3.insertAdjacentHTML("afterend" , "<li> coding is money </li>")   // here we can insert directly. working as after



 
