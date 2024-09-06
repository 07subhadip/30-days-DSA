# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        import heapq
        
        min_heap = []
        
        # Add the head of each list to the heap
        for l in lists:
            if l:
                heapq.heappush(min_heap, (l.val, l))
                
        dummy = ListNode(0)
        current = dummy
        
        while min_heap:
            val, node = heapq.heappop(min_heap)
            current.next = node
            current = current.next
            if node.next:
                heapq.heappush(min_heap, (node.next.val, node.next))
                
        return dummy.next
