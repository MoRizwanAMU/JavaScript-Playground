
// textContent and innerText

// change text
const mainHeading = document.getElementById("main-heading");
console.log("befor" , mainHeading.textContent);

mainHeading.textContent = "this is the new heading"


const forInerText = document.getElementById("main-heading").innerText= "this is something else"; 
console.log(forInerText); 
  // it will provide every text which one hidden using css (display : none) will be show


// but "textInner" not showing hiddent text
 