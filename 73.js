// call, apply and bind => we will learn about these three


// we can use .call of any function at the time of function call




// call
function hello(){
    console.log("hello world");
}
hello.call();



const user1 =  {
    firstName : "Rizwan",
    age : 8,
    about : function(){
        console.log(this.firstName, this.age);
    }
}
user1.about();

// if we want to print user2 value without write about
const user2 = {
    firstName : "yasir",
    age : 10,
}
user1.about.call(user2);      // if you write call then pass the value
user1.about.call(user1);
user1.about(user2);
user1.about()          // if you not write call then you can dont need to pass






const details = {

    firstName : "lukman",
    age : 6,
    knowDetails : function(hobby, favrMusician,place){
        console.log(this.firstName, this.age, hobby, favrMusician,place)
    }
}
details.knowDetails.call(details, "guitar", "mozart","manikalan");



// also i can write like this
 function about(hobby,favriatCri){
    console.log(this.firstName,this.age,  hobby,  favriatCri )
}
const user10 = {
    firstName : "ali",
    age : 2,
    // about : function(hobby,favriatCri){
    //     console.log(this.firstName,this.age,  hobby,  favriatCri )
    // }
}

about.call(user10 , "cricket", "cricketer");

// apply => we will arguments in the form of arrays
about.apply(user10,[ "coding", "coder"]);


// bind => bind not showing output only returning function
 //    about.bind(user10,"sleeping" , "coding");     => i will store this function in varaible for future use
 const func = about.bind(user10,"sleeping", "coding");
 func();   // call this function

















