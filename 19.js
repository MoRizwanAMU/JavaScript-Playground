// switch statement 


// using if else

let day = 9;

if(day === 0 ){
    console.log("Sunday");
}else if(day === 1){
    console.log("Monday");
}else if (day === 2){
    console.log("Tuesday");
}else if (day === 3){
    console.log("Wednesday");
}else if(day ===4 ){
    console.log("Thursday");
}else if (day ===5 ){
    console.log("Friday");
}else if (day === 6) {
    console.log("Saturaday")
}else {
    console.log("Invalid day");
}



// using switch statement

let days = 5;

switch(days) {
    case 0: 
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case   4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Sauturday");
        break;
    default :
        console.log("Invalid Day");
        
}