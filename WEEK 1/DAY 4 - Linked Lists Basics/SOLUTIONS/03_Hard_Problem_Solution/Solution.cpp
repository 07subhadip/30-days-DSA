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
    ListNode* reverseKGroup(ListNode* head, int k) {
        if (!head) return nullptr;
        
        // Step 1: Check if there are at least k nodes to reverse
        ListNode* node = head;
        for (int i = 0; i < k; i++) {
            if (!node) return head; // Not enough nodes to reverse
            node = node->next;
        }
        
        // Step 2: Reverse k nodes
        ListNode* prev = nullptr;
        ListNode* curr = head;
        ListNode* next = nullptr;
        for (int i = 0; i < k; i++) {
            next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        
        // Step 3: Recursively reverse the next group of k nodes
        head->next = reverseKGroup(next, k);
        
        // Step 4: Return the new head of the reversed group
        return prev;
    }
};