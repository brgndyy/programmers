const n = 15;

function solution(n) {
  var answer = 0;

  if (Math.floor(n / 7) < 1) {
    answer = 1;
  } else if (n % 7 === 0) {
    answer = n / 7;
  } else {
    answer = Math.floor(n / 7) + 1;
  }

  return answer;
}

console.log(solution(n));
