
//  innerHTML to add html element

const todoList = document.querySelector(".todo-list");
console.log(todoList)
console.log(todoList.innerHTML);  // it will show inner html of todo list

// todoList.innerHTML = "<l1> new Todo List </li>";          // it will intantly changed text on html pages

// if we do not want to change innerhtml we want to add another todo list like that. that means todo list will remain and another todo list added
todoList.innerHTML = todoList.innerHTML + "<li> New To to do </li>";
todoList.innerHTML = todoList.innerHTML + "<li> Tech students </li>";

// note => we should not use innenrHtmL because your pages will be very slow because broswer will be upload whlole pages of html  css and js then render your add


// when you should use it, when you shuld not use it

    // we should use for change html
// todoList.innerHTML = "<l1> new Todo List </li>";          // it will intantly changed text on html pages

    // we do for add new html element
// todoList.innerHTML = todoList.innerHTML + "<li> New To to do </li>";



// best way to add todo list is 114.js