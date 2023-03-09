const n = 144;

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

console.log(solution(n));
