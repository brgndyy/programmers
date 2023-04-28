const numlist = [1, 2, 3, 4, 5, 6];
const n = 4;

function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

console.log(solution(numlist, n));
