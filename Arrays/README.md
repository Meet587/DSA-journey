---

```ts
// Problem: Subarray Sum Equals K
// Pattern: Prefix Sum + Hash Map
// Complexity: O(n)
// Insight: Store cumulative sum frequencies for faster lookup

function subarraySum(nums, k) {
  let count = 0,
    sum = 0;
  const map = new Map([[0, 1]]);
  for (let n of nums) {
    sum += n;
    if (map.has(sum - k)) count += map.get(sum - k);
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}
```
