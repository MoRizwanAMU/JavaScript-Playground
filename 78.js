function createuser (firstName,lastName,email,age,address){
    const user = {}  // empty object
    user.firstName = firstName;
    user.lastName = lastName;
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
const user1 = createuser("Rizwan", "bhai", "myEmail",14,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
console.log(user1);
const printMethod = user1.about() ;  // call method
console.log(printMethod);
const is18 = user1.is18(); // call method
console.log(is18);
const user2 = createuser("shahzad", "bhai", "myEmail",14,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user3 = createuser("ashar", "bhai", "myEmail",14,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user4 = createuser("aqib", "bhai", "myEmail",14,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");




// so int this↑ code for every users create these 2 methods(about,is18), this method occupy memory. suppose we have million
// user so million time will be store these two object in memory so that we are going optimize this ↑ code here↓

const userMethods = {   // these methods only one time occupu memory
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function (){     // these methods only one time occupu memory
        return this.age >= 18;
    }
}

function createUser1(firstName,lastName, email,age,address){
    const user = {} // empty object
    user.firstName = firstName;
    user.lastName = lastName;
    user.address = address;
    user.age = age;
    user.about = userMethods.about;  // here calling memory reffrence/address . so that extra memory is not occupuying for each users
    user.is18 = userMethods.is18;    // here calling memory erfferecne / addresse. so that extra memory is not occupuying for each users
    return user;
}
const user11 = createUser1 ("shahid", "bhai", "myEmail",14,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user12 = createUser1 ("Sadique", "bhai", "myEmail",14,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user13 = createUser1 ("salman", "bhai", "myEmail",14,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
console.log(user11,user12);
console.log(user11.about());
console.log(user12.about());

// i am goint write more optimize code in file no 79
