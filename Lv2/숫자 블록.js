function solution(begin, end) {
  let arr = Array(end - begin + 2).fill(0);
  let maxIndex = Math.floor((end - begin + 1) / 2);

  for (let i = 1; i <= maxIndex; i++) {
    for (let j = i * 2; j < arr.length; j += i) {
      arr[j] = i;
    }
  }

  arr.shift();
  return arr;
}
