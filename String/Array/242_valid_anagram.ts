function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  /* ---- using hash map (slitly slower) ----- 

    const mp = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        mp.set(s[i], (mp.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        mp.set(t[i], (mp.get(t[i]) || 0) - 1);
        if (mp.get(t[i]) == 0) mp.delete(t[i]);
    }

    return mp.size === 0;

    // time: O(n) space: O(s.length)

    */

  /* ---- using array (assume all lowercase charector) ----- */

  const arr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    arr[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) return false;
  }

  return true;
}
