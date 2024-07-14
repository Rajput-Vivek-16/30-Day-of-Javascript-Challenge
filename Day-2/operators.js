//---------------------------- Arithmetic Operators ---------------------------
let num1 = 10;
let num2 = 20;

// Addition
console.log(num1 + num2); // Output: 30

// Subtraction
console.log(num1 - num2); // Output: -10

// Multiplication
console.log(num1 * num2); // Output: 200

// Division
console.log(num1 / num2); // Output: 0.5

// Remainder (Modulus)
console.log(num1 % num2); // Output: 10



//---------------------------- Assignment Operators ---------------------------
num1 += 1; // num1 = num1 + 1
console.log(num1); // Output: 11

num2 -= 2; // num2 = num2 - 2
console.log(num2); // Output: 18



//---------------------------- Comparison Operators ---------------------------

console.log(num1 > num2);  // Output: false
console.log(num1 < num2);  // Output: true
console.log(num1 >= num2); // Output: false
console.log(num1 <= num2); // Output: true

// Loose equality
console.log(2 == "2");    // Output: true

// Strict equality
console.log(2 === "2");   // Output: false

// Loose inequality
console.log(2 != "2");    // Output: false

// Strict inequality
console.log(5 !== "5");   // Output: true



//---------------------------- Logical Operators -----------------------------
console.log(true && true);    // Output: true
console.log(true && false);   // Output: false
console.log(false && true);   // Output: false
console.log(null && "world"); // Output: null
console.log("hello" && "world" && "javascript"); // Output: "javascript"

// Logical OR (||)
console.log(true || false);   // Output: true
console.log(false || true);   // Output: true
console.log(false || false);  // Output: false
console.log(null || "world"); // Output: "world"
console.log("hello" || "world" || "javascript"); // Output: "hello"

// Logical NOT (!)
console.log(!true);  // Output: false
console.log(!false); // Output: true
console.log(!0);     // Output: true
console.log(!"");    // Output: true
console.log(!"hello"); // Output: false

// Nullish Coalescing (??)
let undefinedVar;
console.log(null ?? "default"); // Output: "default"
console.log(undefinedVar ?? []); // Output: []
console.log(0 ?? -0); // Output: 0
console.log(0 ?? ''); // Output: 0



//---------------------------- Ternary Operator -----------------------------
const number = 17;
console.log((number > 0) ? "Positive Number" : "Negative Number"); // Output: "Positive Number"


//---------------------------- Unary Operators -------------------------------
let count = 5;
console.log(++count); // Output: 6 (Prefix Increment)
console.log(count++); // Output: 6 (Postfix Increment)
console.log(count);   // Output: 7

let decCount = 5;
console.log(--decCount); // Output: 4 (Prefix Decrement)
console.log(decCount--);  // Output: 4 (Postfix Decrement)
console.log(decCount);    // Output: 3



//---------------------------- Bitwise Operators ----------------------------
let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011

console.log(a & b); // Output: 1  // Result: 0001 (1 in decimal)
console.log(a | b); // Output: 7  // Result: 0111 (7 in decimal)
console.log(a ^ b); // Output: 6  // Result: 0110 (6 in decimal)
console.log(~a);    // Output: -6 // Result: 1010 (which is -6 in decimal due to two's complement)

// Left Shift (<<)
let p = 5;  // Binary: 0101
let result = p << 1; // Result: 1010 (10 in decimal)
console.log(result); // Output: 10

// Sign-propagating Right Shift (>>)
let q = -8; // Binary: 11111111111111111111111111111000
result = q >> 2; // Result: 11111111111111111111111111111110 (-2 in decimal)
console.log(result); // Output: -2

// Zero-fill Right Shift (>>>)
let r = -8; // Binary: 11111111111111111111111111111000
result = r >>> 2; // Result: 00111111111111111111111111111110 (1073741822 in decimal)
console.log(result); // Output: 1073741822
