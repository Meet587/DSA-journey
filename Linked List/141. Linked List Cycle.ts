import { ListNode } from "../Data Structure/LinkedList";

function hasCycle(head: ListNode | null): boolean {
  let low = head;
  let high = head;

  while (high !== null && high.next !== null) {
    // @ts-expect-error
    low = low.next;
    high = high.next.next;
    if (low === high) return true;
  }

  return false;
}
