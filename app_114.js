// document.createElement()
// append
// prepend
// remove


// best way to add new elelment. so that mostly developer used this way to add element
const newTodoItem = document.createElement("li") // it wil create new li elelment. but li still empty
console.log(newTodoItem);

const newTodoItemText = document.createTextNode("teach Students") // create a text
// we can write like this ↓
// newTodoItem.textContent = "teach Student";   after this line we don't need to write   newTodoItem.append(newTodoItemText); 

const todoList = document.querySelector(".todo-list");
newTodoItem.append(newTodoItemText);   // now it added in li tag
todoList.append(newTodoItem);  // now finally it has been added on ul tag. then it will be show on browser
console.log(newTodoItem);


// append added in last
// prepend added in starting
const addedNewTexPrependInLi = document.createElement("li");
const newTex = document.createTextNode("study deep");
const addedInTodoList = document.querySelector(".todo-list");
addedNewTexPrependInLi.prepend(newTex);
addedInTodoList.prepend(addedNewTexPrependInLi);


// if we want to remove a element like deepStudy
const deepStudy = document.querySelector(".todo-list li");
deepStudy.remove();
console.log(deepStudy);




// for insert => before insert and after insert
// if we want to insert befor ul we use "before" like append and prepend
// if we want insert after ul we user "after" like append and prepend
 

 










