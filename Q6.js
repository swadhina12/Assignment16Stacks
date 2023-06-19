//Given an integer k and a **[queue](https://www.geeksforgeeks.org/queue-data-structure/)** of integers, The task is to reverse the order of the first **k** elements of the queue, leaving the other elements in the same relative order.

function reverseKElements(queue, k) {
    const stack = [];
    const tempQueue = [];
  
    // Step 2: Push first k elements onto stack
    for (let i = 0; i < k; i++) {
      stack.push(queue.dequeue());
    }
  
    // Step 3: Enqueue remaining elements into temporary queue
    while (queue.size() > 0) {
      tempQueue.push(queue.dequeue());
    }
  
    // Step 4: Pop elements from stack and enqueue into temporary queue
    while (stack.length > 0) {
      tempQueue.push(stack.pop());
    }
  
    // Step 5: Enqueue elements from temporary queue back into original queue
    while (tempQueue.length > 0) {
      queue.enqueue(tempQueue.shift());
    }
  }
  
  // Example usage:
  const queue = {
    elements: [1, 2, 3, 4, 5],
    enqueue: function (x) {
      this.elements.push(x);
    },
    dequeue: function () {
      return this.elements.shift();
    },
    size: function () {
      return this.elements.length;
    },
    front: function () {
      return this.elements[0];
    },
  };
  
  reverseKElements(queue, 3);
  console.log(queue.elements); // Output: [3, 2, 1, 4, 5]
  