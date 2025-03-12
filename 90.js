 // getter and setters

class person{
    constructor (firstName, lastName, age,address){

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    fullName (){
        return `${this.firstName} ${this.lastName}`;
    }

    get otherDetails (){    // using get we can call p method like properties thats mean we can call without using parentheses()
        return `${this.address}`;
    }

    setName (firstName,lastName){   // if we want to change name after make object then i should use setName Method
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set fullName1(fullName1){
        // fullName.split(" ")
        // Mohammad yasir  => ye Mohammad tak split kare (means => space tak split karega). split karke aisi list bana lega => [Mohammad, yasir]
        const [firstName, lastName] = fullName1.split(" ")  //after array destructured set value in variable
        this.firstName = firstName;
        this.lastName = lastName;

    }
}

 const person1 = new person("Mohammad",  "Rizwan", 7 , "infron of shahi jama Masjid, navab yusuf raod 222139 jaunpur U.P");    // this is object/instance
console.log(person1);
console.log(person1.fullName());  // this is calling constructor
console.log(person1.otherDetails)  // using get we can call like property thats mean without using parentheses()
console.log(person1.lastName); // it's calling properties

    // 1) change name after making object
    person1.firstName = "Lukman";
    person1.lastName = "bhai";
    console.log(person1.firstName);
    console.log(person1.lastName);

    // 2) change name after making object using setName method
person1.setName("Mohammad" , "yasir");
console.log(person1.firstName);
console.log(person1.lastName);

 // 3) change name after using set and destructuring
 person1.fullName1 = "alia israr";
 console.log(person1);
 
 









