// optional chaning


const user = {
    firtName : "harshit",
    address : {houseNumber : '234'}
};

console.log(user.firstName);
console.log(user.address);
console.log(user.address.houseNumber); // if hous number not mention then it will be showing error
// so that we used ?. if present then show if not present then show undefine but not showing error

const myDeta = {
    firstName : "Rizwan",
    address : {houseNumber : ""}
};
console.log(myDeta?.firstName);
console.log(myDeta?.address?.houseNumber); // house number not here but not showing error, if house number enter then it will be show






