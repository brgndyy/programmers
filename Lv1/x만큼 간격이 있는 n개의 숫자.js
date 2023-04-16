const x = -4;
const n = 2;

function solution(x, n) {
  return Array.from({ length: n }, (_, index) => (index + 1) * x);
}

console.log(solution(x, n));
