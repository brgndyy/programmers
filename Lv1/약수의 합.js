const n = 12;

function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer.reduce((a, b) => a + b, 0);
}

console.log(solution(n));
