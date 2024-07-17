# Function in Javascript 

## Function Declaration

**Definition:** A function declaration defines a named function with specified parameters. This type of function can be called before it is defined due to hoisting.

**Syntax:**
```javascript
function functionName(parameters) {
    // Function body
}
```

**Example:**
```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Alice"); // Output: Hello, Alice!
```

## Function Expression

**Definition:** A function expression defines a function inside an expression and can be named or anonymous. Unlike function declarations, these functions are not hoisted.

**Syntax:**
```javascript
const functionName = function(parameters) {
    // Function body
};
```

**Example:**
```javascript
const add = function(a, b) {
    return a + b;
};
console.log(add(2, 3)); // Output: 5
```

## Arrow Function

**Definition:** An arrow function provides a shorter syntax for writing functions. It doesn't have its own `this` context and is always anonymous.

**Syntax:**
```javascript
const functionName = (parameters) => {
    // Function body
};
```

**Example:**
```javascript
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(2, 3)); // Output: 6
```

For single-line functions without a return statement:
```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

## Default Parameters

**Definition:** Default parameters allow you to initialize named parameters with default values if no value or `undefined` is passed.

**Syntax:**
```javascript
function functionName(param1, param2 = defaultValue) {
    // Function body
}
```

**Example:**
```javascript
function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}
greet("Alice"); // Output: Hello, Alice!
greet("Bob", "Hi"); // Output: Hi, Bob!
```

## Higher-Order Function

**Definition:** A higher-order function is a function that takes one or more functions as arguments, or returns a function as its result.

**Syntax:**
```javascript
function higherOrderFunction(callback) {
    // Function body
    callback();
}
```

**Example:**
```javascript
function repeat(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
repeat(() => console.log("Hello"), 3); // Output: Hello (3 times)
```

Another example with returning a function:
```javascript
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}
const double = createMultiplier(2);
console.log(double(5)); // Output: 10
```