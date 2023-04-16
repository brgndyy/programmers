const arr = [1, 2, 3, 4];

function solution(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

console.log(solution(arr));
