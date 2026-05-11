// math formulae
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

// calculate function
function operate(a, b, operator) {
  switch (operator) {
    case "add":
      return add(a, b)
      break
    case "subtract":
      return subtract(a, b)
      break
    case "multiply":
      return multiply(a, b)
      break
    case "divide":
      return divide(a, b)
      break
}};

// create HTML calculator objects in JS
const calculatorInner = document.querySelector("#div-calculator-inner");

const displayPanel = document.querySelector("#div-display-panel");

const displayPanelText = document.querySelector("#div-display-panel p");

const keypad = document.querySelector("#div-keypad");

const numberBtns = document.querySelectorAll(".number");

const operatorBtns = document.querySelectorAll(".operator");

const equalsBtn = document.getElementById("equals");

const decimalBtn = document.getElementById("decimal");

const backspaceBtn = document.getElementById("backspace");

const clearBtn = document.getElementById("clear");

// key:value pairs for operator text to symbols & vice versa
const operators = {
  add: "+",
  subtract: "-",
  divide: "/",
  multiply: "*",
};

const reverseOperators = {
  "+": "add",
  "-": "subtract",
  "/": "divide",
  "*": "multiply",
};

// outlining how all buttons get treated upon clicking
function magic(btnType, btnValue) {
  switch (btnType) {
    case "number":
      displayPanelText.textContent += btnValue;
      break
    case "operator":
      displayPanelText.textContent += operators[btnValue];
      break
    case "equals":
      let str = displayPanelText.textContent;
      let regexp = /(-*\d*\.?\d+)(\+|-|\/|\*)(-*\d*\.?\d+)/;
      let match = str.match(regexp);
      firstNumber = Number(match[1], 10);
      operator = reverseOperators[match[2]];
      secondNumber = Number(match[3], 10);
      let result = operate(firstNumber, secondNumber, operator);
      displayPanelText.textContent = result;
      break
    case "decimal":
      displayPanelText.textContent += btnValue;
      break
    case "backspace":
      displayPanelText.textContent = displayPanelText.textContent.slice(0, -1);
      break
    case "clear":
      displayPanelText.textContent = "";
      break
  }
};

// event listeners for all buttons, directing to magic()
numberBtns.forEach((numberBtn) =>
  numberBtn.addEventListener("click", () => {
    magic("number", numberBtn.innerText)
  })
);

operatorBtns.forEach((operatorBtn) =>
  operatorBtn.addEventListener("click", () => {
    magic("operator", operatorBtn.id)
  })
);

equalsBtn.addEventListener("click", () => {
  magic("equals", equalsBtn.id)
});

decimalBtn.addEventListener("click", () => {
  magic("decimal", ".")
});

backspaceBtn.addEventListener("click", () => {
  magic("backspace", null)
});

clearBtn.addEventListener("click", () => {
  magic("clear", null)
});
