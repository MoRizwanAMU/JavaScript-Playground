// super keyword
// animal class is a super class (parent class,base class)

class Animal{
    constructor (name, age){
        this.name = name;    // Key: 'name', Value: name argument
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

// if we want to add speed in dog
class Dog extends Animal{
    constructor(name, age, speed){
        super(name,age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running ${this.speed} kmph`
    }
    
}

const tommy = new Dog("tommy", 3,45);  // this is object . i can call object to istance    why objec=> name:tommy, age:3
console.log(tommy);

console.log(tommy.run());

