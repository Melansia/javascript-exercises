const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  let sum = 0
  if (arr.length === 0) { return sum } else {
    arr.forEach((element) => { sum += element})
  }
	return sum
};

const multiply = function(arr) {
  let sum = 1
  if (arr.length === 0) { return sum } else {
    arr.forEach((element) => { sum *= element})
  }
	return sum
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
  if (a < 0) {
    return -1
  } else if (a == 0) {
    return 1
  } else {
    return (a * factorial(a - 1))
  }
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
