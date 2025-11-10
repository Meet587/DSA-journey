// with for loop - better
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

function removeDuplicates1(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else if (nums[i] < nums[j]) {
      i++;
      nums[i] = nums[j];
      j++;
    }
  }
  return i + 1;
}
