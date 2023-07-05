"use strict";
//6. Use the keyof keyword to create a function that accepts an object and a key, and returns the value corresponding to the key from the object.
function getValueByKey(obj, key) {
    return obj[key];
}
const person = {
    name: "John",
    age: 25,
    city: "New York",
};
const nameValue = getValueByKey(person, "name");
console.log(nameValue);
const ageValue = getValueByKey(person, "age");
console.log(ageValue);
const cityValue = getValueByKey(person, "city");
console.log(cityValue);
