// and or operator

// if we need to check more than one condition
let Name = "Rizwan";
let age = 24;

// using if else
if (Name[0] == "R") {
    console.log("your name start with R ");
}
if (age > 18 ) {
    console.log("Your are above 18");
}


// these are same code using and operator
let firstName = "Mohammad";
age = 28;
if(firstName[0] == "M" && age > 18 ) {
    console.log("Name start with M and age above 18");
}else {
    console.log("Name not starting 'H' or age lower than 18")

}

// or || operator
let myName = "Yasir";
let age4 = 29;

if (myName[0] == "Y" || age > 18){
    console.log("I am iside if blog");
}else {
    console.log("insise else block");
}