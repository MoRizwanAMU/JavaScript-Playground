// class keyword
// javaScript class is faked because when we define class but underneath, javaScirpt still uses prototype-based inheritance.
//

class Animal{
    constructor (name, age){
        this.name = name;   // Key: 'name', Value: name argument
        this.age = age;     // Key: 'age', Value: age argument
    }

    eat(){      // method1
        return `${this.name} is eating`;
    }

    isSuperCute(){  // method2
        return this.age <= 1;
    }

    isCute(){   // method3
        return true;
    }

}
 
const Animal1 = new Animal("tome",2)  // call the class => for invoke class we must need to write new keyword
console.log( Animal1);  //  animal1 is an object because     name: "Tommy",  age: 3

console.log( Animal1.eat());   // there is no need to use new keyword at the time of method call 
console.log(Animal1.isCute());




// dog class

class Dog {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    eat(){      // method1
        return `${this.name} is eating`;
    }

    isSuperCute(){  // method2
        return this.age <= 1;
    }

    isCute(){   // method3
        return true;
    }
}

const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.eat());
console.log(tommy.isCute());





    // on top => i have animal class so that there is no need to make other class for anima. 
    // we will inherit all property from animal class for other animals
 
class Cat extends Animal {       // there is make cat class and also inherit all property of Animal class
                                 // cat is a subClass(derived class) and animal is a parent class(base class,SuperClass)
        // cat class me name,age(property) nhi milegi to animal class me search hoga
}
const billi = new Cat("safed wali billi",1);
console.log(billi);
console.log(billi.isCute());




    // object ko itance bhi bolte hai