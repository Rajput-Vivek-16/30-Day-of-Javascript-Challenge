//------------------------------------------------ Template Literals -------------------------------

// Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "Vivek Rajput";
let age = 30;
let message = `Name: ${name}, Age: ${age}`;
console.log("Template Literal String:", message);

// Create a multi-line string using template literals and log it to the console.
let multiLineString = `This is a string
that spans across
multiple lines.`;
console.log("Multi-line String:", multiLineString);



//------------------------------------------------- Destructuring --------------------------

// Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;
console.log("Array Destructuring:", first, second);

// Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
    title: "Javascript Basics",
    author: "Vivek Rajput",
    year: 2024
}
let {title, author} = book;
console.log("Object Destructing:", title,"wrote by", author);



//------------------------------------------ Spread and Rest Operators ---------------------

// Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let existingArray = [1, 2, 3];
let newArray = [0, ...existingArray, 4];
console.log(newArray);

function multiply(a, b, c) {
    return a * b * c;
}
const nums = [2, 1, 4];
console.log(multiply(...nums)); // Output: 8

//rest operator 
function sum(...a){
    return a.reduce((total, num)=> total + num,0);
}
console.log(sum(12,3));



//----------------------------------------------- Default Parameters -----------------------

// Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
console.log("Default Parameters:");
console.log(multiply(5, 2)); // Output: 10
console.log(multiply(5));    // Output: 5



//---------------------------------------- Enhanced Object Literals ------------------------

// Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let userName = "Vivek";
let userAge = 19;
let userInfo = {
    userName,
    userAge,
    greet(){
        return `Hello, my name is ${this.userName} and I am ${this.userAge} years old.`
    }
}
console.log(userInfo),
console.log(userInfo.greet());

// Create an object with computed property names based on variables and log the object to the console.
let propertyName = "dynamicProperty";
let computedObject = {
    [propertyName]: "This is a computed property"
};
console.log(computedObject); 

