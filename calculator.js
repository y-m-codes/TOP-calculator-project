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

const operatorBtns = document.querySelectorAll(".operator");

// const addBtn = document.getElementById("add");
// console.log(addBtn.classList[addBtn.classList.length - 1]);

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
      // how does equals get treated?
    case "sign":
      // how does the sign get treated?
    case "decimal":
      // how does the decimal get treated?
    case "backspace":
      // how does the backspace get treated?
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


// TO DO:
// 1. when I click a number button, why does the btnValue add to the display panel twice?
// This only occurred once I fiddled with the operator case. It didn't occur when I tested the number case initially.
// 2. Line 70: when the display panel is not empty && there are only numbers, then operators can be accepted.
// I use the operatorBtn id to set the operator function.
// HOWEVER, I need the operator SYMBOL to set the display panel.
// The symbol would be accessed through the p-tag of the btn.
// but my magic() function only takes two parameters, neither of them being the SYMBOL.
// and if I add a third, it won't be used in all cases, so wouldn't that create problems by having a missing parameter half the time?
// is there any kind of built in function logic that you can omit a parameter and it just assumes it's not needed?
