//-------------------------------- Function declaration ------------------------

// Function to check if a number is even or odd
function check_even_odd_number(number){
    return (number % 2 === 0) ? `${number} is even number` : `${number} is odd number`;
}
console.log(check_even_odd_number(12)); // Output: 12 is even number

// Function to calculate the square of a number
function square_of_number(number){
    console.log(number * number);
}
square_of_number(5); // Output: 25



//-------------------------------- Function Expression ------------------------

// Function expression to find the maximum of two numbers
const max_of_number = function(num1, num2){
    if (num1 >= num2){
        console.log(num1);
    }
    else{
        console.log(num2);
    }
}
max_of_number(12, 14); // Output: 14

// Function expression to concatenate two strings
const concat_string = function(str1, str2){
    console.log(str1 + str2);
}
concat_string("Vi", "vek"); // Output: Vivek



//-------------------------------- Arrow Function ------------------------

// Arrow function to calculate the sum of two numbers
const sum_two_numbers = (num1, num2) => {
    console.log(num1 + num2);
} 
sum_two_numbers(8, 32); // Output: 40

// Arrow function to check if a string contains a specific character 
const check_character = (char, string) => {
    for (let index = 0; index < string.length; index++) {
        if (string.charAt(index) === char){
            console.log(true);
            break;
        } 
    }
}
check_character("v", "Vivek"); // Output: true



//-------------------------------- Function Parameters and default Values -------------------

// Function that takes two parameters and returns their product with a default value for the second parameter
const product_number = (num1, num2 = 16) => {
    return num1 * num2;
}
console.log(product_number(2)); // Output: 32
console.log(product_number(4, 7)); // Output: 28

// Function that takes a person's name, age, and returns a greeting message with a default age value
const userGreet = (userName, userAge = 20) => {
    return `Hello, ${userName}! Are you ${userAge} years old?`;
}
console.log(userGreet("Vivek")); // Output: Hello, Vivek! Are you 20 years old?



//-------------------------------- Higher-Order Function ------------------------

// Higher-order function that takes a function and a number of times to repeat, and calls the function that many times
function repeatFn(fn, times){
    for (let i = 1; i <= times; i++) {
        fn();        
    }
}
repeatFn(() => console.log("Hey"), 3); // Output: Hey (3 times)

// Higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function
function applyFunction(fn1, fn2, value){
    return fn2(fn1(value));
}
const add2 = (num) => num + 2;
const multiply3 = (num) => num * 3;
console.log(applyFunction(add2, multiply3, 5)); // Output: 21
