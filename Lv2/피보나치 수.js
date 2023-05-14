let n = 3;

function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (i <= 2) {
      answer.push(1);
    }

    let num = answer[n - 1] + answer[n - 2];

    answer.push(num % 1234567);
  }

  return answer[n];
}

console.log(solution(n));
