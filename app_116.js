// clone nodes

const ul = document.querySelector(".todo-list");        // select
const li = document.createElement("li");  // create element
li.textContent = "new todo";  // write text
ul.append(li);      // append text in element
// ul.prepend(li);     // using this line prepend finished and append will be show. because i hav only one node. so that for using append and prepend together we need to clon(copy);


// clone (copy) for use append and prepened together
const ul1 = document.querySelector(".todo-list");
const li1 = document.createElement("li");
li.textContent = "another Todo";
const li3 = li.cloneNode(true);  // true provide deep coling(deep cloning means li ke child bhi clone hoga)
ul.append(li);
ul.append(li3);


