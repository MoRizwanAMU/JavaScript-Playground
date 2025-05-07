// callbacks, callback hell , pyramid of doom
// asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
 

// callback hell
setTimeout( () => {
    heading1.textContent = "heading1";
        heading1.style.color = "violet";
            setTimeout( () => {
            heading2.textContent = "heading2";
            heading2.style.color = "red";
                setTimeout( () => {
                heading3.textContent = "heading3"
                heading3.style.color = "blue";
                    setTimeout ( () => {
                    heading4.textContent = "heading4";
                    heading4.style.color = "yellow";
                         setTimeout( () => {
                            heading5.textContent = "heading5";
                            heading5.style.color = "pink";
                                setTimeout( () => {
                                    heading6.textContent = "heading6";
                                    heading6.style.color = "chocolate"
                                      setTimeout ( () => {
                                        heading7.textContent = "heading7";
                                        heading7.style.color = "green";
                                      }, 1000);
                                },1000);
                         }, 1000);
                    },1000);
            }, 1000);
        }, 1000); 
}, 1000);



// same work perform using function
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");
const heading11 = document.querySelector(".heading11");
const heading12 = document.querySelector(".heading12");
const heading13 = document.querySelector(".heading13");
const heading14 = document.querySelector(".heading14");
const heading15 = document.querySelector(".heading15");
const heading16 = document.querySelector(".heading16");
 

function changetext (element, text, color, time, onSuccessCallback, failureCallback) {
    setTimeout( () => {
        if (element) {
         element.textContent = text;
        element.style.color = color;
        if (onSuccessCallback) {
            onSuccessCallback();
        }
        }
        else {
            // console.log("your element does not exist")
            if (failureCallback) {
                failureCallback();
            }
        }
        
    }, time);
}
        // pyramid of doom ->  The Pyramid of Doom (also known as Callback Hell) happens when multiple nested callbacks make code unreadable. 
       
        // callback hell / pyramid of doom
 changetext(heading8, "heading8", "voilet", 1000, () => {
    changetext(heading9, "heading9","Magenta", 1000, () => {
        changetext(heading10, "heading10", "cyan", 1000, () => {
            changetext(heading11, "heading11", "gold", 1000, () => {
                changetext(heading12, "heading12", "teal", 1000, () => {
                    changetext(heading13, "heading13", "brown", 1000, () => {
                        changetext(heading14, "heading14", "Navy", 1000, () => {
                            changetext(heading15, "heading15", "olive", 1000, () => {
                                changetext(heading16, "heading16", "turquoise", 1000, () => {
                                }, () => { console.log("heading15 does not exist")})
                            }, () => { console.log("heading14 does not exist")})
                        }, () => {console.log("heading14 does not exist")})
                    }, () => { console.log("heading13 does not exist")})
                }, () => { console.log("heading12 does not exist")})
            }, () => {console.log("heading11 does not exist")})
        }, () => {console.log("heading10 does not exist")})
    }, () => {console.log("heading9 does not exist")});
 }, () => { console.log("heading8 does not exist")});


