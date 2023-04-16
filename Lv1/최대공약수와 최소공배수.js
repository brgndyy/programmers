const n = 18;
const m = 27;

function solution(n, m) {
  let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

  return gcd(n, m);
}

console.log(solution(n, m));
