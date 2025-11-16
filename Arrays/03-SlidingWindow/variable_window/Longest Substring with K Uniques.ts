function longestKSubstr(s: string, k: number): number {
  // code here
  const mp = new Map();
  let res = -1;
  let low = 0;

  for (let high = 0; high < s.length; high++) {
    mp.set(s[high], (mp.get(s[high]) || 0) + 1);

    while (mp.size > k) {
      mp.set(s[low], mp.get(s[low]) - 1);
      if (mp.get(s[low]) === 0) {
        mp.delete(s[low]);
      }
      low++;
    }

    if (mp.size == k) {
      const len = high - low + 1;
      res = Math.max(res, len);
    }
  }

  return res;
}
