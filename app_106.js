// change the style of elements

const mainHeading = document.querySelector("div.headline h2") ;
console.log(mainHeading.style); // it will show whole style tag
mainHeading.style.color = "blue";
mainHeading.style.backgroundColor = "pink"  // in js "-" is a error so that in css use camelCase instead of minus 
mainHeading.style.border  = "4px solid green"