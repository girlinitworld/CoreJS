// Client-Side Javascript Home Task
//===================================================================================================================================================================
// 1. Use the window.location object to redirect the user to a different webpage when a button is clicked.
function redirectToPage() {
  window.location.href = "somePage.html";
}
//===================================================================================================================================================================
// 2. Use the window.history object to go back to the previous page when a button is clicked.
function goBack() {
  window.history.back();
}
//===================================================================================================================================================================
// 3. Access and display the user's browser name and version using the window.navigator object.
let browserName = window.navigator.userAgent;
let browserVersion = window.navigator.appVersion;
document.querySelector("#browserName").textContent = browserName;
document.querySelector("#browserVersion").textContent = browserVersion;
console.log("Browser Name: " + browserName);
console.log("Browser Version: " + browserVersion);

//===================================================================================================================================================================
// 4. Display the screen width and height of the user's device using the window.screen object.
let screenWidth = window.screen.width;
let screenHeight = window.screen.height;
document.querySelector("#screenWidth").textContent = screenWidth;
document.querySelector("#screenHeight").textContent = screenHeight;
console.log("Screen Width: " + screenWidth);
console.log("Screen Height: " + screenHeight);
//===================================================================================================================================================================
// 5. Change the background color of the document body to yellow when a button is clicked.
function changeBackgroundColor() {
  document.body.style.backgroundColor = "yellow";
}

function changeBackgroundColorBack() {
  document.body.style.backgroundColor = "white";
}
//===================================================================================================================================================================
// 6. Set a cookie with a name and value when a button is clicked.
function setCookie() {
  let cookieName = "myCookie";
  let cookieValue = "Come to Dark Side!";
  let expirationDays = 30;
  let date = new Date();
  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();

  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}
//===================================================================================================================================================================
// 7. Select and highlight all paragraphs in a document when a button is clicked.
function highlightParagraphs() {
  let paragraphs = document.querySelectorAll("p");

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = "yellow";
  }
}
//===================================================================================================================================================================
// 8. Replace the text content of a paragraph with a new value when a button is clicked.
function replaceParagraphText() {
  let paragraphs = document.querySelectorAll("p.replaceText");
  let newText = "Come to the Dark Side, we have cookies!";
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = newText;
  }
}
//===================================================================================================================================================================
// 9. Change the background color and add a custom data attribute to a specific element when a button is clicked.
function customizeElement() {
  let element = document.querySelector("#myElement");
  element.style.backgroundColor = "red";
  element.setAttribute("data-custom", "custom data added");
  console.log(element.getAttributeNames());
}
//===================================================================================================================================================================
// 10. Attach an event listener to a button that triggers an alert when clicked, and demonstrate event propagation by attaching another event listener to a parent element that triggers a different alert.
function buttonAlert() {
  alert("Child Button Clicked!");
}

function parentAlert() {
  alert("Parent Element Clicked!");
}

let button = document.querySelector("#myButton");
let parentElement = document.querySelector("#parentElement");

button.addEventListener("click", buttonAlert);
parentElement.addEventListener("click", parentAlert);
