//Given a sequence of n strings, the task is to check if any two similar words come together and then destroy each other then print the number of words left in the sequence after this pairwise destruction.

function countWordsAfterDestruction(sequence) {
    const stack = [];
  
    for (const word of sequence) {
      if (stack.length > 0 && stack[stack.length - 1] === word) {
        stack.pop();
      } else {
        stack.push(word);
      }
    }
  
    return stack.length;
  }
  
  // Example usage:
  const sequence1 = ['ab', 'aa', 'aa', 'bcd', 'ab'];
  console.log(countWordsAfterDestruction(sequence1)); // Output: 3
  
  const sequence2 = ['tom', 'jerry', 'jerry', 'tom'];
  console.log(countWordsAfterDestruction(sequence2)); // Output: 0
  