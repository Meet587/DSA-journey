import { ListNode } from "../Data Structure/LinkedList";

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    // @ts-ignore
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
