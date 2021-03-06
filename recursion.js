// Returns true when a number is even, false when a number is odd
// Uses recursion based on the following rules:
// Zero is even
// One is odd
// For any number N, it's evenness is the same as N-2
//
// To handle negative numbers, converts them to positive numbers.

function isEven(x) {
  var num = Math.abs(x); //handle negative numbers

  // Check to see if the value is zero or one and returns corresponing response
  // Otherwise performs a recursion after subtracting two.
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    num = num - 2;
    return isEven(num);
  }
}

console.log('Test 1 is even?');
console.log(isEven(1));

console.log('Test 50 is even?');
console.log(isEven(50));

console.log('Test 75 is even?');
console.log(isEven(75));
