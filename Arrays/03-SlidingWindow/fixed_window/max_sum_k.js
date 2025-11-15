/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
  maxSubarraySum(arr, k) {
    // code here
    let maxSum = 0;
    let sum = 0;
    let right = 0;

    while (right < k) {
      sum = sum + arr[right++];
    }
    maxSum = sum;

    for (let i = right; i < arr.length; i++) {
      sum = sum + arr[i] - arr[i - k];
      maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
  }
}
