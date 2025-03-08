

const user1 = {
    firstName : "Rizwan",
    age : 9,
    about :  function (){
        console.log(this.firstName, this.age);
    }
}
user1.about();
  // const myFunc = user1.about;   => we can not store like this -> very important
 const myFunc = user1.about.bind(user1);
 myFunc();
 