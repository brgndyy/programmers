const n = 10;
const k = 3;

function solution(n, k) {
  let service = Math.floor(n / 10);

  return 12000 * n + (k - service) * 2000;
}

console.log(solution(n, k));
