/*
  Minimum Size Subarray Sum - Sliding Window (variable length)

  Idea (hire/fire analogy):
  - Use a sliding window [low..high] that represents the current team.
  - Expand the window by moving 'high' and adding nums[high] (hiring) until the total 'sum' >= target.
  - Once the team can complete the task (sum >= target), try to shrink the window from the left
    by moving 'low' and subtracting nums[low] (firing) to find the minimal-sized team that still meets the target.
  - Repeat expand/shrink until high reaches the end.

  Variables:
  - low: left index of window (inclusive)
  - high: right index of window (inclusive)
  - sum: current sum of window
  - res: minimum window length found (Infinity if none)

  Complexity:
  - Time: O(n) because each element is added/removed at most once.
  - Space: O(1) extra space.
*/

function minSubArrayLen(target: number, nums: number[]): number {
  let low = 0;
  let high = 0;
  let res = Infinity;
  let sum = 0;

  while (high < nums.length) {
    // Expand window: include nums[high] into current sum (hire one person)
    sum = sum + nums[high];

    // While current window can achieve the target, try shrinking from the left
    // to minimize the window size (fire from the left one by one).
    while (sum >= target) {
      const len = high - low + 1;
      res = Math.min(res, len);

      // Remove nums[low] from sum and move left bound right (fire this person)
      sum = sum - nums[low];
      low++;
    }
    high++;
  }

  // If res was never updated, return 0 (no valid subarray found)
  return res === Infinity ? 0 : res;
}
