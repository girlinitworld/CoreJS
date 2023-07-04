//5. Create a TypeScript module that exports multiple functions and classes. Import the module in another file and demonstrate usage of the exported entities.
import { addNumbers, Person } from "./myModule";

console.log(addNumbers(5, 10));

const person = new Person("John", 25);
person.greet();
