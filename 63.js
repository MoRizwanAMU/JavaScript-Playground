// some method

// show the true if one codition satisfy

const numbers = [2,5,3,9];
const ans = numbers.some((num) => num % 2 === 0);
console.log(ans);




// if i want to check any product above 100,000
const userCart = [
    {productId : 1, productsName : "mobile",  price : 12000},
    {productId : 2, productsName : "laptop", price : 22000},
    {productId : 3 , productsName : "macbook", price : 150000}
]

const answer = userCart.some((cartItem) => cartItem.price > 100000);  // macbook price over than 1 lakh
console.log(answer);




