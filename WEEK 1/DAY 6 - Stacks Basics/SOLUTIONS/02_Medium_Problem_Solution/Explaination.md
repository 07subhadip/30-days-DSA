## Approach Explanation: Implement Stack using Queues

### Problem Summary:
We need to implement a stack using two queues. A stack operates on a Last-In-First-Out (LIFO) principle, meaning the last element added is the first one to be removed. The queue, however, operates on a First-In-First-Out (FIFO) basis. We will use two queues to simulate the behavior of a stack.

### Approach:

1. **Use Two Queues:**
   - We'll use two queues (`q1` and `q2`) to simulate the behavior of the stack.
   - The idea is to always maintain the most recently added element at the front of `q1`. 

2. **Push Operation:**
   - When pushing an element `x`, we first enqueue `x` to `q2`.
   - Then, move all the elements of `q1` to `q2`. This ensures that the last pushed element is always at the front of `q1`.
   - Finally, swap the names of `q1` and `q2`.

3. **Pop Operation:**
   - To pop an element, simply dequeue from `q1` since it always has the most recent element at the front.

4. **Top Operation:**
   - The top element can be fetched by checking the front of `q1`.

5. **Empty Operation:**
   - Check if `q1` is empty, as it holds all the elements of the stack.

### Steps:

- **push(x)**: Adds `x` to `q2`, moves all elements from `q1` to `q2`, and then swaps `q1` and `q2`.
- **pop()**: Removes the front element from `q1`.
- **top()**: Returns the front element of `q1`.
- **empty()**: Returns whether `q1` is empty.

### Time Complexity:
- **Push Operation:** The time complexity of the `push` operation is **O(n)** because we need to transfer all elements from `q1` to `q2`.
- **Pop Operation:** The time complexity of the `pop` operation is **O(1)** since we just remove the front element of `q1`.
- **Top Operation:** The time complexity of the `top` operation is **O(1)** because we simply check the front element of `q1`.
- **Empty Operation:** The time complexity of the `empty` operation is **O(1)**.

### Space Complexity:
- The space complexity is **O(n)**, where `n` is the number of elements in the stack, because we need space for both `q1` and `q2`.

### Example:

Consider the following input:

- Input: `["MyStack", "push", "push", "top", "pop", "empty"]` with arguments `[[], [1], [2], [], [], []]`
- Steps:
    1. Push `1`: `q1 = [1]`
    2. Push `2`: `q1 = [2, 1]`
    3. Top: Returns `2` (top of the stack).
    4. Pop: Returns `2`, and `q1` becomes `[1]`.
    5. Empty: Returns `false`, as there is still one element in the stack.

### Conclusion:
This approach efficiently implements a stack using two queues. While `push` takes **O(n)** time due to reordering elements, the `pop`, `top`, and `empty` operations are **O(1)**.
