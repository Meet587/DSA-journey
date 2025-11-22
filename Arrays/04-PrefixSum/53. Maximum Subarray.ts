function maxSubArray(nums: number[]): number {
  let res = nums[0];
  let bestEnding = nums[0];

  for (let i = 1; i < nums.length; i++) {
    bestEnding = Math.max(bestEnding + nums[i], nums[i]);
    res = Math.max(bestEnding, res);
  }

  return res;
}

// Smallest sum contiguous subarray

function smallestSumSubarray(A: number[], N: number) {
  // your code here
  let best = A[0];
  let res = A[0];

  for (let i = 1; i < A.length; i++) {
    best = Math.min(best + A[i], A[i]);
    res = Math.min(best, res);
  }
  return res;
}
