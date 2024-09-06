# Reverse Nodes in k-Group

## Problem Statement
Given the head of a linked list, reverse the nodes of the list `k` at a time, and return the modified list. `k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k`, then the left-out nodes in the end should remain as they are.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

## Approach

To solve this problem, we can follow these steps:

### Step 1: Check for k Nodes
- Traverse the list to check if there are at least `k` nodes available to reverse.
- If fewer than `k` nodes remain, leave them as they are.

### Step 2: Reverse k Nodes
- If there are enough nodes, proceed to reverse the first `k` nodes.
- Reversing can be done by changing the `next` pointers of the nodes in the current group.

### Step 3: Process the Remaining Nodes
- After reversing the first group of `k` nodes, recursively or iteratively process the rest of the list by reversing the next group of `k` nodes.
- Continue this process until no more groups of `k` nodes are left to reverse.

### Step 4: Join the Groups
- Once a group of nodes is reversed, link it back to the remaining part of the list.
- If a group is reversed, connect the `next` pointer of the last node in the group to the result of the next reversal.

### Edge Cases:
- If the list is empty (`head == null`), return `null`.
- If `k == 1`, return the original list since no reversal is needed.
  
### Time Complexity:
- The time complexity is O(n), where `n` is the total number of nodes in the linked list since each node is processed exactly once.

### Space Complexity:
- The space complexity can be O(1) if solved iteratively, which is optimal since no extra space is required other than a few variables.
