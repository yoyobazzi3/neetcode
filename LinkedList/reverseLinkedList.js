/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
    let current = head;
    let prev = null;

    while(current != null){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
        return prev;
    }
}
