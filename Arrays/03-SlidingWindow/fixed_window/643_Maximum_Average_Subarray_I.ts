/**
 * Finds the maximum average of any contiguous subarray of length k
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;

  // Initialize: Calculate sum of first window (first k elements)
  for (let j = 0; j < k; j++) {
    sum += nums[j];
  }

  // Store the first window sum as the initial maximum
  let maxSum = sum;

  // Slide the window: move from position k to end of array
  for (let i = k; i < nums.length; i++) {
    // Update sum by removing leftmost element of previous window and adding new rightmost element
    sum = sum + nums[i] - nums[i - k];

    // Track the maximum sum seen so far
    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  // Return average by dividing maximum sum by window size
  return maxSum / k;
}
