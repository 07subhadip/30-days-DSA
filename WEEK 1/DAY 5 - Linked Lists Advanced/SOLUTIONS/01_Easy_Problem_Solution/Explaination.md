## Approach Explanation: Removing Nth Node from the End of a Linked List

### Problem Summary:
We are given the head of a singly linked list and a number `n`. Our task is to remove the `n`th node from the end of the list and return the new head of the list.

### Approach:
We will solve this problem using a **two-pointer approach**. This allows us to find the node to remove in just one pass through the list.

### Steps:

1. **Dummy Node:**
   We create a `dummy` node that points to the head of the list. This simplifies edge cases like removing the head node itself.

2. **Use Two Pointers (Fast and Slow):**
   - We will use two pointers: `fast` and `slow`.
   - Both start at the dummy node.

3. **Move the Fast Pointer Ahead:**
   - Move the `fast` pointer `n` steps ahead.
   - This creates a gap of `n` nodes between the `fast` and `slow` pointers.

4. **Move Both Pointers Together:**
   - Now, move both `fast` and `slow` pointers one step at a time until the `fast` pointer reaches the end of the list.
   - When `fast` reaches the end, the `slow` pointer will be just before the node that needs to be removed.

5. **Remove the Target Node:**
   - To remove the target node, we adjust the `next` pointer of the `slow` pointer to skip the node that needs to be removed.

6. **Edge Case (Removing the Head):**
   - If the node to remove is the first node (head), we handle this by returning the next node as the new head.

### Time Complexity:
- The time complexity is **O(n)**, where `n` is the length of the linked list. We traverse the list only once.

### Space Complexity:
- The space complexity is **O(1)** since we are using a constant amount of extra space.

### Example:

Given the list: `1 -> 2 -> 3 -> 4 -> 5`, and `n = 2`.

- Step 1: Create a dummy node pointing to the head: `0 -> 1 -> 2 -> 3 -> 4 -> 5`.
- Step 2: Move the `fast` pointer 2 steps ahead: `fast` is at `3`.
- Step 3: Move both `fast` and `slow` pointers until `fast` reaches the end: `slow` is at `3`.
- Step 4: Remove the `4th` node by adjusting the `next` pointer of `3`.

The final list will be: `1 -> 2 -> 3 -> 5`.

