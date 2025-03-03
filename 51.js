// default parameters

function addTwo (a,b) {
    return a+b;
}
const ans = addTwo(3,4);
console.log(ans);



// if we dont pass second argument then we want to set b=1 as default value

// before s2015 ↓
function addNum (a,b) {
    if (b === undefined) {
        b = 1;
    }
    return a + b;
}
const answer = addNum(8);
console.log(answer);

// but modern javaScript( after s2015)
function sumOfNum (a,b=1) {
        return a + b;
}
const answer2 = sumOfNum(10);
console.log(answer2);