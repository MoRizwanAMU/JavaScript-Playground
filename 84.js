//      new keyword


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
// console.log(user11);
// console.log(user12.is18());

//   show the key
for (let key in user1){
    console.log(key);   // its printing constructor function key with prototype key(about,is18,sing)
}

console.log("");  // it will print emty line

// if we dont want to print prototype key then we use hasOwnProperty
for(let key1 in user1){
    if (user1.hasOwnProperty(key1)){
        console.log(key1);
    }
}