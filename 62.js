// every method


const numbers = [2,4,6,8,10];
        // show true if every element meet the condition
function isEven (nums){
    return nums % 2 === 0;
}
const ans = numbers.every(isEven);
console.log(ans);

// i can write like thsi ↓ in single line
const manyNumber = [10,12,14,16,18,20];

const answer = manyNumber.every((number) => number % 2 === 0);
console.log(answer);






// if we want to check every product less than 30,000
const userCart = [
    {productId : 1, productsName : "mobile",  price : 12000},
    {productId : 2, productsName : "laptop", price : 22000},
    {productId : 3 , productsName : "tv", price : 150000}
]

function finalCart(proPrice){
    return proPrice.price < 30000;
}
const result = userCart.every(finalCart);
console.log(result);
 
// in sigle line
const finalResult = userCart.every((cartItem) => cartItem.price < 30000);
console.log(finalResult);





