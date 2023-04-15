const a = 3;
const b = 5;

function solution(a, b) {
  return Array.from({ length: Math.abs(a - b) + 1 }, (_, index) =>
    a > b ? index + b : index + a
  ).reduce((a, b) => a + b, 0);
}

console.log(solution(a, b));
