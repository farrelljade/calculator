function add(nums) {
  return nums.reduce((total, currentItem) => total + Number(currentItem), 0);
};
  
function subtract(nums) {
  return nums.reduce((total, currentItem) => total - Number(currentItem), 0);
};
  
function multiply(nums) {
  return nums.reduce((total, currentItem) => total * currentItem, 1);
};
  
function divide(nums) {
  return nums.reduce((total, currentItem) => total / currentItem, 1);
};
  
let currentValue = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let totalValues = "";
  
function operate(operator, nums) {
  // Use an Object to map operators to function call
  const operations = {
    "+": (nums) => add(nums),
    "-": (nums) => subtract(nums),
    "*": (a, b) => multiply(a, b),
    "/": (a, b) => divide(a, b),
  };
  return operations[operator](nums);
};

const display = document.querySelector("#display");

const btnOne = document.querySelector("#one");
btnOne.addEventListener("click", () => {
display.value += 1;
currentValue += 1;
});

const btnTwo = document.querySelector("#two");
btnTwo.addEventListener("click", () => {
display.value += 2;
currentValue += 2;
});

const btnThree = document.querySelector("#three");
btnThree.addEventListener("click", () => {
display.value += 3;
currentValue += 3;
});

const btnFour = document.querySelector("#four");
btnFour.addEventListener("click", () => {
display.value += 4;
currentValue += 4;
});

const btnFive = document.querySelector("#five");
btnFive.addEventListener("click", () => {
display.value += 5;
currentValue += 5;
});

const btnSix = document.querySelector("#six");
btnSix.addEventListener("click", () => {
display.value += 6;
currentValue += 6;
});

const btnSeven = document.querySelector("#seven");
btnSeven.addEventListener("click", () => {
display.value += 7;
currentValue += 7;
});

const btnEight = document.querySelector("#eight");
btnEight.addEventListener("click", () => {
display.value += 8;
currentValue += 8;
});

const btnNine = document.querySelector("#nine");
btnNine.addEventListener("click", () => {
display.value += 9;
currentValue += 9;
});

const btnZero = document.querySelector("#zero");
btnZero.addEventListener("click", () => {
display.value += 0;
currentValue += 0;
});

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => {
operator = "+";
display.value += "+"
addBtn.style.backgroundColor = "red";
if (firstNumber === "") {
  firstNumber = parseFloat(currentValue);
} else {
  firstNumber += parseFloat(currentValue);
}
currentValue = "";
});

const subtractBtn = document.querySelector("#subtract");
subtractBtn.addEventListener("click", () => {
operator = "-";
display.value += "-"
subtractBtn.style.backgroundColor = "red";
if (firstNumber === "") {
  firstNumber = parseFloat(currentValue);
} else {
  firstNumber += parseFloat(currentValue);
}
currentValue = "";
});

const btnEquals = document.querySelector("#equals");
btnEquals.addEventListener("click", () => {
secondNumber = parseFloat(currentValue);
totalValues = [firstNumber, secondNumber];
display.value = operate(operator, totalValues);
});