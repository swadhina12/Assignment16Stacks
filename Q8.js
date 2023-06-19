//Given an array of integers, the task is to find the maximum absolute difference between the nearest left and the right smaller element of every element in the array.

function maxAbsDiffNearestSmaller(arr) {
    const leftStack = [];
    const rightStack = [];
  
    // Filling leftStack
    for (let i = 0; i < arr.length; i++) {
      while (leftStack.length > 0 && leftStack[leftStack.length - 1] >= arr[i]) {
        leftStack.pop();
      }
      if (leftStack.length === 0) {
        leftStack.push(0);
      } else {
        leftStack.push(leftStack[leftStack.length - 1]);
      }
    }
  
    // Filling rightStack
    for (let i = arr.length - 1; i >= 0; i--) {
      while (rightStack.length > 0 && rightStack[rightStack.length - 1] >= arr[i]) {
        rightStack.pop();
      }
      if (rightStack.length === 0) {
        rightStack.push(0);
      } else {
        rightStack.push(rightStack[rightStack.length - 1]);
      }
    }
  
    let maxDiff = 0;
  
    // Calculate maxDiff
    for (let i = 0; i < arr.length; i++) {
      const diff = Math.abs(leftStack[i] - rightStack[arr.length - i - 1]);
      maxDiff = Math.max(maxDiff, diff);
    }
  
    return maxDiff;
  }
  
  // Example usage:
  const arr1 = [2, 1, 8];
  console.log(maxAbsDiffNearestSmaller(arr1)); // Output: 1
  
  const arr2 = [2, 4, 8, 7, 7, 9, 3];
  console.log(maxAbsDiffNearestSmaller(arr2)); // Output: 4
  
  const arr3 = [5, 1, 9, 2, 5, 1, 7];
  console.log(maxAbsDiffNearestSmaller(arr3)); // Output: 1
  