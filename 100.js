
// 3rd example of closer

function myFunction(power){
    return function(number) {
        return number ** power;
    }
}

const square = myFunction(2);
console.log(square(2));

const cube = myFunction(3);
console.log(cube(3));



// i can minimize function using arrow function
const myFunc = pow => (num) => num ** pow  ;   // such type of shourtcut code written by experience programmer


const biquadrate = myFunc(4);
console.log(biquadrate(4));