/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* dummy = new ListNode(0);  // Create a dummy node
        dummy->next = head;
        ListNode* fast = dummy;
        ListNode* slow = dummy;

        // Move fast pointer n steps ahead
        for (int i = 0; i < n; ++i) {
            fast = fast->next;
        }

        // Move fast to the end, maintaining the gap between fast and slow
        while (fast->next != nullptr) {
            fast = fast->next;
            slow = slow->next;
        }

        // Remove the nth node
        slow->next = slow->next->next;

        return dummy->next;  // Return the new head (skipping the dummy node)
    }
};
