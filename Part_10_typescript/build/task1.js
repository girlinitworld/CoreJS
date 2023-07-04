"use strict";
//1. Implement a class hierarchy using inheritance and demonstrate method overriding and calling super methods.
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("The animal makes a sound.");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("The dog barks.");
    }
    greet() {
        console.log(`The dog ${this.name} wags its tail.`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("The cat meows.");
    }
    purr() {
        console.log(`The cat ${this.name} purrs.`);
    }
}
const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
animal.makeSound();
dog.makeSound();
cat.makeSound();
dog.greet();
cat.purr();
