"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.addNumbers = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports.addNumbers = addNumbers;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
exports.Person = Person;
