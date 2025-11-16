// This function solves the "Fruit Into Baskets" problem using the sliding window technique.
// The goal is to find the length of the longest subarray containing at most 2 distinct numbers (fruit types).
// Each number in the input array represents a type of fruit from a tree in a row.
// You can only pick fruits from a contiguous set of trees, and you can only have 2 types of fruits in your baskets at any time.

function totalFruit(fruits: number[]): number {
  // Map to store the count of each fruit type in the current window
  const mp = new Map();
  // Left pointer of the sliding window
  let low = 0;
  // Variable to keep track of the maximum number of fruits collected
  let res = 0;

  // Iterate over the array with the right pointer
  for (let high = 0; high < fruits.length; high++) {
    // Add the current fruit to the map (or increment its count)
    mp.set(fruits[high], (mp.get(fruits[high]) || 0) + 1);

    // If there are more than 2 types of fruits, shrink the window from the left
    while (mp.size > 2) {
      // Decrease the count of the fruit at the left pointer
      mp.set(fruits[low], mp.get(fruits[low]) - 1);
      // If the count becomes 0, remove it from the map
      if (mp.get(fruits[low]) === 0) {
        mp.delete(fruits[low]);
      }
      // Move the left pointer to the right
      low++;
    }
    // Update the result with the maximum window size found so far
    const len = high - low + 1;
    res = Math.max(len, res);
  }

  // Return the maximum number of fruits that can be collected
  return res;
}
