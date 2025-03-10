// very very important for interview

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`;

    },
    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){
        return `lap pe atin hai dua ban ke tamanna meri`;
    }
}
function createUser (firstName, lastName, email, age, address){
    const user = Object.create(userMethods);  // isme proto set ho gya aor proto  userMethods object ka reference hai
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;  // java srcipt ko cheez yaha nhi milegi o proto me ja ke search karega, proto is objec:about,is18,sing
}
const user1 = createUser ("lukman", "bhai", "myEmail",14,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user2 = createUser ("rizwan", "bhai", "myEmail",14,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user3 = createUser ("Alia", "bhai", "myEmail",14,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
const user4 = createUser ("yasir", "bhai", "myEmail",14,"infron of Shahee jama masjid, navab yusuf road jaunpur 222139 uttar pradesh");
console.log(user1.about);
console.log(user2.about);
console.log(user1);  











