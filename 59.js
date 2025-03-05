// reduce method


// sum using reduce method
const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});
console.log(sum);


// i can pass sum initial value like this ↓
const sumOf = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 100);   // initial value of accumulator is 100, that mean its 100 instead of 0.
console.log(sumOf);




// if we want to add cart all money
const userCart = [
    {prodId : 1, prodName : "mobile", prodPrice : 12000},
    {prodId : 2, prodName : "laptop", prodPrice : 22000},
    {prodId : 3, prodName : "tv", prodPrice : 15000}
];

const totalAmount = userCart.reduce((totalPrice,currentProduct) => {
    return totalPrice + currentProduct.prodPrice;
},0);
console.log(totalAmount);


// total price      currentProduct   return
//   0               12000            12000
// 12000             22000            34000
// 34000             15000            49000 ans