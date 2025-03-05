// sort method
// sort method will change original array

 
const number = [5,9,1200,400,3000] ;  // all the number in the form of string, so it will sort on the base of ascii vlaue of each element of first character
//[5,9,1200,400,3000] 
// ascii value [53,57,49,52,51]
number.sort();  
console.log(number);



// for sort number
const num = [5,9,1200,400,3000];    // one element substract to other element
num.sort((a,b) => {
    return a - b;      // i can write in single line => : number.sort((a,b) => a-b);
})
console.log(num);



// if we want to sort decending order then

const nums = [5,9,1200,400,3000];
nums.sort((a,b) => {
    return b-a;
})
console.log(nums);

 

// it is sorting base on alphbet order(ascii value) => base on word first letter
// first preference to sort capital letter because ascii value capital < small
const userName = ['harshit', 'abcd', 'mohit', 'nitish', 'DCA'];
userName.sort();
console.log(userName);



// sor product low to high and high to low

const products = [
    {productId : 1, productName : "p1", price : 300},
    {productId : 2, productName : "p2" , price : 3000},
    {productId : 3, productName : "p3" , price : 200},
    {productId : 4, productName : "p4" , price : 8000},
    {productId : 5, productName : "p5", price : 500}
];

const lowToHigh = products.slice(0).sort((a,b) => {
    return a.price - b.price;
})
console.log(lowToHigh);

const highToLow = products.slice(0).sort((a,b) => {

    return b.price-a.price;
})
console.log(highToLow);








