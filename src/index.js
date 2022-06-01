let firstNumber;
let secondNumber;
let operator;
let whichInput;
let screenElement = document.querySelector(".screen");
let calcButtons = document.querySelector(".calc-buttons");

reset();

calcButtons.addEventListener("click", function (event) {
  console.log(event);
  buttonClick(event.target.innerText);
});

function buttonClick(signal) {
  console.log(signal);
  switch (signal) {
    case "C":
      reset();
      updateContent();
      break;
    case "←":
      backspace();
      break;
    case "=":
      calculateMath();
      break;
    case "÷":
    case "+":
    case "-":
    case "x":
      operator = signal;
      whichInput = 2;
      updateContent();
      break;
    default:
      if (whichInput === 1) {
        firstNumber = firstNumber * 10 + parseInt(signal);
      } else {
        secondNumber = secondNumber * 10 + parseInt(signal);
      }
      updateContent();

      console.log(firstNumber, secondNumber, operator);
  }
}

function calculateMath() {
  let result = 0;
  switch (operator) {
    case "÷":
      result = firstNumber / secondNumber;
      break;
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "x":
      result = firstNumber * secondNumber;
      break;
    default:
  }

  screenElement.textContent = result;
  reset();
  console.log(document.querySelector(".screen"));
}

function updateContent() {
  if (whichInput === 1) {
    screenElement.textContent = firstNumber;
  } else if (secondNumber === 0) {
    screenElement.textContent = firstNumber.toString() + operator;
  } else {
    screenElement.textContent =
      firstNumber.toString() + operator + secondNumber.toString();
  }
}

function reset() {
  firstNumber = 0;
  secondNumber = 0;
  operator = null;
  whichInput = 1;
}

function backspace() {
  if (whichInput === 1) {
    firstNumber = Math.floor(firstNumber / 10);
  } else {
    secondNumber = Math.floor(secondNumber / 10);
  }
  updateContent();
}
