/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "../Data Structure/LinkedList";

function detectCycle(head: ListNode | null): ListNode | null {
  /*
    let slow = head;
    let fast = head;

    while (fast != null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast == slow) {
            slow = head;
            while (fast !== slow) {
                slow = slow.next;
                fast = fast.next
            }
            return fast;
        };
    }

    return null;
    */

  const st = new Set<ListNode>();

  let curr = head;

  while (curr != null) {
    if (st.has(curr)) return curr;
    st.add(curr);
    curr = curr.next;
  }
  return null;
}
