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

// finding out what default/void value of innerText is

// if (displayPanel.innerText === "") {
//   console.log('displayPanel.innerText === ""')
// }
// else {
//   console.log('displayPanel.innerText IS NOT "" undefined NOR null')
// };


const keypad = document.querySelector("#div-keypad");

const numberBtns = document.querySelectorAll(".number");

// display clicked numbers in display panel
numberBtns.forEach((numberBtn) =>
  numberBtn.addEventListener("click", () => {
    if (displayPanel.textContent === "") {
      displayPanel.textContent = numberBtn.textContent;
      firstNumber = numberBtn.innerText;
    }
    else {
      secondNumber = numberBtn.innerText;
    }
    console.log("firstNumber:", firstNumber, "secondNumber:", secondNumber)
  }
  )
);

// next steps:
// 1. when i click a number from a blank/refreshed calculator, why does the
//  value go to secondNumber instead of firstNumber?
// 2. the secondNumber should not displace the firstNumber
