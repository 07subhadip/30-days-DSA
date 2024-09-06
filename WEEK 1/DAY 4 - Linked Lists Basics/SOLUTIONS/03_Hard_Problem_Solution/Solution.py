# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def reverseKGroup(self, head, k):
        # Step 1: Check if we have k nodes to reverse
        node = head
        for i in range(k):
            if not node:
                return head  # Not enough nodes, return original head
            node = node.next
        
        # Step 2: Reverse k nodes
        prev = None
        curr = head
        for i in range(k):
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        
        # Step 3: Recursively reverse the next part
        head.next = self.reverseKGroup(curr, k)
        
        # Step 4: Return the new head of the reversed section
        return prev
        """
        :type head: ListNode
        :type k: int
        :rtype: ListNode
        """
        