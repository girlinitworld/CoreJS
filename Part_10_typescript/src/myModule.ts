export function addNumbers(a: number, b: number): number {
  return a + b;
}

export class Person {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
