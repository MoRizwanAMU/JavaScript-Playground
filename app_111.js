// its all related with screen shot of dom tree

const rootNode = document.getRootNode();
console.log(rootNode);  // for know the root node

console.log(rootNode.childNodes)  // for know the child node

        // we can see child node of document
console.log(rootNode.childNodes[0]);
  // another way
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);

// if we want to see object representaion then using dir
console.dir(htmlElementNode);


// know child node of html
console.log(htmlElementNode.childNodes[0]);
console.log(htmlElementNode.childNodes[1]);
     // another way to write same code
const headElementNode = htmlElementNode.childNodes[0];
console.log(headElementNode);
const bodyElementNode = htmlElementNode.childNodes[1];
console.log(bodyElementNode);
 

// if we want to show parent of head element node
console.log(headElementNode.parentNode);

// sibling relationship
console.log(headElementNode.nextSibling);

// it will not include spaces . it will directoly provide the element
console.log(headElementNode.nextElementSibling); // but now date browser not showing spaces it already give the direct element

// show the child node of head element
console.log(headElementNode.childNodes);
 


// we will reach the parent of h1(h1 parent is container/div) and then provide some style
const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.parentNode);  // parent node if found
const h1Parent = (h1.parentNode);
h1Parent.style.color = "#efefef";
h1Parent.style.backgroundColor = "#2f4858";
        // we can reach div/container parent
const divParent = h1Parent.parentNode;
console.log(divParent);  // reached on body
divParent.style.backgroundColor = "#495673";
    // we can select body directly
const body = document.body;
console.log(body);


// if we select something it will be search under this. like thi ↓
const head = document.querySelector("head");
console.log(head);   // now everything will be search under head
const title = head.querySelector("title");
console.log(title); 
// we can see child node of title
console.log(title.childNodes);


// now we are selecting div/container then will remove space/text
const container = document.querySelector(".container"); 
console.log(container.childNodes); // now showing 5 child included 3 text/spaces
// now we are goint to remove text/spaces
console.log(container.children); // now after used children spaces/text have been removed


// 5 : 16