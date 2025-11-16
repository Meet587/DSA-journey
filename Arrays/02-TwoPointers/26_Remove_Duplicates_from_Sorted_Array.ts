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
   let low = 0;
   let high = 0;

    while(high <nums.length){
        high++;
        if(nums[low] !== nums[high]){
            nums[++low] = nums[high];
        }
    }

   return low;
};