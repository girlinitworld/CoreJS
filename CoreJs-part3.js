//CoreJS. Part 3.
//1. Write a JavaScript function that takes an array of numbers as input and returns a new array where each element is multiplied by 2.
function byTwo(numbers) {
  return numbers.map((number) => number * 2);
}

const values = [1, 2, 3, 4, 5];
console.log(
  " - Task1. new array [1, 2, 3, 4, 5] multiply by2 = " + byTwo(values)
);

//================================================================================================
//2. Write a JavaScript function that takes an array as input and returns the length of the array.
function arrayLength(numbers) {
  return numbers.reduce((accumulator) => accumulator + 1);
}

console.log(
  ` - Task2. array [1, 2, 3, 4, 5] length custom function = ${arrayLength(
    values
  )} and predifined = ${values.length}`
);

//==========================================================================================================================================
//3. Write a JavaScript function that takes an array of strings as input, sorts the strings in ascending order, and returns the sorted array.
function sortArray(values) {
  return values.sort();
}
const stringValues = ["ee", "aa", "kk", "bb", "cc", "dd", "cd"];
console.log(
  ` - Task3. old =[${stringValues}] and new sorted asc string array = " ${sortArray(
    stringValues
  )}`
);

//========================================================================================================================
//4. Write a JavaScript function that takes two arrays as input, combines them into a single array, and returns the result.

function combineTwoArrays(array1, array2) {
  return array1.concat(array2);
}

const array1 = [1, 10, "hello"];
const array2 = [2, 6, "really"];
const array3 = combineTwoArrays(array1, array2);
console.log(
  ` - Task4. combine two arrays = ${array3} and length is ${array3.length}`
);

//========================================================================================================================
//5. Write a JavaScript function using an arrow function expression that takes two numbers as input and returns their sum.
const sumOfTwo = (a, b) => a + b;

console.log(
  " - Task5. arrow function sum of two numbers 8 and 9 = " + sumOfTwo(8, 9)
);

//================================================================================================================================================================================
//6. Write a JavaScript function that takes multiple arguments using the rest operator and returns the sum of all the arguments. If no arguments are provided, the function should return 0.
function sumOfArguments(...args) {
  if (args.length === 0) {
    return 0;
  } else return args.reduce((sum, current) => sum + current);
}

console.log(
  " - Task6. sum of all elements (1, 1, 2, 2) = " + sumOfArguments(1, 1, 2, 2)
);
console.log(
  " - Task6. sum of all elements and one more (1, 1, 2, 2, 7) = " +
    sumOfArguments(1, 1, 2, 2, 7)
);
console.log(" - Task6. sum of nothing = " + sumOfArguments());

//===============================================================================================================================================================================
//7. Write a JavaScript function that demonstrates the concept of variable scope by declaring a variable inside a block and trying to access it outside the block. Explain the output or error that occurs.
function someFunction() {
  if (true) {
    let hello = "hello";
    var world = "world";
  }
  console.log(" - Task7. Output = " + world); //will display world
  //console.log(hello); //ReferenceError: hello is not defined
}
//console.log(hello); //ReferenceError: hello is not defined
//console.log(world); //ReferenceError: world is not defined
someFunction(); //will display world but fail with reference error on hello

/* since the let (and const) are block scoped variables they will exist only inside defined scopes, yet var is not block-scoped, so it can be accessed outside its block*/

//====================================================================================================================================================================================
//8. Write a JavaScript function that demonstrates closure by creating an inner function that has access to the outer function's variables. Invoke the inner function and observe the output.
function someClosure() {
  const name = " - Task8. Hello";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const innerFunction = someClosure();
innerFunction(); // will display Task8. Hello
//displayName(); //displayName is not defined

//===============================================================================================
//9. Write a JavaScript function that uses recursion to calculate the factorial of a given number.
function recursionalFactorial(value) {
  if (value === 0 || value === 1) return 1;
  return value * recursionalFactorial(--value);
}
console.log("- Task9. Factorial of 5 = " + recursionalFactorial(5));
