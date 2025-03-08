 // we are lerning this,window and strict in this file

 
 
 // "use strict"   => i can use strict mode on top
 
console.log (this);
console.log(window);
// both are give me same output(window object)


function myFunc(){
    console.log(this);
}
myFunc();

// boths ↓↑ are working same(output same)
 function thisfunc(){
    console.log(this);
 }
 window.thisfunc()



 // if we use strict mode("use strict") then it will be show undefined instead of window
  // "use strict";  => i can define stric mode ("use strict") here.
 function myfuncti(){
   //"use strict"
    console.log(this);
 }
myfuncti();
// note => strict mode working correctly on javascript in innerhtm or show output in vs code










