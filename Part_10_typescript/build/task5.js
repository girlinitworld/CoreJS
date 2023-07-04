"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//5. Create a TypeScript module that exports multiple functions and classes. Import the module in another file and demonstrate usage of the exported entities.
const myModule_1 = require("./myModule");
console.log((0, myModule_1.addNumbers)(5, 10));
const person = new myModule_1.Person("John", 25);
person.greet();
