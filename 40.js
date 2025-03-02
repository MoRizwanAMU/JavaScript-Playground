
// spread operator

   // spread  opertor in case of array
    // this ↓ is clone on array using spread opertor[...variable]
const array1 = [1,2,3];
const array2 = [5,6,7];

const newArray = [...array1, ...array2, 89,69];
console.log(newArray);

const newArray1 = [..."abc"];   // now string has been spread
console.log(newArray1);

const newArray2 = [..."123456789"];
console.log(newArray2);



// this is ↓ clone on object using spread operator

const obj1 = {
    key1 : "value1",
    key2 : "value2",
};
const obj2 = {
    key3 : "value3",
    key4 : "value4"
}

const newObject1 = {...obj1,...obj2, key76: "value76"};
console.log(newObject1);
    

  // Key value pair with a string

  const newObject4 = {..."abc"};
  console.log(newObject4);      // every single stirng show with index number in the form of key:value pair
  const newObject5 = {..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"};
  console.log(newObject5);


  // we can spread many item
  const newObject6 = {...["itme1", "item2" ,"item3"] };
  console.log(newObject6);

  
