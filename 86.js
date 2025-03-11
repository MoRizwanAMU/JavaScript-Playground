    // class keyword 
    // class are fake in javaScript


class CreateUser {
    constructor(firstName, lastName, email, age, address){      // constructor create object
        console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old`
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return `lap pe atin hai dua ban ke tamanna meri`;
    }
    func(a){    // giving parameter
        console.log(a);
    }
};

const user11 = new CreateUser("Ahmad", "bhai", "lukmanEmail",32,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh")
// without new keyword we can not call class constructor
const user12 = new CreateUser ("lukman", "bhai", "lukmanEmail",22,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user13 = new CreateUser ("Mohammad", "Rizwan", "RizwanEmail",19,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
console.log(user11.firstName);
console.log(user12.sing());
console.log(Object.getPrototypeOf(user11));     // cheking prototype => how many things add in prototype
user11.func("Rizwan");






// both ↑↓ are code same





function CreateNewUser (firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // return this;   // new keyword return himself so that there is no need to write return
}

CreateNewUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
};
CreateNewUser.prototype.is18 = function(){
    return this.age >= 18;
};
CreateNewUser.prototype.sing = function(){
    return `lap pe atin hai dua ban ke tamanna meri`;
}


const user1 = new CreateNewUser ("lukman", "bhai", "lukmanEmail",22,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user2 = new CreateNewUser ("Mohammad", "Rizwan", "RizwanEmail",19,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user3 = new CreateNewUser ("Alia", "israr", "AliyaEmail",17,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user4 = new CreateNewUser ("yasir", "belanna", "YasirEmail",15,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");