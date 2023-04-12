const n = 7;

function solution(n) {
  var answer = 0;
  let factorial = 1;

  while (factorial <= n) {
    answer++;
    factorial = factorial * answer;
  }

  return answer - 1;
}

console.log(solution(n));
