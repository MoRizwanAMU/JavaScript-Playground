// how to get the dimension of element
// if we want to know height and width

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();       // it will provide whole dimension detials
console.log(info);  
const info1 = sectionTodo.getBoundingClientRect().height;       // it will give only height
console.log(info1) ; 




