
const user1 = {
    firstName : "Rizwan",
    age : 8,
    about : function(){
        console.log(this.firstName, this.age);
    }
}
user1.about();

 // i can write this↑ program like this↓ (ulternate way to create method)
const user2 = {
    firstName : "Mohammad",
    age : 16,
    about(){
        console.log(this.firstName);
    }
}
user2.about();