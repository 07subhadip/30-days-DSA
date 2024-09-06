/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        if (head == null) return null;
        
        // Step 1: Check if we have k nodes to reverse
        ListNode node = head;
        for (int i = 0; i < k; i++) {
            if (node == null) return head; // Not enough nodes to reverse
            node = node.next;
        }
        
        // Step 2: Reverse k nodes
        ListNode prev = null;
        ListNode curr = head;
        ListNode next = null;
        for (int i = 0; i < k; i++) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        // Step 3: Recursively reverse the next part
        head.next = reverseKGroup(next, k);
        
        // Step 4: Return the new head of the reversed section
        return prev;
    }
}