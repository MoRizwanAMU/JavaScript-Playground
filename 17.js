// nested if else

// game => wining number 19
// 19 your guess is right
// 17 your guess is too low
// 20 is guess is too high


let winningNumber = 19;
let userGuess = +prompt("Guess a number");

// prompt taking input using string so that uesed +to convert into number
//console.log(userGuess, typeof userGuess);

if (userGuess === winningNumber) {
    console.log("Your guess is right ");
} else {
    if(userGuess < winningNumber) {
        console.log("your guess too low ");
    }else {
        console.log("your guess is too high ")
    }
}
