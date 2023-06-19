//Given an array, for each element find the value of the nearest element to the right which is having a frequency greater than that of the current element. If there does not exist an answer for a position, then make the value ‘-1’.
function findNextGreaterFrequency(arr) {
    const frequency = {};
    const result = new Array(arr.length).fill(-1);
  
    // Step 1: Create frequency dictionary
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      frequency[num] = (frequency[num] || 0) + 1;
    }
  
    // Step 3-4: Find next greater frequency element
    for (let i = arr.length - 1; i >= 0; i--) {
      const num = arr[i];
      let nextGreaterFreq = -1;
  
      for (let j = i + 1; j < arr.length; j++) {
        if (frequency[arr[j]] > frequency[num]) {
          nextGreaterFreq = arr[j];
          break;
        }
      }
  
      result[i] = nextGreaterFreq;
    }
  
    return result;
  }
  
  // Example usage:
  const arr = [1, 1, 2, 3, 4, 2, 1];
  const result = findNextGreaterFrequency(arr);
  console.log(result); // Output: [-1, -1, 1, 2, 2, 1, -1]
  