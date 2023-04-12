const n = 20;

function solution(n) {
  let isSqrt = 0;
  var answer = 0;

  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      answer += 2;
    }
  }

  return Number.isInteger(Math.sqrt(n)) ? (answer += 1) : answer;
}

console.log(solution(n));
