function productExceptSelf(nums: number[]): number[] {
  /* ---- brut force approch ----

    const arr = new Array(nums.length).fill(1);
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i != j) arr[i] = arr[i] * nums[j];
        }
    }

    return arr;

    time: n + n^2, space: n

    */

  /* ----- better sollution ---- 

    const pre = [];
    const post = [];
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (i == 0) { pre.push(1); continue; };
        pre[i] = pre[i - 1] * nums[i - 1];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i == nums.length - 1) { post[i] = 1; continue; };
        post[i] = post[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        ans[i] = pre[i] * post[i];
    }

    return ans;

    */

  /* ---- optimal solution ----- */

  let pre = 1;
  let post = 1;
  const ans = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    ans[i] = pre;
    pre = pre * nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] = ans[i] * post;
    post = post * nums[i];
  }
  return ans;
}
