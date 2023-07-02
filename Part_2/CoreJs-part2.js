//CoreJS. Part 2
//1. Write a JavaScript function that takes an array of numbers as input and returns the sum of all even numbers in the array.
function sumOfEven(values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 == 0) {
      sum += values[i];
    }
  }
  return sum;
}
console.log(
  "Task1. sum of even values in array = " +
    sumOfEven([1, 2, 4, 6, 7, 1, 7, 7, 2])
);

//2. Write a JavaScript function that takes two input values and returns the concatenation of the two values as a string.

function valuesSumAsString(a, b) {
  return "" + a + b;
}

console.log("Task2. sum of values 4 and 5 = " + valuesSumAsString(4, 5));
console.log(
  "Task2. sum of values Hello and 5 = " + valuesSumAsString("Hello", 5)
);
console.log("Task2. sum of values 4 and 5 = " + valuesSumAsString(4, null));
console.log(
  "Task2. sum of values 4 and 5 = " + valuesSumAsString(undefined, 5)
);

//3. Write a JavaScript function that checks if a given number is positive, negative, or zero and returns the corresponding string: "Positive", "Negative", or "Zero".
function checkNumber(a) {
  return a > 0
    ? "Positive"
    : a < 0
    ? "Negative"
    : a == 0
    ? "Zero"
    : "Not a number";
}
console.log("Task3. check number 3 = " + checkNumber(3));
console.log("Task3. check number -4 = " + checkNumber(-4));
console.log("Task3. check number 0 = " + checkNumber(0));
console.log("Task3. check number hello = " + checkNumber("hello"));

//4. Write a JavaScript function that calculates the factorial of a given number using a while loop.

function calculateFactorial(n) {
  let factorial = 1;
  if (n == 0 || isNaN(n)) return 0;
  while (n > 0) {
    factorial *= n;
    n--;
  }
  return factorial;
}
console.log("Task4. factorial of 5 = " + calculateFactorial(5));

//5. Create an object called person with properties name and age. Add a method called greet that returns a greeting string using the name property.
let person = {
  name: "Helena",
  age: 25,
  greet() {
    return "Hello, " + this.name + "!";
  },
};

console.log("Task5. Greeting for Helena = " + person.greet());

//6. Create a constructor function called `Car` that takes parameters for `make`, `model`, and `year`. Add a method called `getInfo` that returns a string containing the car's details.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  this.getInfo = function () {
    return this.make + " " + this.model + " (" + this.year + ")";
  };
}

let myCar = new Car("Audi", "Q5", 2020);
console.log("Task6. Car constructor function = " + myCar.getInfo());
