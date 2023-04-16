const n = 3;

function solution(n) {
  return Number.isInteger(Math.sqrt(n))
    ? (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1)
    : -1;
}

console.log(solution(n));
