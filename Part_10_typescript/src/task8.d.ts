//8. Create a TypeScript type declaration file for an external library that lacks TypeScript support. Declare the necessary types and interfaces to enable type checking and autocompletion for the library.
declare module "task8" {
  export function myFunction(arg1: string, arg2: number): void;

  export class MyClass {
    constructor(arg1: string);
    public myMethod(): void;
    public myProperty: number;
  }

  export interface MyInterface {
    name: string;
    age: number;
    getInfo(): string;
  }
}
