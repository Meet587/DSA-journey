// Function to calculate product of array except self element
function productExceptSelf(nums: number[]): number[] {
  /* ---- brute force approach ----
    Multiply each element by all other elements (except itself)
    Time Complexity: O(n²) - nested loops
    Space Complexity: O(n) - for result array
    */

  /* ----- better solution ---- 
    Use prefix and suffix arrays:
    - prefix[i] = product of all elements before index i
    - suffix[i] = product of all elements after index i
    - answer[i] = prefix[i] * suffix[i]
    Time Complexity: O(n)
    Space Complexity: O(n) - for two additional arrays
    */

  /* ---- optimal solution -----
    Use O(1) extra space by computing prefix and suffix on the fly
    Store results directly in answer array instead of using separate arrays
    */

  let pre = 1; // Stores prefix product as we iterate left to right
  let post = 1; // Stores suffix product as we iterate right to left
  const ans = new Array(nums.length).fill(1); // Result array initialized with 1s

  // First pass (left to right): Fill answer array with prefix products
  for (let i = 0; i < nums.length; i++) {
    ans[i] = pre; // Store prefix product for current position
    pre = pre * nums[i]; // Update prefix for next iteration
  }

  // Second pass (right to left): Multiply with suffix products
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] = ans[i] * post; // Multiply existing prefix with current suffix
    post = post * nums[i]; // Update suffix for next iteration
  }

  return ans;
}

// ====================================

// Alternative implementation of the optimal solution (same logic, slightly different style)
function productExceptSelf1(nums: number[]): number[] {
  const n = nums.length;
  const answer = new Array(n);

  // Initialize first element and compute prefix products left to right
  answer[0] = 1; // First element has no elements before it
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1]; // Multiply previous prefix with element before current
  }

  // Compute suffix products right to left and multiply with existing prefixes
  let suffix = 1; // Stores suffix product starting from right
  for (let j = n - 1; j >= 0; j--) {
    answer[j] = answer[j] * suffix; // Multiply prefix with current suffix
    suffix = suffix * nums[j]; // Update suffix for next iteration (moving left)
  }

  return answer;
}
