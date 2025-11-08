const values = new Map<string, number>([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
  ["IV", 4],
  ["IX", 9],
  ["XL", 40],
  ["XC", 90],
  ["CD", 400],
  ["CM", 900],
]);

function romanToInt(s: string): number {
  let sum = 0;
  let i = 0;

  while (i < s.length) {
    if (i < s.length - 1) {
      const sub = s.substring(i, i + 2);
      if (values.has(sub)) {
        // @ts-ignore
        sum = sum + values.get(sub);
        i = i + 2;
        continue;
      }
    }
    const singleSub = s.substring(i, i + 1);
    // @ts-ignore
    sum = sum + values.get(singleSub);
    i = i + 1;
  }

  return sum;
}
