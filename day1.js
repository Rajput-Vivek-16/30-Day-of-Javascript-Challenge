//-------------------------------------------------- Variable Declaration ------------------------------------------------
var a;
a = 1;
console.log(a);

let b;
b = "coder";
console.log(b);


//-------------------------------------------------- Constant Declaration -------------------------------------------------
// const c; //Syntax Error because it must be initialized at the time of declaration
const c = true;
console.log(c);


//------------------------------------------------ Variable Redeclaration ------------------------------------------------- 
var a = 2; // declared above 
console.log(a);
// let b and const c // Syntax Error because only var can be redefined 


//------------------------------------------------ Reassigning Variables --------------------------------------------------
var x = 12;
x = 16;
console.log(x);

let y = 8;
y = 20;
console.log(y);

const z = "RV";
// z = "VR";  // TypeError 
console.log(z);  


//--------------------------------------------- Global Variables ----------------------------------------------------------
// Global variables can be used in functions or blocks
var p = 100; 
let q = 101;
const r = 102;

// Variables defined in the open can be accessed everywhere 
{
    console.log(p);
    console.log(q);
    console.log(r);
}

function example() {
    p += 1;
    q += 1;
    // r += 1; // TypeError
}

example();
console.log(p);
console.log(q);


//------------------------------------------------ Local Variables --------------------------------------------------------
// Variables defined in functions cannot be accessed outside the function
function fn() { 
    var a1 = 10; // local variable
    let b1 = 11;
    const c1 = 12;
}
fn();
// console.log(a1);  // Reference Error
// console.log(b1);  // Reference Error
// console.log(c1);  // Reference Error

{
    var a1 = 78;
    let b1 = 85;
    const c1 = 79;
}
console.log(a1);
// console.log(b1);  // Reference Error
// console.log(c1);  // Reference Error


//-------------------------------------------------- Data Types -----------------------------------------------------------
const number = 16.20;
console.log(number, typeof(number));

const string = "Vivek";
console.log(string, typeof(string));

const boolean = true;
console.log(boolean, typeof(boolean));

const array = [1, "Vivek", true];
console.log(array, typeof(array));

const object = {
    "Full Name": "Rajput Vivek",
    date: '13-07-2024'
};
console.log(object, typeof(object));