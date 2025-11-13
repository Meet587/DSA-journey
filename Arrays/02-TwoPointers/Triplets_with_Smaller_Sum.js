// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} sum
 * @return {number}
 */

class Solution {
  countTriplets(nums, n, sum) {
    // code here
    nums.sort((a, b) => a - b);
    let res = 0;
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const total = nums[i] + nums[left] + nums[right];

        if (total >= sum) {
          right--;
        } else if (total < sum) {
          res = res + right - left;
          left++;
        }
      }
    }

    return res;
  }
}
