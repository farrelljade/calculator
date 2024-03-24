function add(nums) {
  return nums.reduce((total, currentItem) => total + currentItem, 0);
};

function subtract(nums) {
  return nums.reduce((total, currentItem) => total - currentItem, 0);
};

function multiply(nums) {
  return nums.reduce((total, currentItem) => total * currentItem, 1);
};

function divide(nums) {
  return nums.reduce((total, currentItem) => total / currentItem, 1);
};

let firstNumber;
let operator;
let secondNumber;

function operate(operator, a, b) {
  // Use an Object to map operators to function call
  const operations = {
    '+': (a, b) => add([a, b]),
    '-': (a, b) => subtract([a, b]),
    '*': (a, b) => multiply([a, b]),
    '/': (a, b) => divide([a, b]),
  };
  return operations[operator](a, b);
};
console.log(operate('+', 7, 7));