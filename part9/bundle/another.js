/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./CoreJs-part1.js":
/*!*************************!*\
  !*** ./CoreJs-part1.js ***!
  \*************************/
/***/ (() => {

eval("//Getting Started With Javascript\r\n//1. Write a JavaScript function that takes two numbers as parameters and returns their sum.\r\nfunction sum(a, b) {\r\n  return a + b;\r\n}\r\nconsole.log(\"Task1. sum = \" + sum(3, 5));\r\n\r\n//2. Write a JavaScript function that checks if a variable is of type 'string' and returns true if it is, false otherwise.\r\nfunction isString(a) {\r\n  return typeof a == \"string\";\r\n}\r\nconsole.log(\"Task2. is String Hello World = \" + isString(\"Hello World\"));\r\nconsole.log(\"Task2. is String 6 = \" + isString(6));\r\n\r\n//3. Write a JavaScript function that checks if a given value is a primitive data type (number, string, boolean, null, or undefined) and returns true if it is, false otherwise.\r\nfunction isPrimitiveType(a) {\r\n  if (\r\n    typeof a == \"number\" ||\r\n    typeof a == \"string\" ||\r\n    typeof a == \"boolean\" ||\r\n    typeof a == \"undefined\" ||\r\n    a == null\r\n  )\r\n    return true;\r\n  else return false;\r\n}\r\nconsole.log(\r\n  \"Task3. isPrimitiveType HelloWorld = \" + isPrimitiveType(\"HelloWorld\")\r\n);\r\nconsole.log(\"Task3. isPrimitiveType 5 = \" + isPrimitiveType(5));\r\nconsole.log(\"Task3. isPrimitiveType true = \" + isPrimitiveType(true));\r\nconsole.log(\"Task3. isPrimitiveType null = \" + isPrimitiveType(null));\r\nconsole.log(\"Task3. isPrimitiveType undefined = \" + isPrimitiveType(undefined));\r\nconsole.log(\"Task3. isPrimitiveType object = \" + isPrimitiveType(new Object()));\r\n\r\n//4. Explain the concept of hoisting in JavaScript and provide an example to demonstrate the difference between hoisting with var and hoisting with let (or const).\r\n\r\n/*hoisting meaning that variable will be \"automatically\" assigned to \"undefined\"\r\nIf you use var x; then var is kinda \"moved to the top\" and defined as \"undefined\", so basically you can use it in any line of code\r\nIf you use let x; it will be defined only in this exact line and if you try to use it before declaration you would have ERROR*/\r\n\r\nconsole.log(\"defined by var =\" + x); //will show undefined\r\nvar x;\r\n\r\n//console.log(\"defined by let = \" + y); //will result in ReferenceError\r\nlet y;\r\n\r\n//5. Compare and explain the differences between var, let, and const when declaring variables in JavaScript.\r\n\r\n/* Difference in terms of hoisting for var and let I explained in task 4. Moreover, var is either block scoped or global scoped, when let is always block scoped. \r\nIn addition, such variables defined by var and let can be reassigned later on. \r\nConst differently will give an error if you try to reassign it to something else. */\r\n\r\n//6. Write a JavaScript function that checks if a given value is an object and returns true if it is, false otherwise.\r\nfunction isObject(a) {\r\n  if (typeof a == \"object\" && a != null) return true;\r\n  else return false;\r\n}\r\n\r\nconsole.log(\"Task6. isObject new Object = \" + isObject(new Object()));\r\nconsole.log(\"Task6. isObject new String = \" + isObject(new String(\"Hello\")));\r\nconsole.log(\"Task6. isObject null = \" + isObject(null));\r\n\n\n//# sourceURL=webpack:///./CoreJs-part1.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./CoreJs-part1.js"]();
/******/ 	
/******/ })()
;