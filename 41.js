// object destructuring

const band = {
    bandName : "led zeppelin",
    famousSong : "stairway to heaven",
};

// if we want to store value of bandName and famousSong
const var1 = band.bandName;
const var2 = band.famousSong;
console.log(var1, var2);

   // i can perform same work in other way
const { bandName, famousSong} = band;  // bandName and famouSong become normal variable
console.log(bandName, famousSong);


// if we want to change variable name bandName to var3 and famousSong to var4 then ↓
let {bandName:var3, famousSong:var4} = band;
console.log(var3,var4);



// we can store rest Of Variable using spread Operator
const person  = {
    name : "Suhel",
    age : 18 ,
    course : "MCA",
    status : "placed",
    company  : "Qspider(Qspider is a Coaching center.But now days Qspider calling himself i am training Institute)",
    packge : "-0.4LPA",
    StudentStaus : "Confused",

};
let {naam, age,course,...restOfAll} = person;
console.log(naam);
console.log(restOfAll);


