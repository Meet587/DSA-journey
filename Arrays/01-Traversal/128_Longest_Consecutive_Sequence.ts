function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  /* ---- better approch (nlogn)
    nums.sort((a, b) => a - b);

    let LSC = 1;
    let SC = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        if (nums[i] - nums[i - 1] === 1) {
            SC++;
        } else {
            SC = 1;
        }
        if (SC > LSC) LSC = SC;
    }

    return LSC;
    */

  const numSet = new Set(nums);
  let LSC = 1;

  for (const n of numSet) {
    if (numSet.has(n - 1)) {
      continue;
    } else {
      let current = n;
      let SC = 1;
      while (numSet.has(current + 1)) {
        current++;
        SC++;
      }
      LSC = Math.max(LSC, SC);
    }
  }
  return LSC;
}
