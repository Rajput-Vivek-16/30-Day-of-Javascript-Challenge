//---------------------------------- Array Creation and Access --------------------------------
let a = [1, 2, 3, 4, 5];
console.log(a); // Output: [1, 2, 3, 4, 5]

console.log(a[0], a[a.length - 1]); // Output: 1 5



//---------------------------------- Array Methods ---------------------------------------------

// push method to add the last element
a.push(6);
console.log(a); // Output: [1, 2, 3, 4, 5, 6]

// pop method to remove the last element
a.pop();
console.log(a); // Output: [1, 2, 3, 4, 5]

// unshift method to add the first element
a.unshift(0);
console.log(a); // Output: [0, 1, 2, 3, 4, 5]

// shift method to remove the first element
a.shift();
console.log(a); // Output: [1, 2, 3, 4, 5]

// access subarray by slice
console.log(a, a.slice(1, 3)); // Output: [1, 2, 3, 4, 5] [2, 3]

// access all the elements of array by for loop
for (let i = 0; i < a.length; i++) {
    console.log(a[i]); // Output: 1 2 3 4 5
}

// access all the elements of array by forEach function
a.forEach((element) => {
    console.log(element); // Output: 1 2 3 4 5
})

// update array with splice method
var b = [1, 2, 3, 4, 5];
console.log(b); // Output: [1, 2, 3, 4, 5]
console.log(b, b.splice(3, 1, 16), b); // Output: [1, 2, 3, 4, 5] [4] [1, 2, 3, 16, 5]


// map function to modify the element of array by creating new array 
// double number 
const arrayOfDoubleNumber = a.map((element) => {
    return element * 2;
})
console.log(a, arrayOfDoubleNumber); // Output: [1, 2, 3, 4, 5] [2, 4, 6, 8, 10]


// filter function to filter the element of array based on condition by creating new array
// create a new array with only even numbers
const arrayOfEvenNumber = a.filter((element) => {
    return (element % 2 === 0);
})
console.log(arrayOfEvenNumber); // Output: [2, 4]


// reduce function to manipulate with accessing previous value and current value of array by creating new array
// give sum of array
const sumOfArray = a.reduce((previousValue, currentValue) => {
    console.log(previousValue, currentValue);
    return previousValue + currentValue;
})
console.log(a, sumOfArray); // Output: [1, 2, 3, 4, 5] 15



//------------------------------------------ Multi-dimensional ----------------------------------
// create a two-dimensional array (matrix) and access specific element from it
let twod_matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8 ,9]
];
console.log(twod_matrix); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(twod_matrix[1][2]); // Output: 6
