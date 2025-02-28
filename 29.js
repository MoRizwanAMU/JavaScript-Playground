// how to clone array(eak array ka use karke doosri array bnana)

// how to concatenate two arrays




// clone(copy) of array 1st way
let array1 = ["item1","item2"];
let array2 = ["item1", "item2"];
array1.push("item3");
console.log(array1 === array2);
console.log(array1);
console.log(array2);

// 2nd way of cloning
// using slice
let array3 = ["item1", "item2"];
let array4 = array3.slice(0);
console.log(array4);

// 3rd way of cloning
// using concat

let array5 = ["item1", "item2"];
let array6 = [].concat(array5);
console.log(array6);

// 4th way to creat clon of array
// using spread operator [...variableName]

let array7 = ["item1", "item2"];
let array8 = [...array7];
console.log(array8);





// if we want to add extra item after clon
let array10 = ["item1", "item2"];
let array11 = array10.slice(0).concat(["item3","item4"]);
console.log(array11);
           // another way
let array12 = ["item1", "item2"];
let array13 = [].concat(array12,["item3,item4"]);
console.log(array13);
    // anohter way using spread operator
let array15 =["item1", "item2"];
let array16 = [...array15,"item3","item4"];
console.log(array16);
       //other way
let array19 = ["item1","item2"]
let array20 = ["itme3","item4"];
let array21 = [...array19,...array20];
console.log(array21);