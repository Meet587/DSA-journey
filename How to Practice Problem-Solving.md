# Breaking Through DSA Bottlenecks: Arrays

Understood. You’re clear on **concepts**, but struggling to **apply them** — a very common DSA bottleneck.
Here’s how to break through that specifically for **arrays** (and later reuse the same pattern for any topic).

---

* **Review “Hard” problems every 3 days.**
* **Review “Medium” every 7 days.**
* **Monthly recap for “Mastered”.**

---

## 1. Understand Why Array Problems Feel Hard

Arrays seem simple but require combining:

* **Pattern recognition** (e.g., Two Pointers, Sliding Window)
* **Precise indexing & boundary control**
* **Logical decomposition** (translating problem text to operations)

You don’t lack knowledge — you lack **pattern fluency**.

---

## 2. Structured Training Plan: Arrays

### Phase 1 – Core Patterns (5–7 days)

Learn and **master each pattern in isolation** before mixing.

| Pattern          | Key Idea                    | Starter Problems                                   |
| ---------------- | --------------------------- | -------------------------------------------------- |
| Traversal        | Simple iteration            | Find max/min element, sum of array                 |
| Two Pointers     | Compare or merge elements   | Pair Sum, Remove Duplicates from Sorted Array      |
| Sliding Window   | Subarray of variable length | Max Sum Subarray, Longest Substring without Repeat |
| Prefix Sum       | Cumulative totals           | Subarray Sum = K, Equilibrium Index                |
| Sorting + Search | Transform then query        | 3Sum, Merge Intervals                              |
| Hash Map         | Counting & lookup           | Two Sum, Subarray with 0 Sum                       |

Each day:

1. Watch 1 pattern explanation (1 video or article).
2. Solve **3 problems** of that pattern (easy → medium).
3. Write down *the logic in words*, not code.

---

## 3. How to Practice Problem-Solving (Step-by-Step)

### Step 1: Read & Reframe

Rewrite the problem in your own words before coding.
Example:
“Find subarray with sum K” → “Need indices i, j where prefix[j] - prefix[i-1] = K.”

### Step 2: Think Inputs → Outputs

Ask:

* What does the input look like?
* What transformations are needed?
* What should the output represent?

### Step 3: Identify the Pattern

Match with a known type:

* Two indexes moving? → Two pointers.
* Continuous subarray condition? → Sliding window or prefix sum.
* Need frequency counts? → Hash map.

### Step 4: Dry Run Small Examples

Always simulate with hand or print:

```python
arr = [1, 2, 3, 4]
target = 5
```

Trace variables step-by-step. You’ll see boundary bugs instantly.

### Step 5: Code Slowly

Implement the smallest working skeleton, then expand:

1. Loop structure
2. Condition checks
3. Output logic

### Step 6: Analyze & Reflect

After AC (Accepted):

* Could I have optimized?
* What’s the time complexity?
* What’s the core trick or insight?

Record it in a **Problem Log** like:

```text
Problem: Subarray Sum Equals K
Pattern: Prefix Sum + Hash Map
Insight: Store cumulative sum frequencies
Mistake: Forgot initial {0:1} base case
Complexity: O(n)
```

---

## 4. Weekly Practice Framework

| Day | Focus                 | Tasks                           |
| --- | --------------------- | ------------------------------- |
| Mon | Traversal + Basics    | 3 easy problems                 |
| Tue | Two Pointers          | 3 problems                      |
| Wed | Sliding Window        | 3 problems                      |
| Thu | Prefix Sum            | 3 problems                      |
| Fri | Hash Map Applications | 3 problems                      |
| Sat | Mixed Review          | Re-solve 3 hard ones            |
| Sun | Reflection            | Review notes + mark tricky ones |

---

## 5. Tools & Format

* **LeetCode**: Filter by topic “Array” and difficulty.

* **Sheet tracking**: Use Google Sheets or Notion table:

  ```text
  | Problem | Pattern | Status | Insight | Revisit Date |
  |----------|----------|--------|----------|---------------|
  ```

* **Code storage**: Keep clean versions on GitHub in folders:

  ```text
  /Arrays
    /TwoPointers
    /SlidingWindow
  ```

---

## 6. Fixing the “Stuck” Feeling

When you’re stuck for >15 min:

1. Write the brute-force solution first (no shame).
2. Identify what repeats — that repetition usually hints at the needed pattern.
3. Watch one editorial or solution — then **reimplement from memory** after 2 hours.
4. Add that problem to your “Hard List” for spaced re-practice.

---
