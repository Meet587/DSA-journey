function findMaxAverage(nums: number[], k: number): number {
  let maxAvg = 0;
  let avg = 0;
  let right = 0;
  let sum = 0;

  while (right < k) {
    sum = sum + nums[right++];
  }
  avg = sum / k;
  maxAvg = avg;

  for (let i = right; i < nums.length; i++) {
    avg = avg + nums[i] / k - nums[i - k] / k;
    maxAvg = Math.max(maxAvg, avg);
  }

  return maxAvg;
}
