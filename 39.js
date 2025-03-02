// computed properties

const key1 = "ojbkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// if we want like this
//  const obj = {
//   ojbkey1 : "myvalue1",
//   ojbkey2 :  "myvalue2",
// }

const obj = {
    [key1] : value1,   // [key1] this <= is called coputed propeties
    [key2] : value2,
}
console.log(obj)


// Normal way

const otherobj = {};

otherobj[key1] = value1;
otherobj[key2] = value2;
console.log(obj);
