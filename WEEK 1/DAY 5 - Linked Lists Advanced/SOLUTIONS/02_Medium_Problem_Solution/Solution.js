/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // let number1 = l1.join('');
    // let number1Digit = parseInt(number1);
    // let number2 = l2.join('');
    // let number2Digit = parseInt(number2);
    // let sumOfDigits = number1Digit + number2Digit;
    // let summedArray = sumOfDigits.split('').Map(Number);
    // return summedArray;

    // this code will not run because it is programmed for array not for linked list

    // let dummyHead = new ListNode(0);
    // let current = dummyHead;
    // let carry = 0;

    // while (l1 !== null || l2 !== null) {
    //     let x = (l1 !== null) ? l1.val : 0;
    //     let y = (l2 !== null) ? l2.val : 0;
    //     let sum = x + y + carry;
    //     carry = Math.floor(sum / 10);
    //     current.next = new ListNode(sum % 10);
    //     current = current.next;
        
    //     if (l1 !== null) l1 = l1.next;
    //     if (l2 !== null) l2 = l2.next;
    // }
    
    // if (carry > 0) {
    //     current.next = new ListNode(carry);
    // }
    
    // return dummyHead.next;

    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;
        const sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    return dummyHead.next;

    // let dummyHead = new ListNode(0);
    // let current = dummyHead;
    // let carry = 0;

    // while (l1 !== null || l2 !== null || carry !== 0) {
    //     const x = l1 ? l1.val : 0;
    //     const y = l2 ? l2.val : 0;
    //     const sum = x + y + carry;
    //     carry = Math.floor(sum / 10);
    //     current.next = current.next || new ListNode(0);
    //     current = current.next;
    //     current.val = sum % 10;

    //     l1 = l1 ? l1.next : null;
    //     l2 = l2 ? l2.next : null;
    // }
    
    // return dummyHead.next;
};