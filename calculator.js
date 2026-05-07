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

// operate function

function operate(a, b, calculation) {
  return calculation(a, b)
}

// create HTML calculator objects in JS
const calculatorInner = document.querySelector("#div-calculator-inner");

const displayPanel = document.querySelector("#div-display-panel");

const displayPanelText = document.querySelector("#div-display-panel p");

const keypad = document.querySelector("#div-keypad");

const numberBtns = document.querySelectorAll(".number");

// display clicked numbers in display panel and staged for calculation
numberBtns.forEach((numberBtn) =>
  numberBtn.addEventListener("click", () => {
    if (displayPanelText.textContent === "") {
      displayPanelText.textContent = numberBtn.textContent;
      firstNumber = numberBtn.innerText;
    }
    else if (displayPanelText.textContent !== "") {
      displayPanelText.textContent += numberBtn.textContent;
      secondNumber = numberBtn.innerText;
    }
    console.log("firstNumber:", firstNumber, "secondNumber:", secondNumber)
  }
  )
);

const operandBtns = document.querySelectorAll(".operand");
// operandBtns.forEach((operandBtn) =>
//   operandBtn.addEventListener("click", () => {
//     if (displayPanelText.textContent === "") {
//       console.log("Error: An operand must succeed a number.")
//     }
    // else if (displayPanelText.textContent.includes(/[+\-*/]/g)) {
    //   console.log("Error: Only one operand can be calculated at a time.")
    // }
    // else if (displayPanelText.textContent !== "") {
    //   displayPanelText.textContent += operandBtn.textContent;
    //   operator = operandBtn.innerText;
    // }
    // console.log("operand", operandBtn.innerText)
  // }
//   )
// );


// TO DO:
// 1. apparently you cannot use includes() with a regexp? line 63
// 2. How to access the id of the operand buttons?
// I will use this to set the operator in the calculate function
