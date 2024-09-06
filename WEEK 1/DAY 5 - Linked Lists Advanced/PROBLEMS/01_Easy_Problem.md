# Remove Nth Node From End of List

Given the `head` of a linked list, remove the n<sup>th</sup> node from the end of the list and return its head.

 

**Example 1:**

<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg" style="width: 542px; height: 222px;">

    Input: head = [1,2,3,4,5], n = 2
    Output: [1,2,3,5]

**Example 2:**

    Input: head = [1], n = 1
    Output: []

**Example 3:**

    Input: head = [1,2], n = 1
    Output: [1]
 

**Constraints:**

- The number of nodes in the list is `sz`.
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`
 

**Follow up:**

Could you do this in one pass?