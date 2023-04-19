// add two numbers
function add(num1, num2) {
    return num1 + num2;
  }
  
  // subtract two numbers
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  // multiply two numbers
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // divide two numbers
  function divide(num1, num2) {
    return num1 / num2;
  }


// prompt user for input
const num1 = Number(prompt("Enter the first number:"));
const operator = prompt("Enter an operator (+, -, *, /):");
const num2 = Number(prompt("Enter the second number:"));

// calculate result based on operator
let result;
switch (operator) {
  case "+":
    result = add(num1, num2);
    break;
  case "-":
    result = subtract(num1, num2);
    break;
  case "*":
    result = multiply(num1, num2);
    break;
  case "/":
    result = divide(num1, num2);
    break;
  default:
    console.log("Invalid operator");
}

// output result in sentence form
if (result !== undefined) {
  console.log(`The result of ${num1} ${operator} ${num2} is ${result}.`);
}