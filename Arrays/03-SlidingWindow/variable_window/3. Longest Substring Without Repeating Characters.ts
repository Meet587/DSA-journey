// Function to find the length of the longest substring without repeating characters
function lengthOfLongestSubstring(s: string): number {
  let res = 0; // Store the maximum length found
  let low = 0; // Left pointer of the sliding window
  const mp = new Map(); // Map to store character frequencies in current window

  // Expand window by moving right pointer
  for (let high = 0; high < s.length; high++) {
    // Add current character to map and increment its count
    mp.set(s[high], (mp.get(s[high]) || 0) + 1);

    // Current window size
    let k = high - low + 1;

    // Shrink window from left if we have duplicate characters
    // (when map size < window size, it means there's a duplicate)
    while (mp.size < k) {
      // Decrement count of leftmost character
      mp.set(s[low], mp.get(s[low]) - 1);
      // Remove character if count becomes 0
      if (mp.get(s[low]) === 0) mp.delete(s[low]);
      // Move left pointer forward to shrink window
      low++;
      // Recalculate window size
      k = high - low + 1;
    }

    // Update result with maximum window size (which equals unique character count)
    res = Math.max(mp.size, res);
  }

  return res;
}
