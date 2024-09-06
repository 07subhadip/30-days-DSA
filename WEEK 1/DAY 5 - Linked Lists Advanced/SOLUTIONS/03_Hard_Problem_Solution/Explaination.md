## Approach Explanation: Merge k Sorted Lists

### Problem Summary:
We are given `k` sorted linked lists. Our task is to merge them into one sorted linked list and return the result.

### Approach:

The problem can be efficiently solved using a **min-heap (priority queue)** to keep track of the smallest element across all the linked lists at each step.

### Steps:

1. **Initialize a Min-Heap:**
   - We use a min-heap (priority queue) to hold the current smallest nodes from each of the `k` linked lists.
   - In each iteration, the heap will help in retrieving the smallest node across all lists.

2. **Add the First Node of Each List to the Heap:**
   - If a linked list is non-empty, its head node is added to the heap. The heap is sorted by the node’s value.

3. **Build the Merged List:**
   - Pop the smallest node from the heap (the node with the minimum value among the current nodes).
   - Add this node to the merged list.
   - If the popped node has a next node, push that next node into the heap.

4. **Continue Until the Heap is Empty:**
   - Repeat the process until all the nodes from all the linked lists have been processed and added to the merged list.

5. **Return the Result:**
   - Return the merged list starting from the node next to the dummy node.

### Time Complexity:
- Inserting into and extracting from the heap both take **O(log k)**, where `k` is the number of linked lists.
- Since there are `n` total nodes across all lists, the overall time complexity is **O(n log k)**, where `n` is the total number of nodes.

### Space Complexity:
- The space complexity is **O(k)**, as the heap will contain at most `k` elements (one from each list) at any time.

### Example:

Consider the following input:
- `lists = [[1,4,5],[1,3,4],[2,6]]`

We begin by adding the head of each list to the heap:
- Heap: `[1 (from list 1), 1 (from list 2), 2 (from list 3)]`

Next, we repeatedly pop the smallest element and add it to the result list:
- Pop `1 (from list 1)`. Add it to the result. Push `4 (next from list 1)` to the heap.
- Pop `1 (from list 2)`. Add it to the result. Push `3 (next from list 2)` to the heap.
- Pop `2 (from list 3)`. Add it to the result. Push `6 (next from list 3)` to the heap.
- Continue this process until all nodes are processed.

Final merged list: `1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6`.

### Edge Cases:
1. If the input list is empty (i.e., no linked lists are provided), return `[]`.
2. If all input linked lists are empty, return `[]`.

### Conclusion:
This approach efficiently merges `k` sorted linked lists by leveraging a min-heap to maintain the smallest element at each step.
