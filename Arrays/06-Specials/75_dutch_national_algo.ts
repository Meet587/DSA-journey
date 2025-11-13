// 75. Sort Colors

function sortColors(nums: number[]): void {
  let zero = 0;
  let one = 0;
  let two = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zero++;
    if (nums[i] === 1) one++;
    if (nums[i] === 2) two++;
  }

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
