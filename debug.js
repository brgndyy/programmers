// @ts-check

/**
 * @param {any[]} arr
 */
function compact(arr) {
  if (arr.length > 10) return arr.trim(0, 10);
  //                              ~~~~
  // 'any[]' 형식에 'trim' 속성이 없습니다.ts(2339)
  return arr;
}
