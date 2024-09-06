# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        dummy = ListNode(0)  # Create a dummy node
        dummy.next = head
        fast = dummy
        slow = dummy
        
        # Move fast pointer n steps ahead
        for _ in range(n):
            fast = fast.next
        
        # Move both pointers together until fast reaches the end
        while fast.next:
            fast = fast.next
            slow = slow.next
        
        # Remove the nth node
        slow.next = slow.next.next
        
        return dummy.next  # Return the new head (skipping the dummy node)
