function minWindow(s: string, t: string): string {
  if (s.length == 0 || t.length == 0) return "";
  let res = Infinity;
  let low = 0;
  let start = -1;
  const mp = new Array(256).fill(0);
  const sMap = new Array(256).fill(0);

  for (let i = 0; i < t.length; i++) {
    mp[t.charCodeAt(i)]++;
  }

  for (let high = 0; high < s.length; high++) {
    sMap[s.charCodeAt(high)]++;

    while (checkFre(sMap, mp)) {
      let len = high - low + 1;
      if (res > len) {
        res = len;
        start = low;
      }
      sMap[s.charCodeAt(low)]--;
      low++;
    }
  }

  return res === Infinity ? "" : s.substring(start, res + start);
}

function checkFre(have: number[], needed: number[]): boolean {
  for (let i = 0; i < have.length; i++) {
    if (have[i] < needed[i]) {
      return false;
    }
  }
  return true;
}
