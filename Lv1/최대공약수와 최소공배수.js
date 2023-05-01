const n = 18;
const m = 27;

function solution(n, m) {
  let answer = [];
  function getGcd(a, b) {
    return b % a === 0 ? a : getGcd(b % a, a);
  }

  let lcm = 0;

  if (m % n === 0 || n % m === 0) {
    lcm = Math.max(n, m);
  } else {
    let maxNum = Math.max(n, m);
    let count = 1;

    while (lcm % n !== 0 && lcm % m !== 0) {
      lcm = maxNum * count;
      count++;
    }
  }

  return lcm;
}

console.log(solution(n, m));
