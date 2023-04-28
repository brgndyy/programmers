const array = [10, 11, 12, 14];
const n = 13;

function solution(array, n) {
  return array.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || a - b)[0];
}

console.log(solution(array, n));
