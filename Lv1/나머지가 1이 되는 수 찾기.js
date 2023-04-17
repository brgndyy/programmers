const n = 12;

function solution(n) {
  let answer;

  for (let i = n - 1; i > 0; i--) {
    if (n % i === 1) {
      answer = i;
    }
  }

  return answer;
}

console.log(solution(n));
