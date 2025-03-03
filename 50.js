// block scope vs function scope
// let and const are block scope
// var is function scope




// block scope vs function scope

{
    let firstName = "Rizwan";
    console.log(firstName);
}
// console.log(firstName); // we can access here in the case of const and let


{
    let firstName = "Yasir";
    console.log(firstName);     // these are different variable from over block
}

const firstName = "Lukman";
console.log(firstName);   // these are different block (variable) from over two block;

// let and const are block scope ↑




// var is function scope ↓
 {
    var myName = "Rizwan";
 }
 console.log(myName);  // we can access var from anywhere


{
    var otherName = "shaaz";
    console.log(otherName);

}
{
    
    console.log(otherName);
}



if (true) {
    var fstName = "shaahid";
}
console.log(fstName);


//let realName = "haleem";  // we can access through lexical scope
function myApp () {
    if (true) {
        var realName = "abdurrahman";
        console.log(realName);
    }
    if (true) {
        console.log(realName);
    }
    console.log(realName);   // we can access real anywhere under this function in the case of var
}
myApp();









