function findLongestSubstring(str) {
  let strMap = new Map();

  let maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    strMap.set(str[i], strMap.get(str[i]) + 1 || 1);
    let p2 = i + 1;

    while (strMap.get(str[p2]) !== 1 && p2 < str.length) {
      strMap.set(str[p2], strMap.get(str[p2]) + 1 || 1);
      p2++;
    }

    maxLen = Math.max(maxLen, strMap.size);
    strMap.clear();
  }

  return maxLen;
}

console.log(findLongestSubstring("thisishowwedoit"));
