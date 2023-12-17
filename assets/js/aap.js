// Get a number from the user
var num = prompt("Enter any number");

// Check if the number is even and display the result
document.write(num % 2 == 0);

// Display whether the number is even or odd using alerts
if (num % 2 == 0) {
  alert("Even");
} else {
  alert("Odd");
}

// Example of variable declarations with var, let, and const
var a = 8;
let b = 9;
const c = 10;

// Block with let to demonstrate block scope
{
  var a = 8; // Note: This will affect the outer 'a'
  let b = 5;
  // alert(a > 6 && b < 8); // Commented out, as it was not clear in the original code
  alert(a > 6 || b < 8);
}

// Get two numbers from the user and display the larger one
var num1 = prompt("Enter the first number");
var num2 = prompt("Enter the second number");

// Compare and display the larger number using alerts
if (num1 > num2) {
  alert(num1);
} else {
  alert(num2);
}

// Alternative way to compare and display the larger number
if (num2 > num1) {
  alert(num2);
} else {
  alert(num1);
}
