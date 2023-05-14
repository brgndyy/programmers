let n = 3;

function solution(n) {
  let answer = [];

  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      answer.push(0);
    } else if (i <= 2) {
      answer.push(1);
    } else {
      let sum = answer[i - 1] + answer[i - 2];
      answer.push(sum % 1234567);
    }
  }

  return answer[n];
}

console.log(solution(n));
