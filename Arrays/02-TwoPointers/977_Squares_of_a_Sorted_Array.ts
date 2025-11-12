function sortedSquares(nums: number[]): number[] {
  const ans = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let current = nums.length - 1;

  while (left <= right) {
    const leftSqr = nums[left] * nums[left];
    const rightSqr = nums[right] * nums[right];

    if (leftSqr < rightSqr) {
      ans[current] = rightSqr;
      current--;
      right--;
    } else {
      ans[current] = leftSqr;
      current--;
      left++;
    }
  }

  return ans;

  /*
    const a = [];
    const b = [];
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            a.push(nums[i])
        } else {
            b.push(nums[i])
        }
    }

    if (b.length === 0) {
        for (let i = 0; i < nums.length; i++) {
            ans[i] = nums[i] * nums[i];
        }
        return ans;
    }
    if (a.length === 0) {
        for (let i = 0; i < nums.length; i++) {
            ans[i] = nums[i] * nums[i];
        }
        return ans.reverse();
    }

    for (let i = 0; i < a.length; i++) {
        a[i] = a[i] * a[i];
    }
    for (let i = 0; i < b.length; i++) {
        b[i] = b[i] * b[i];
    }
    b.reverse();

    let p = 0;
    let q = 0;
    let i = 0;

    while (p < a.length && q < b.length) {
        if (a[p] < b[q]) {
            ans[i++] = a[p++];
        } else {
            ans[i++] = b[q++];
        }
    }

    while (p < a.length) {
        ans[i++] = a[p++];
    }
    while (q < b.length) {
        ans[i++] = b[q++];
    }

    return ans;
    */

  /*  --- better than above ----
    if (nums.length == 0) return []
    if (nums.length == 1) return [nums[0] * nums[0]];

    let p = -1;
    let q = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            p = i;
        }
        if (nums[i] >= 0 && q === -1) {
            q = i;
        }

        nums[i] = nums[i] * nums[i];
    }

    if (p == -1) { // all positive
        return nums;
    }

    if (q == -1) { // all nagative
        return nums.reverse();
    }

    let i = 0;
    const ans = [];
    while (p >= 0 && q < nums.length) {
        if (nums[p] < nums[q]) {
            ans[i++] = nums[p--];
        } else if (nums[p] >= nums[q]) {
            ans[i++] = nums[q++];
        }
    }

    while (p >= 0) {
        ans[i++] = nums[p--];
    }
    while (q < nums.length) {
        ans[i++] = nums[q++];
    }

    return ans;
    */

  /*
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        res[i] = nums[i] * nums[i];
    }
    res.sort((a, b) => a - b);
    return res;
    */
}
