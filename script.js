const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
let firstNumber = "";
let secondNumber = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.innerText += e.target.textContent;
  });
});

// Basic arithmetic functions

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}

function calculate() {
  const displayText = display.innerText;
  const operatorMatch = displayText.match(/[\+\-\=\*\/]/);
  if (!operatorMatch) return; // No operator found
  operator = operatorMatch[0];
  const [first, second] = displayText.split(operator);
  firstNumber = parseFloat(first);
  secondNumber = parseFloat(second);
  if (isNaN(firstNumber) || isNaN(secondNumber)) return; // Invalid numbers
  if (operator === "/" && secondNumber === 0) {
    display.innerText = "Error: Division by zero";
    return;
  }

  const result = operate(operator, firstNumber, secondNumber);
  display.innerText = result;
}
equal.addEventListener("click", calculate);

function clearDisplay() {
  display.innerText = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
}
clear.addEventListener("click", clearDisplay);
