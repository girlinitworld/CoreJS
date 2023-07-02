// CoreJS. Part 5
let log = console.log;
// 1. Explain the difference between synchronous and asynchronous JavaScript code execution and provide an example for each.

// In simple terms, synchronous code execution means that the code is executed line by line, and each line of code waits for the previous one to complete before executing.
// On the other hand, asynchronous code execution allows multiple tasks to be executed simultaneously without waiting for each other to finish.
log("Task 1. - Sync example");

log("Task 1. - First");
log("Task 1. - Second");
log("Task 1. - Third");

log("Task 1. - Async example");

log("Task 1. - First async");
setTimeout(function () {
  log("Task 1. - Second async");
}, 500);
log("Task 1. - Third async");

//==============================================================================================================================================================================
// 2. Write JavaScript code that uses the setTimeout function to log a message after a specified delay, and then clear the timeout using clearTimeout.
let timeout = setTimeout(function () {
  log("Task 2. - This message is being delayed for 2000ms....");
}, 2000);

clearTimeout(timeout); //....but it will never show because we clearedTimeout

//==============================================================================================================================================================================
// 3. Write JavaScript code that uses the setInterval function to repeatedly log a message at a specified interval, and then clear the interval using clearInterval.
let interval = setInterval(function () {
  log("Task 3. - This message should repeat few times ....");
}, 700);

// Clear the interval after a certain time
setTimeout(function () {
  clearInterval(interval);
}, 3000);

//==============================================================================================================================================================================
// 4. Write JavaScript code that demonstrates the basic syntax of ES6 Promises by creating a simple promise that resolves with a value and handles the fulfillment and rejection cases.
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let flower = "Rose";
    if (flower === "Rose") {
      resolve("Task 4. - Promise RESOLVED with value: " + flower);
    } else {
      reject("Task 4. - Promise REJECTED with error: " + flower);
    }
  }, 1000);
});

promise
  .then(function (flower) {
    log(flower);
  })
  .catch(function (error) {
    log(error);
  });

//==============================================================================================================================================================================
// 5. Write JavaScript code that demonstrates the usage of the `async` and `await` keywords to handle asynchronous operations in a synchronous-looking manner.
function asyncCall() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Task 5. - Async call completed");
    }, 1000);
  });
}

async function asyncOperation() {
  try {
    log("Task 5. - Start");
    const result = await asyncCall();
    log(result);
    log("Task 5. - End");
  } catch (error) {
    log("Task 5. - Error:", error);
  }
}

asyncOperation();

//==============================================================================================================================================================================
// 6. Create a custom Error class called ValidationError that extends the built-in Error class. Use this class to throw an error called ValidationError with a custom error message when input validation fails.
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
  if (input === "") {
    throw new ValidationError("Task 6. - Input cannot be empty");
  }
  if (typeof input !== "number") {
    throw new ValidationError("Task 6. - Input must be a number");
  }
}

try {
  validateInput("");
} catch (error) {
  if (error instanceof ValidationError) {
    log("Task 6. - Validation Error:", error.message);
  }
  log("Task 6. - Error:", error.message);
}
