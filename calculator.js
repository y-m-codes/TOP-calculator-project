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
      if (displayPanelText.textContent === "") {
        displayPanelText.textContent = btnValue;
        firstNumber = btnValue;
      }
      else if (/^\d+$/.test(displayPanelText.textContent.trim())) {
        displayPanelText.textContent += btnValue;
        firstNumber += btnValue;
      }
      else if (/[+\-*/]/g.test(displayPanelText.textContent.trim())) {
        displayPanelText.textContent += btnValue;
        secondNumber = btnValue; // test this after the operator case is written
      };
      console.log("firstNumber:", firstNumber, "secondNumber:", secondNumber);
    case "operator":
      console.log("An operator button was clicked.")
      console.log("btnType:", btnType, "btnValue", btnValue, "is a", typeof(btnValue));
      if (displayPanelText.textContent === "") {
        console.log("You must add a number first.")
      }
      else if (/^\d+$/.test(displayPanelText.textContent.trim())) {
        displayPanelText.textContent += btnValue; // this needs to be the btn.innerText
        operator = btnValue;
      }
      else if (/[+\-*/]/g.test(displayPanelText.textContent.trim())) {
        console.log("You must evaluate this operation first before adding another.")
      };
    case "equals":
      let str = displayPanelText.textContent;
      console.log(str);
      let regexp = /(-*\d*\.?\d+)(\+|-|\/|\*)(-*\d*\.?\d+)/;
      // let regexp = /(\d*\.?\d+)(\+|-|\/|\*)(\d*\.?\d+)/;
      let match = str.match(regexp);
      firstNumber = Number(match[1], 10);
      operator = reverseOperators[match[2]];
      secondNumber = Number(match[3], 10);
      let result = operate(firstNumber, secondNumber, operator);
      displayPanelText.textContent = result;
      break
    case "decimal":
      // how does the decimal get treated?
    case "backspace":
      displayPanelText.textContent = displayPanelText.textContent.slice(0, -1);
      break
    case "clear":
      // how does the clear button get treated?
  }
};

// event listeners for all buttons, directing to magic()
operatorBtns.forEach((operatorBtn) =>
  operatorBtn.addEventListener("click", () => {
    magic(operatorBtn.classList[operatorBtn.classList.length - 1], operatorBtn.id)
  })
)

numberBtns.forEach((numberBtn) =>
  numberBtn.addEventListener("click", () => {
    magic(numberBtn.classList[numberBtn.classList.length - 1], numberBtn.innerText)
  })
);

decimalBtn.addEventListener("click", () => {
  magic("decimal", ".")
});

backspaceBtn.addEventListener("click", () => {
  magic("backspace", null)
});

clearBtn.addEventListener("click", () => {
  magic("clear", null)
});
