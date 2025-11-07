function containsNearbyDuplicate(nums: number[], k: number): boolean {
  /* ------ brut force approch -----

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length && (j - i) <= k; j++) {
            if (nums[i] == nums[j]) {
                return true
            }
        }
    }
    return false;

    */

  /* ----- better solution ----

    better solution can be first sort the array (nlogn)
    and after that traver array (n) and see if there is any duplicate
    O(nlogn + n)
    */

  /* ------ optimal solution ------ */

  const st = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (st.has(nums[i])) {
      return true;
    }
    st.add(nums[i]);

    if (st.size > k) st.delete(nums[i - k]);
  }
  return false;

  // time: O(n)   space: O(k)
}
