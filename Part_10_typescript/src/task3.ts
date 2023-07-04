//3. Implement a generic class for a stack data structure that supports operations like push, pop, and peek. Demonstrate type safety and usage of the stack class by implementing Generics.
class Stack<T> {
  private stack: T[];

  constructor() {
    this.stack = [];
  }

  push(item: T): void {
    this.stack.push(item);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  peek(): T | undefined {
    return this.stack[this.stack.length - 1];
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

console.log(numberStack.pop());
console.log(numberStack.peek());

// Creating a stack of strings
const stringStack = new Stack<string>();
stringStack.push("Hello");
stringStack.push("World");

console.log(stringStack.pop());
console.log(stringStack.peek());
