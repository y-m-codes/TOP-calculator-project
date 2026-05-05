// formulae

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

// calculation variables
let firstNumber = 0
let secondNumber = 0
let operator = null

// operate function

function operate(a, b, calculation) {
  return calculation(a, b)
}


console.log(operate(9, 3, add));
