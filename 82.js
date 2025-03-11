// very very important for interview
//      prototype


// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;

//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing : function(){
//         return `lap pe atin hai dua ban ke tamanna meri`;
//     }
// }


// we can add these↑ method in here↓ using protoype =>line 31
function createUser (firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);  // isme proto set ho gya aor proto  userMethods object ka reference hai
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;  // java srcipt ko cheez yaha nhi milegi o proto me ja ke search karega, proto is objec:about,is18,sing
}
// we have added method in createUser prototype
createUser.prototype.about = function(){
             return `${this.firstName} is ${this.age} years old`
};
createUser.prototype.is18 = function(){
             return this.age >= 18;
         };
createUser.prototype.sing = function(){
             return `lap pe atin hai dua ban ke tamanna meri`;
}

const user1 = createUser ("lukman", "bhai", "lukmanEmail",22,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user2 = createUser ("Mohammad", "Rizwan", "RizwanEmail",19,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user3 = createUser ("Alia", "israr", "AliyaEmail",17,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user4 = createUser ("yasir", "belanna", "YasirEmail",15,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
console.log(user1.about());
console.log(user2.sing());
console.log(user3.is18());  
console.log(user4.sing());
console.log(user4.about());











