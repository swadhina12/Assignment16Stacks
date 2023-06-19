//Given a number , write a program to reverse this number using stack.
function reverseNumber(number) {
    const stack = [];
    let reversedNumber = 0;
    let power = 0;
  
    // Step 2: Extract digits and push onto stack
    while (number !== 0) {
      const digit = number % 10;
      stack.push(digit);
      number = Math.floor(number / 10);
    }
  
    // Step 3: Build reversed number
    while (stack.length > 0) {
      const digit = stack.pop();
      reversedNumber += digit * Math.pow(10, power);
      power++;
    }
  
    return reversedNumber;
  }
  
  // Example usage:
  console.log(reverseNumber(365)); // Output: 563
  console.log(reverseNumber(6899)); // Output: 9986
  