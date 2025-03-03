// functions inside function

const app = () => {
    const myfunc = function () {
        console.log("this is myFunc");
    }

    const addTwo  = function (num1, num2) {
        return num1 + num2;
    } 

    const mult = (num1 , num2) => num1 * num2;

 
    console.log("inside function ");
    myfunc();
    console.log(addTwo(2,3));
    console.log(mult(4,3));
    
}
app();