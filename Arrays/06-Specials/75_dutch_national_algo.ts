// 75. Sort Colors (LeetCode)
// This file implements the counting approach to sort an array containing only 0s, 1s, and 2s.
// Approach used here (counting):
// 1. Count occurrences of 0, 1 and 2 into three counters.
// 2. Overwrite the original array: first all 0s, then 1s, then 2s.
// Complexity: Time O(n), Space O(1) extra (only three counters).
// Alternate (in-place, one-pass): Dutch National Flag algorithm — provided below as commented code.

function sortColors(nums: number[]): void {
  // Counters for each color/value
  let zero = 0;
  let one = 0;
  let two = 0;

  // Count how many 0s, 1s and 2s are present
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zero++;
    if (nums[i] === 1) one++;
    if (nums[i] === 2) two++;
  }

  // Reconstruct the array using the counts:
  // - Fill first 'zero' slots with 0
  // - Next 'one' slots with 1
  // - Remaining 'two' slots with 2
  let i = 0;
  while (i < zero) {
    nums[i] = 0;
    i++;
  }
  while (i < one + zero) {
    nums[i] = 1;
    i++;
  }
  while (i < two + one + zero) {
    nums[i] = 2;
    i++;
  }

  /*
    // Alternate: Dutch National Flag algorithm (in-place, single pass)
    // Use three pointers: low, mid, high.
    // - nums[0..low-1] are 0s
    // - nums[low..mid-1] are 1s
    // - nums[mid..high] are unknown
    // - nums[high+1..end] are 2s
    // This swaps elements on the fly and completes in one pass with O(1) extra space.
     let low = 0, mid = 0, high = nums.length - 1;
     while (mid <= high) {
         if (nums[mid] === 0) {
             [nums[low], nums[mid]] = [nums[mid], nums[low]];
             low++;
             mid++;
         } else if (nums[mid] === 1) {
             mid++;
         } else {
             [nums[mid], nums[high]] = [nums[high], nums[mid]];
             high--;
         }
     }
  */
}
