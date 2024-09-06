/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let heap = new MinPriorityQueue({ priority: x => x.val });
    
    for (let list of lists) {
        if (list) heap.enqueue(list);
    }
    
    let dummy = new ListNode(0);
    let current = dummy;
    
    while (!heap.isEmpty()) {
        let node = heap.dequeue().element;
        current.next = node;
        current = current.next;
        if (node.next) heap.enqueue(node.next);
    }
    
    return dummy.next;
};
