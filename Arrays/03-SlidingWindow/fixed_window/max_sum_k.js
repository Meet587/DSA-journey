/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

function maxSubarraySum(arr, k) {
  // Edge cases: if k is 0 or array is empty, maximum sum is 0
  if (!arr || arr.length === 0 || k <= 0) return 0;

  // Initialize the sum of the first window of size k
  let sum = 0;
  for (let j = 0; j < k && j < arr.length; j++) {
    sum += arr[j];
  }

  // maxSum holds the largest sum seen so far; start with the first window's sum
  let maxSum = sum;

  // Slide the window across the array one element at a time.
  // For each step, add the new entering element and remove the leaving element.
  // This updates the window sum in O(1) time per slide.
  for (let i = k; i < arr.length; i++) {
    // Add the new element on the right, subtract the element that falls out on the left
    sum += arr[i];
    sum -= arr[i - k];

    // Update maxSum if the current window sum is larger
    if (sum > maxSum) maxSum = sum;
  }

  // Return the maximum sum found among all windows of size k
  return maxSum;
}
