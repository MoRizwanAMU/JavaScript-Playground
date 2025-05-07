const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();   // it is saving refresh of form 
const newTodoText =  todoInput.value;  // it will print
const newLi = document.createElement("li");
    // also we can use javaScript for add li item
     const newLiInnerHtml =   `                 
     <span class="text">${newTodoText}</span> 
     <div class="todo-buttons">
         <button class="todo-btn done">Done</button>
         <button class="todo-btn remove">Remove</button>
     </div>`;
// settin inner html of new li
    newLi.innerHTML = newLiInnerHtml
    todoList.append(newLi);
    todoInput.value = "";  // it will clear value
})

 
todoList.addEventListener("click", (e) => {
     // check if user clicked on done button then
   if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
   }
    if (e.target.classList.contains("done")){
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "Line-through";
    
   }
});