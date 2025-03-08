// methods => kisi function ko object ke andar likhte hai to use method kahte hai



const person = {           // this mean person => this=person
    firstName : "yasir",  
    age : 8,
    about : function(){
        console.log(`my name is ${this.firstName} and ${this.age}`);
    }
}
person.about();





function personInfo(){
    console.log(`person name is ${this.firstName} and age ${this.age}` );
}
const person1 = {
    firstName : "Mohammad yasir",
    age : 8,
    about : personInfo,
};

const person2 = {
    firstName : "Ahmad",
    age : 12,
    about : personInfo,
};

const person3 = {
    firstName : "Sadique",
    age : 29,
    about : personInfo,
}
person1.about();
person2.about();
person3.about();