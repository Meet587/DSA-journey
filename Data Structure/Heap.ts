class MinHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  private parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  private left(i: number): number {
    return 2 * i + 1;
  }

  private right(i: number): number {
    return 2 * i + 2;
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  push(value: number): void {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  pop(): number | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return root;
  }

  private heapifyUp(index: number): void {
    while (index > 0 && this.heap[this.parent(index)] > this.heap[index]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  private heapifyDown(index: number): void {
    let smallest = index;
    const left = this.left(index);
    const right = this.right(index);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  size(): number {
    return this.heap.length;
  }

  peek(): number | undefined {
    return this.heap[0];
  }

  toArray(): number[] {
    return [...this.heap];
  }
}

function topKElements(nums: number[], k: number): number[] {
  const heap = new MinHeap();

  for (const num of nums) {
    heap.push(num);
    if (heap.size() > k) heap.pop();
  }

  return heap.toArray(); // contains top k largest elements (unordered)
}

// Example
console.log(topKElements([3, 2, 1, 5, 6, 4], 2)); // e.g. [5, 6]


// This code implements a min-heap manually because TypeScript lacks a built-in heap.
// Complexity: O(n log k) time, O(k) space.