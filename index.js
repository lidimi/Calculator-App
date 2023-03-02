// THEME SWITCHER

const switcher = document.querySelector(".switcher");

switcher.addEventListener("input", (e) => {
  if (e.target.value === "2") {
    document.documentElement.setAttribute("data-theme", "2");
  } else if (e.target.value === "1") {
    document.documentElement.setAttribute("data-theme", "1");
  } else if (e.target.value === "3") {
    document.documentElement.setAttribute("data-theme", "3");
  }
});

// CALCULATOR

const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const deleteBtn = document.querySelector("[data-delete]");
const resetBtn = document.querySelector("[data-reset]");
const equalBtn = document.querySelector("[data-equals]");
const calculatorScreen = document.querySelector(".calculator-screen");

class Calculator {
  constructor(calculatorScreen, previousNumber, currentNumber, operand) {
    this.calculatorScreen = calculatorScreen;
    this.previousNumber = previousNumber;
    this.currentNumber = currentNumber;
    this.operand = operand;
  }

  appendNumber(number) {
    if (this.calculatorScreen.textContent.includes("Error!")) {
      this.calculatorScreen.textContent = "";
    }
    this.calculatorScreen.textContent += number;
    this.currentNumber += number;
  }

  chooseOperation(operand) {
    this.calculatorScreen.textContent = operand;
    this.previousNumber = this.currentNumber;
    this.currentNumber = "";
    this.operand = operand;
  }

  performOperation() {
    switch (this.operand) {
      case "+":
        const plus = Number(this.previousNumber) + Number(this.currentNumber);
        calculatorScreen.textContent = plus;
        this.currentNumber = plus;
        return;
      case "-":
        const minus = Number(this.previousNumber) - Number(this.currentNumber);
        calculatorScreen.textContent = minus;
        this.currentNumber = minus;
        return;
      case "x":
        const multiplied =
          Number(this.previousNumber) * Number(this.currentNumber);
        calculatorScreen.textContent = multiplied;
        this.currentNumber = multiplied;
        return;
      case "/":
        if (this.currentNumber === "0") {
          calculatorScreen.textContent = "Error!";
        } else {
          const divided =
            Number(this.previousNumber) / Number(this.currentNumber);
          calculatorScreen.textContent = divided;
          this.currentNumber = divided;
          return;
        }
    }
  }

  reset() {
    this.calculatorScreen.textContent = "";
    this.currentNumber = "";
    this.previousNumber = "";
  }

  delete() {
    const deleted = this.calculatorScreen.textContent.slice(0, -1);
    this.calculatorScreen.textContent = deleted;
    this.currentNumber = deleted;
  }
}

const calculator = new Calculator(calculatorScreen, "", "", "");

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.textContent);
  });
});

deleteBtn.addEventListener("click", () => {
  calculator.delete();
});

resetBtn.addEventListener("click", () => {
  calculator.reset();
});

operationBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.textContent);
  });
});

equalBtn.addEventListener("click", () => {
  calculator.performOperation();
});
