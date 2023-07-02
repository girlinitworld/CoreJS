// CoreJS. Part 4
//================================================================================================================================================================================
// 1. Write a JavaScript function that demonstrates the concept of this by creating an object with a method that uses this to access its own property.
function createObject() {
  return {
    a: "Hello",
    showProperty: function () {
      console.log("Task1. " + this.a);
    },
  };
}

let obj = createObject();
obj.showProperty();
console.log();
//================================================================================================================================================================================
// 2. Write a JavaScript function that demonstrates the concept of prototype by adding a new method to the prototype of an object and accessing it from an instance of that object.
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Task2. Hello, I am " + this.name);
};

let person = new Person("Helena");
person.sayHello();
console.log();
//================================================================================================================================================================================
// 3. Write a JavaScript function that demonstrates the usage of the call method to invoke a function with a specific "this" value and additional arguments.
function sayHelloCall(name) {
  console.log(`Task3. Hello, I'm ${name}! I am ${this.job}.`);
}

let designerCall = {
  job: "designerCall",
};

sayHelloCall.call(designerCall, "Helena");
console.log();
//================================================================================================================================================================================
// 4. Write a JavaScript function that demonstrates the usage of the apply method to invoke a function with a specific "this" value and an array of arguments.
function sayHelloApply(name, age) {
  console.log(`Task4. Hello, I'm ${name}! I'm ${this.job} and I'm ${age} years old.`);
}

let designerApply = {
  job: "designerApply",
};

let args = ["Helena", 30];

sayHelloApply.apply(designerApply, args);
console.log();
//================================================================================================================================================================================
// 5. Write a JavaScript function that demonstrates the usage of the `bind method to create a new function with a specific "this" value.
function sayHelloBind(age) {
  console.log(`Task5. Hello, ${this.name}! I'm ${this.job} and I'm ${age} years old.`);
}

var designerBind = {
  name: "Helena",
  job: "designerBind",
};

var bindHello = sayHelloBind.bind(designerBind);

bindHello(30);
console.log();
//================================================================================================================================================================================
// 6. Write a JavaScript constructor function that creates instances of a Book object with properties for title and author.
function Book(title, author) {
  this.title = title;
  this.author = author;
}
var book1 = new Book("Harry Potter", "JK Rowling");
var book2 = new Book("1984", "G. Orwell");

console.log(`Task6. Book1 is "${book1.title}" by ${book1.author}`);
console.log(`Task6. Book2 is "${book2.title}" by ${book2.author}`);
console.log();
//================================================================================================================================================================================
// 7. Explain the concept of prototypes in JavaScript and how they are used to achieve inheritance and share properties and methods between objects.

/*Prototypes in JavaScript are like templates that define shared properties and methods for objects. 
They enable inheritance, where objects can inherit from their prototypes, receiving access to those shared properties and methods. So when an object is created, 
it has a reference to its prototype. If a property or method is not found on the object itself, JavaScript looks for it in the prototype. This allows for code reuse.  
By linking prototypes, we can create hierarchical relationships between objects, getting inheritance and organizing code in a more structured way.*/

//================================================================================================================================================================================
// 8. Create a JavaScript class called Rectangle that represents a rectangle with properties for width and height. Include a static method calculateArea that calculates and returns the area of the rectangle.
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  static calculateArea(width, height) {
    return width * height;
  }
}

const rectangle = new Rectangle(4, 7);

console.log(
  `Task8. Rectangle width=${rectangle.width} and height=${rectangle.height} 
  and its area = ${Rectangle.calculateArea(rectangle.width, rectangle.height)}`
);

console.log();
