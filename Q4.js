//Given a Queue consisting of first **n** natural numbers (in random order). The task is to check whether the given Queue elements can be arranged in increasing order in another Queue using a stack. The operation allowed are:

function checkQueueOrder(queue) {
    const stack = [];
    const secondQueue = [];
    let expected = 1;
  
    while (queue.length > 0) {
      const front = queue.shift();
  
      if (front === expected) {
        expected++;
      } else if (front > expected) {
        stack.push(front);
      } else if (stack.length > 0 && stack[stack.length - 1] === expected) {
        secondQueue.push(stack.pop());
        queue.unshift(front);
        expected++;
      } else {
        return "No";
      }
    }
  
    while (stack.length > 0) {
      secondQueue.push(stack.pop());
    }
  
    for (let i = 0; i < secondQueue.length - 1; i++) {
      if (secondQueue[i] >= secondQueue[i + 1]) {
        return "No";
      }
    }
  
    return "Yes";
  }
  
  // Example usage:
  const queue1 = [5, 1, 2, 3, 4];
  console.log(checkQueueOrder(queue1)); // Output: Yes
  
  const queue2 = [5, 1, 2, 6, 3, 4];
  console.log(checkQueueOrder(queue2)); // Output: No
  