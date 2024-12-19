const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, item) => product *= item);
};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(n) {
  if (n === 0 || n === 1) return 1;
  if (n === 2) return 2;
  else return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
