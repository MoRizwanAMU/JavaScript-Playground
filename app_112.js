const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);   // if i want to check classes in classTodo

// if we want to add some classes through js in classTodo
sectionTodo.classList.add('bg-dark');

// we can remove any class form classTodo
sectionTodo.classList.remove("bg-dark");

//if we want to check such class exist are not in classTodo
const ans = sectionTodo.classList.contains("container"); 
console.log(ans);

// toggle => basically working like - if bg-dark class already present then toggel will be remove if not present then toggle will be add bg-dark
sectionTodo.classList.toggle("bg-dark");





// we are goint perform some task with header
const header = document.querySelector(".header");
console.log(header.classList);   // it will show all classes in header

 header.classList.add("bg-dark")
 console.log(header.classList);