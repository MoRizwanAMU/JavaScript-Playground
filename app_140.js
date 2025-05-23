//  XHR stands for XMLHttpRequest — it's a JavaScript object used to make HTTP requests to a server from the browser.


const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
// step1
console.log(xhr.readyState);
xhr.open("GET", URL);
console.log(xhr.readyState);


// xhr.onreadystatechange = function() {
//     console.log(xhr);
    
//     console.log(xhr.readyState);
//     if (xhr.readyState === 4) {
//         console.log(xhr.readyState);
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//         console.log(typeof data);
//     }
// }


// when ready state will be 4 then it will be work. this code equal to upper (if condition ) code or upper function.
xhr.onload = function () {     
    console.log(xhr.readyState);
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);

}
xhr.send();







// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)