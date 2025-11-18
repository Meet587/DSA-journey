/**
 * Find the length of the longest substring with the same characters after replacing at most k characters.
 *
 * Approach: Sliding Window
 * - Use a frequency array to track character counts in the current window
 * - Expand window by moving right pointer, shrink from left when replacements needed exceed k
 * - A valid window has: (window size - most frequent char) <= k (chars to replace)
 * - Track and return the maximum valid window size
 *
 * Time: O(n), Space: O(1) - fixed 26 letters
 */
function characterReplacement(s: string, k: number): number {
  // Frequency array for 26 uppercase letters (A-Z)
  const f = new Array(26).fill(0);
  let res = 0;
  let low = 0;
  // Track the maximum frequency of any character in the current window
  let maxCount = 0;

  // Sliding window approach: expand window by moving right pointer (i)
  for (let i = 0; i < s.length; i++) {
    // Convert character to index (A=0, B=1, ..., Z=25)
    const idx = s.charCodeAt(i) - 65;
    f[idx]++;
    // Update max frequency seen so far
    maxCount = Math.max(maxCount, f[idx]);
    let window = i - low + 1;

    // If characters to replace exceeds k, shrink window from left
    // Valid window: (window size - most frequent char count) <= k replacements allowed
    while (window - maxCount > k) {
      const leftIdx = s.charCodeAt(low) - 65;
      f[leftIdx]--;
      low++;
      window = i - low + 1;
    }

    // Track the maximum valid window size
    res = Math.max(res, i - low + 1);
  }
  return res;
}
