function binarySearch(arr, targetNum) {
  let rowIdx = 0;
  let highIdx = arr.length - 1;

  let middleIdx = Math.floor(arr.length / 2);

  while (rowIdx <= highIdx) {
    let middleIdx = Math.floor((rowIdx + highIdx) / 2);

    if (arr[middleIdx] === targetNum) {
      return middleIdx;
    } else if (arr[middleIdx] > targetNum) {
      highIdx = middleIdx - 1;
    } else if (arr[middleIdx] < targetNum) {
      rowIdx = middleIdx + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
