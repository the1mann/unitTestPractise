/**
* Multiples two numbers
* @method multiply
* @param {Number} x - a number
* @param {Number} y - another number
* @return {Number} multiplied value of x and y
*/
function multiply(x, y) {
  return x * y;
}

/**
* Divides a number by another
* @method divide
* @param {Number} x - a number
* @param {Number} y - another number
* @return {Number} number x divided by y
*/
function divide(x, y) {
  return x / y;
}

/**
* Checks if a string equals 'Apples'
* @method stringEqualsApples
* @param {Number} value - provided string
* @return {Boolean} if string is indeed equal to 'Apples' 
*/
function stringEqualsApples(value) {
  if (value === 'Apples') {
    return true;
  }
}

/**
* Checks if ANY number provided is odd or not
* @method isOddNumber
* @param {Number} value - a number
* @return {Number} if value is indeed odd
*/
function isOddNumber(value) {
  var oddNumbers = [1,3,5,7,9,11,13,15,16,19,21,23,25,29,27,31,33,35,39,41];

  for (var i = 0; i < oddNumbers.length; i++) {
    if (value === oddNumbers) {
      return true;
    }
  }

  return false;
}

/**
* Checks if ANY number provided is odd or not
* @method isOddNumber
* @param {Number} value - a number
* @return {Number} if value is indeed odd
*/
function isFibonacciNumber(value) {
  var sequence = 1;
  var fibonacciNumber = 0;

  while (value > fibonacciNumber) {
    fibonacciNumber = getNumberForFibonacciSequence(sequence);

    if (value === fibonacciNumber) {
      return true;
    }

    sequence++;
  }

  return false;

}

/**
* Checks if ANY number provided is odd or not
* @method isOddNumber
* @param {Number} value - a number
* @return {Number} if value is indeed odd
*/
function getNumberForFibonacciSequence(value) {
  if (value === 1) {
    return 1;
  }

  return getNumberForFibonacciSequence(value - 1) + getNumberForFibonacciSequence(value - 2);
}
