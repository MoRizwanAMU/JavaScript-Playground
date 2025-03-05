// filter method



const number = [1,2,3,4,5,6,7,8,9]

// if we want to filter even numbers
const isEven = function (num) {
    return num % 2 === 0;
}
const EvenNum = number.filter(isEven);
console.log(EvenNum);


// if we want to filter odd number
const isOdd = function(numb) {
    return numb % 2 !== 0;
}
const oddNum = number.filter(isOdd);
console.log(oddNum);


// we can define directly callBack function
const evenNumber = number.filter(function(num){
    return num % 2 === 0;
})
console.log(evenNumber);