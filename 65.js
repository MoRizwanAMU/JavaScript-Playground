// splice method        // it will change original array
// order =>   start , delete, insert  

// used splice method for delete and insert something between array




const myArray = ['item1', 'item2', 'item3'];
// for delete
// i can also print deleted item
const deletedItem = myArray.splice(1,1);
console.log(myArray);
console.log("deleted item is : ", deletedItem);


// for insert
 
myArray.splice(1,0,'inserted item');
console.log(myArray);






// insert and delete simultaneously
const array = ['firstItem', 'secondItem','thirdItem'];
const deleItem = array.splice(1,2,"inserted item1", "inserted item2");
console.log(array);
console.log("give me all deleted item => ", deleItem);



