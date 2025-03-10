
// arrow function does not have own this. its take this from our sarounding (our sarounding means window object or one level up from our object)

const user1 = {
    firstName : "Rizwan",
    age : 7,
    about : () => {
       // console.log(this);   => here this showing window object
        console.log(this.firstName, this.age);
    }
}
user1.about(user1);


