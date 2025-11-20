/**
 * Approach: Floyd's Cycle Detection (Tortoise and Hare)
 *
 * We treat the array as a linked list where the index represents the node and the value at that index
 * represents the pointer to the next node. Since there is a duplicate number, multiple indices point
 * to the same value, creating a cycle. The duplicate number is the entry point of this cycle.
 *
 * Steps:
 * 1. Initialize two pointers, `slow` and `fast`, to the start of the array (index 0).
 * 2. Phase 1: Detect the cycle.
 *    - Move `slow` one step at a time: slow = nums[slow]
 *    - Move `fast` two steps at a time: fast = nums[nums[fast]]
 *    - Repeat until `slow` and `fast` meet. This intersection point is somewhere within the cycle.
 * 3. Phase 2: Find the entrance to the cycle (the duplicate number).
 *    - Reset `slow` to the start of the array (0).
 *    - Keep `fast` at the intersection point.
 *    - Move both `slow` and `fast` one step at a time.
 *    - The point where they meet again is the entrance to the cycle, which is the duplicate number.
 */
function findDuplicate(nums: number[]): number {
  let slow = 0;
  let fast = 0;

  // Phase 1: Detect the cycle
  while (true) {
    slow = nums[slow]; // Move slow 1 step
    fast = nums[nums[fast]]; // Move fast 2 steps

    if (slow === fast) {
      // Phase 2: Find the entrance to the cycle
      slow = 0;
      while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
      }
      return fast;
    }
  }
}

