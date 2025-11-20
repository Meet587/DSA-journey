function isHappy(n: number): boolean {
  let slow = walk(n);
  let fast = walk(walk(n));

  while (fast != 1 && slow != fast) {
    slow = walk(slow);
    fast = walk(walk(fast));
  }

  return fast === 1;
}

function walk(n: number): number {
  let sum = 0;

  while (n > 0) {
    let d = n % 10;
    n = Math.floor(n / 10);
    sum = sum + d * d;
  }

  return sum;
}
