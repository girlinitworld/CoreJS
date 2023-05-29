//Getting Started With Javascript
//1. Write a JavaScript function that takes two numbers as parameters and returns their sum.
function sum(a, b) {
  return a + b;
}
console.log("Task1. sum = " + sum(3, 5));

//2. Write a JavaScript function that checks if a variable is of type 'string' and returns true if it is, false otherwise.
function isString(a) {
  return typeof a == "string";
}
console.log("Task2. is String Hello World = " + isString("Hello World"));
console.log("Task2. is String 6 = " + isString(6));

//3. Write a JavaScript function that checks if a given value is a primitive data type (number, string, boolean, null, or undefined) and returns true if it is, false otherwise.
function isPrimitiveType(a) {
  if (
    typeof a == "number" ||
    typeof a == "string" ||
    typeof a == "boolean" ||
    typeof a == "undefined" ||
    a == null
  )
    return true;
  else return false;
}
console.log(
  "Task3. isPrimitiveType HelloWorld = " + isPrimitiveType("HelloWorld")
);
console.log("Task3. isPrimitiveType 5 = " + isPrimitiveType(5));
console.log("Task3. isPrimitiveType true = " + isPrimitiveType(true));
console.log("Task3. isPrimitiveType null = " + isPrimitiveType(null));
console.log("Task3. isPrimitiveType undefined = " + isPrimitiveType(undefined));
console.log("Task3. isPrimitiveType object = " + isPrimitiveType(new Object()));

//4. Explain the concept of hoisting in JavaScript and provide an example to demonstrate the difference between hoisting with var and hoisting with let (or const).

/*hoisting meaning that variable will be "automatically" assigned to "undefined"
If you use var x; then var is kinda "moved to the top" and defined as "undefined", so basically you can use it in any line of code
If you use let x; it will be defined only in this exact line and if you try to use it before declaration you would have ERROR*/

console.log("defined by var =" + x); //will show undefined
var x;

//console.log("defined by let = " + y); //will result in ReferenceError
let y;

//5. Compare and explain the differences between var, let, and const when declaring variables in JavaScript.

/* Difference in terms of hoisting for var and let I explained in task 4. Moreover, var is either block scoped or global scoped, when let is always block scoped. 
In addition, such variables defined by var and let can be reassigned later on. 
Const differently will give an error if you try to reassign it to something else. */

//6. Write a JavaScript function that checks if a given value is an object and returns true if it is, false otherwise.
function isObject(a) {
  if (typeof a == "object" && a != null) return true;
  else return false;
}

console.log("Task6. isObject new Object = " + isObject(new Object()));
console.log("Task6. isObject new String = " + isObject(new String("Hello")));
console.log("Task6. isObject null = " + isObject(null));
