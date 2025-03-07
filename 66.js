// iterables => jispe ham for of loop use laga sakte hai
//  as string and array is are iterable



// for string
 const myName = "Rizwan";
 for (let firstName of myName){
    console.log(firstName);
 }


// for array
const items = ['item1', 'item2', 'item3', 'item4'];
for (let allstring of items){

    console.log(allstring);
}



// for object

// const users = 
//         {name : "Rizwan", gender : "male", department : "computer sc"};
 
// for (let details of users){
//     console.log(details);
// }

// object is not iterable in javaScript





// array like object => jinke pass length property hoti hai aor jinko
// ham index se access kar sakte hai
// example - string

const Middlename = "Rizwan";
console.log(Middlename.length + "\n"+  Middlename[2]);

