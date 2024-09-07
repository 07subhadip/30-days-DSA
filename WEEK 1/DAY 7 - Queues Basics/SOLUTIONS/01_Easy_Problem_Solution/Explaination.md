# Implement Queue using Stacks

## Problem Explanation

We are tasked with implementing a queue using two stacks. A queue operates in **FIFO (First In First Out)** order, whereas a stack operates in **LIFO (Last In First Out)** order. Our objective is to simulate the queue's behavior using only stack operations.

### Key Operations

1. **Push Operation**: Add an element to the end of the queue.
2. **Pop Operation**: Remove the element from the front of the queue.
3. **Peek Operation**: Retrieve the element from the front of the queue without removing it.
4. **Empty Operation**: Check if the queue is empty.

### Approach

To implement this queue using stacks, we maintain two stacks:
- **stack1** is used for enqueue operations (pushing elements to the back).
- **stack2** is used for dequeue operations (popping elements from the front).

When we need to pop or peek, and `stack2` is empty, we transfer all elements from `stack1` to `stack2`, reversing their order. This makes the oldest element from `stack1` (which was at the bottom) now available at the top of `stack2`, simulating the FIFO behavior of a queue.

### Amortized O(1) Complexity

While moving elements between stacks can take linear time, this happens only once for each element, making the overall time complexity of all operations **amortized O(1)**. This ensures that although some operations might take longer, the average time per operation remains constant over multiple operations.

