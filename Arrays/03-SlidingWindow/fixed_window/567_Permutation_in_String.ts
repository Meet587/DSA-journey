function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const s1Map = new Map();
  for (let i = 0; i < s1.length; i++) {
    s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
  }

  const windowSize = s1.length;
  const windowCount = new Map();

  for (let i = 0; i < windowSize; i++) {
    windowCount.set(s2[i], (windowCount.get(s2[i]) || 0) + 1);
  }

  if (mapsAreEqual(s1Map, windowCount)) return true;

  for (let i = windowSize; i < s2.length; i++) {
    windowCount.set(s2[i], (windowCount.get(s2[i]) || 0) + 1);

    const oldChar = s2[i - windowSize];
    windowCount.set(oldChar, windowCount.get(oldChar) - 1);
    if (windowCount.get(oldChar) === 0) windowCount.delete(oldChar);
    if (mapsAreEqual(s1Map, windowCount)) return true;
  }
  return false;
}

function mapsAreEqual(
  map1: Map<string, number>,
  map2: Map<string, number>
): boolean {
  if (map1.size !== map2.size) return false;

  for (const [key, value] of map1) {
    if (map2.get(key) !== value) return false;
  }

  return true;
}
