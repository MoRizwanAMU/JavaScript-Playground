// innerHTML => way to change inner html

const headline = document.querySelector(".headline");
console.log(headline.innerHTML);   // under the header every element is called innerHtml
headline.innerHTML = "<h1>Inner html changed </h1>"
headline.innerHTML += "<button> need to learn deep </butotn>"
headline.innerHTML += "<button class=\"btn\"> learn hard </button>"   // i can give class like this  \"btn\" . its class mostly used for more reusable, stylable, and easy to select in JavaScript.
console.log(headline.innerHTML)


