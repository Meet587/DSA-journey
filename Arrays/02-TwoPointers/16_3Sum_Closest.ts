function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      // Add current and left and right integer
      let sum = nums[i] + nums[left] + nums[right];

      // If diff to target is less than diff to result
      // New result is closer to set it as the current result
      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }

      if (sum === target) return target;
      // If current sum is less than target grab a bigger number
      else if (sum < target) left++;
      // Else grab the smaller number
      else right--;
    }
  }
  return result;
}
