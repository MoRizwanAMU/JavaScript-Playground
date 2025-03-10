 

const user1 = {
    firstName : "Mohammad",
    lastName : "Rizwan",
    email : "mo.rizwan.mca.amu@gamil.com",
    age : 2,
    address : "infron of shahi jama masjid, navab yusuf road , jaunpur 222139 uttar pradesh",
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function (){
        return `this.age >= 18`;
    }

}
const detaills = user1.about();
console.log(detaills);






// 1.function (that function create object)
// this is better approach better over written code. in this ↓ code we will take input(firstName,age,lastName and so on) using function and then we will be return
// 2. add key value pair
// 3. object ko return karega
function createuser (firstName,lastName,email,age,address){
    const user = {}  // empty object
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    };
    user.is18 = function(){
        return this.age <= 19;
    }
    return user;
}
const ans = createuser("Rizwan", "bhai", "myEmail",14,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
console.log(ans);
const printMethod = ans.about() ;  // call method
console.log(printMethod);
const is18 = ans.is18(); // call method
console.log(is18);

// we are goint better than this code in file no 78