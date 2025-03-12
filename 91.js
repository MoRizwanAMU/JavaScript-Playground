
// static methods and properties


class person{
    constructor (firstName, lastName, age ){

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
         
    }

        // we can call directly using class without make a objec with the help of static keyword
        static information( ){
            return `this is person class `;
        }

        // a way using stati property
        static desc = `static property`

    get fullName (){
        return `${this.firstName} ${this.lastName}`;
    }


    set fullName1(fullName1){
        // fullName.split(" ")
        // Mohammad yasir  => ye Mohammad tak split kare (means => space tak split karega). split karke aisi list bana lega => [Mohammad, yasir]
        const [firstName, lastName] = fullName1.split(" ")  //after array destructured set value in variable
        this.firstName = firstName;
        this.lastName = lastName;

    }

    eat(){      // method1
        return `${this.firstName} is eating`;
    }

    isSuperCute(){  // method2
        return this.age <= 1;
    }

    isCute(){   // method3
        return true;
    }
}

const person1 = new person ("Mohammad", "Rizwan", 7);
console.log(person1.eat());

// i am calling  of class of  static wihout making an objec
const info = person.information();
console.log(info);

// print direc of static property using class without object
console.log(person.desc);






