"use strict";
//3. Implement a generic class for a stack data structure that supports operations like push, pop, and peek. Demonstrate type safety and usage of the stack class by implementing Generics.
class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        return this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
}
const numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.pop());
console.log(numberStack.peek());
// Creating a stack of strings
const stringStack = new Stack();
stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack.pop());
console.log(stringStack.peek());
