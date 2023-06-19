//Given a stack with **push()**, **pop()**, and **empty()** operations, The task is to delete the **middle** element ****of it without using any additional data structure.

function deleteMiddle(stack) {
    if (stack.length === 0) {
      return;
    }
  
    const size = stack.length;
    const middle = Math.ceil(size / 2);
  
    deleteMiddleRecursive(stack, middle, 1);
  }
  
  function deleteMiddleRecursive(stack, middle, position) {
    if (position === middle) {
      stack.pop();
      return;
    }
  
    const temp = stack.pop();
    deleteMiddleRecursive(stack, middle, position + 1);
    stack.push(temp);
  }
  
  // Example usage:
  const stack1 = [1, 2, 3, 4, 5];
  deleteMiddle(stack1);
  console.log(stack1); // Output: [1, 2, 4, 5]
  
  const stack2 = [1, 2, 3, 4, 5, 6];
  deleteMiddle(stack2);
  console.log(stack2); // Output: [1, 2, 4, 5, 6]
  