/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head) return null;
    
    // Step 1: Check if we have k nodes to reverse
    let node = head;
    for (let i = 0; i < k; i++) {
        if (!node) return head; // Not enough nodes to reverse
        node = node.next;
    }
    
    // Step 2: Reverse k nodes
    let prev = null;
    let curr = head;
    for (let i = 0; i < k; i++) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    // Step 3: Recursively reverse the next part
    head.next = reverseKGroup(curr, k);
    
    // Step 4: Return the new head of the reversed section
    return prev;
};