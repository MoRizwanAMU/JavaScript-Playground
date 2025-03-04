// map method


const number = [2,3,4,5,6,7];

const square = function(num) {
    return num * num;  // we must need to use return in map intead of console.log
};

const squareNum = number.map(square);  // map method always return new array
console.log(squareNum);




// i can defined function under the map
number.map(function(cubic){
    return console.log(cubic * cubic  * cubic);
})
      // or
const sqrNum = number.map(function(numb) {
    return numb * numb;
})
console.log(sqrNum);




//  store firstName of users ↓
const users = [
    {firstName : "Rizwan" , age : 24},
    {firstName : "salman", age : 21},
    {firstName : "rahile", age : 35},
    {firstName : "swaleh", age : 41}
 ];
 users.map(function (user){
    return console.log(user.firstName);
 });


   // first we will stor then print
const userNames = users.map((user) => {
    return user.firstName;
})
console.log(userNames);