// undefined
let name;
console.log(typeof name);

//null
let myVariable = null;
console.log(myVariable);

console.log(typeof null);
// bug, this is bug because null is null not object


 
// Bigint
console.log(Number.MAX_SAFE_INTEGER);
// if your number more than this 9007199254740991 the used BigInt

let myNumber = BigInt(795279579375979759275349572975929759);
console.log(myNumber);
// other way of write BigInt
let sameNumber = 123n;
console.log(typeof sameNumber);
// you can also store short number(123) in BigInt form
console.log(myNumber + sameNumber);