//------------------If-Else Statements------------------
// Check if a number is positive, negative, or zero
const number = 12;
if (number > 0) {
    console.log(`${number} is a positive number`); // Output: 12 is a positive number
} else if (number < 0) {
    console.log(`${number} is a negative number`);
} else {
    console.log(`${number} is zero`);
}

// Check if a person is eligible to vote (age >= 18)
const age = 18;
if (age >= 18) {
    console.log("A person can vote"); // Output: A person can vote
} else {
    console.log("A person can't vote");
}



//---------------------Nested If-Else Statements----------
// Find the largest of three numbers using nested if-else statements
const a = 70;
const b = 88;
const c = 26;

// Check if 'a' is greater than both 'b' and 'c'
if (a > b && a > c) {
    console.log(`Largest Number is ${a}`); // Output if 'a' is the largest
}
// If 'a' is not the largest, check if 'b' is greater than both 'a' and 'c'
else if (b > a && b > c) {
    console.log(`Largest Number is ${b}`); // Output if 'b' is the largest
}
// If neither 'a' nor 'b' is the largest, 'c' must be the largest
else {
    console.log(`Largest Number is ${c}`); // Output if 'c' is the largest
}



//-----------Switch-Case----------
// Determine the day of the week based on a number (1-7) using switch-case
const day_number = 18;
switch (day_number) {
    case 1:
        console.log("Day-1 is Monday");
        break;
    case 2:
        console.log("Day-2 is Tuesday");
        break;
    case 3:
        console.log("Day-3 is Wednesday");
        break;
    case 4:
        console.log("Day-4 is Thursday");
        break;
    case 5:
        console.log("Day-5 is Friday");
        break;
    case 6:
        console.log("Day-6 is Saturday");
        break;
    case 7:
        console.log("Day-7 is Sunday");
        break;
    default:
        console.log("day_number should be between 1 and 7"); // Output: day_number should be between 1 and 7
        break;
}

// Assign a grade ("A", "B", "C", "D", "E") based on a score using switch-case
let grade = "A";
switch (grade) {
    case "A":
        console.log(`${grade} is between 90 and 100`); // Output: A is between 90 and 100
        break;
    case "B":
        console.log(`${grade} is between 80 and 90`);
        break;
    case "C":
        console.log(`${grade} is between 70 and 80`);
        break;
    case "D":
        console.log(`${grade} is between 60 and 70`);
        break;
    case "E":
        console.log(`${grade} is between 50 and 60`);
        break;
    default:
        console.log(`${grade} considered as fail`);
        break;
}



//----------------------Conditional Operator--------------
// Check if a number is even or odd using the ternary operator
const num = 5;
const check_num = (num % 2 === 0) ? "Even Number" : "Odd Number";
console.log(check_num); // Output: Odd Number

// Check leap year using nested if-else statements
let year = 2024;
const check_leap_year = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? `${year} is a leap year` : `${year} is not a leap year`;
console.log(check_leap_year); // Output: 2024 is a leap year
