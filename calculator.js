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
// replace with case statement based on operator
// using operator like this doesn't work - it returns a string not a function
function calculate(a, operator, b) {
  return operator(a, b)
}

console.log(calculate(10, subtract, 5))

// create HTML calculator objects in JS
const calculatorInner = document.querySelector("#div-calculator-inner");

const displayPanel = document.querySelector("#div-display-panel");

const displayPanelText = document.querySelector("#div-display-panel p");

const keypad = document.querySelector("#div-keypad");

const numberBtns = document.querySelectorAll(".number");

const operatorBtns = document.querySelectorAll(".operator");

const equalsBtn = document.getElementById("equals");

// key:value pairs for operator text to symbols
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
      console.log("btnType", btnType)
      console.log("btnValue", btnValue)
      displayPanelText.textContent += btnValue;
      console.log("displayPanelText.textContent", displayPanelText.textContent)
      break
    case "operator":
      console.log("btnType", btnType)
      console.log("btnValue", btnValue)
      displayPanelText.textContent += operators[btnValue];
      console.log("displayPanelText.textContent", displayPanelText.textContent)
      break
    case "equals":
      console.log("equals:", displayPanelText.textContent);
      let str = displayPanelText.textContent;
      let regexp = /(\d+)(\+|-|\/|\*)(\d+)/;
      let match = str.match(regexp);
      firstNumber = match[1];
      operator = reverseOperators[match[2]];
      secondNumber = match[3];
      console.log("firstNumber:", firstNumber, "operator:", operator, "secondNumber", secondNumber);
      console.log(calculate(firstNumber, operator, secondNumber))
      break
    case "sign":
      // how does the sign get treated?
      break
    case "decimal":
      displayPanelText.textContent += btnValue;
      break
    case "backspace":
      // how does the backspace get treated?
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


// const addBtn = document.getElementById("add").innerText;
// console.log(addBtn);

// operatorBtns.forEach((operatorBtn) =>
//   operatorBtn.addEventListener("click", () => {
//     if (displayPanelText.textContent === "") {
//       console.log("Error: An operator must succeed a number.")
//     }
    // else if (displayPanelText.textContent.includes(/[+\-*/]/g)) {
    //   console.log("Error: Only one operator can be calculated at a time.")
    // }
    // else if (displayPanelText.textContent !== "") {
    //   displayPanelText.textContent += operatorBtn.textContent;
    //   operator = operatorBtn.innerText;
    // }
    // console.log("operator", operatorBtn.innerText)
  // }
//   )
// );

// if (displayPanelText.textContent === "") {
//   displayPanelText.textContent = btnValue;
//   firstNumber = btnValue;
// }
// else if (/^\d+$/.test(displayPanelText.textContent.trim())) {
//   displayPanelText.textContent += btnValue;
//   firstNumber += btnValue;
// }
// else if (/[+\-*/]/g.test(displayPanelText.textContent.trim())) {
//   displayPanelText.textContent += btnValue;
//   secondNumber = btnValue;
// };
// console.log("firstNumber:", firstNumber, "secondNumber:", secondNumber);

// if (displayPanelText.textContent === "") {
//   console.log("You must add a number first.")
// }
// else if (/^\d+$/.test(displayPanelText.textContent.trim())) {
//   // displayPanelText.textContent += btnValue; // this needs to be the btn.innerText
//   operator = btnValue;
// }
// else if (/[+\-*/]/g.test(displayPanelText.textContent.trim())) {
//   console.log("You must evaluate this operation first before adding another.")
// };
