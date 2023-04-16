const n = 2;
const m = 5;

function solution(n, m) {
  var answer = [];

  let min;
  let max;

  if (n % m === 0 || m % n === 0) {
    min = Math.min(n, m);
    max = Math.max(n, m);
    answer.push(min, max);
  } else if (n > m) {
    let minNum = 0;
    for (let i = 1; i <= m; i++) {
      if (n % i === 0 && m % i === 0) {
        minNum = i;
      }
    }

    max = n * m;

    answer.push(minNum, max);
  } else if (m > n) {
    let minNum = 0;

    for (let i = 1; i <= n; i++) {
      if (n % i === 0 && m % i === 0) {
        minNum = i;
      }
    }
    max = n * m;

    answer.push(minNum, max);
  }

  return answer;
}

console.log(solution(n, m));
