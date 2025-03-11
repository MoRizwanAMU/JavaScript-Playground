// new keyword

 
function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}
// here ↓ using new keyboard
const user1 = new createUser("Rizwan",8);

// new keyword create 3 things
// 1.) empty object => this refer to empty object{}     like this = > this= {}
// 2.) return this  =>  means return empty object{}
// 3.)  make prototype itsefl useing new keyword like 82file( const user = Object.create(createUser.prototype); )
// we don't need work manually beacause new keyboard done itself this taski =>  const user = Object.create(createUser.prototype); 
console.log(user1);
console.log(user1.about())  // i can call like previous file
user1.about();  // also i can call like this









// its called contructor function because this construcctor function construct the obect
// if a constructor function call with the help of new keyword then follow a convention => constructor function name first letter start 
// should be capital letter. its make easy to the developer  becaue developer will know it will be call using new keywork
function CreateNewUser (firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // return this;   // new keyword return himself so that there is no need to write return
}

// we have added method in createNewUser prototype
CreateNewUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
};
CreateNewUser.prototype.is18 = function(){
    return this.age >= 18;
};
CreateNewUser.prototype.sing = function(){
    return `lap pe atin hai dua ban ke tamanna meri`;
}


const user11 = new CreateNewUser ("lukman", "bhai", "lukmanEmail",22,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user12 = new CreateNewUser ("Mohammad", "Rizwan", "RizwanEmail",19,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user13 = new CreateNewUser ("Alia", "israr", "AliyaEmail",17,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user14 = new CreateNewUser ("yasir", "belanna", "YasirEmail",15,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
console.log(user11);
console.log(user12.is18());



