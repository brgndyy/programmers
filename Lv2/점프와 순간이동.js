const N = 5000;

function solution(N) {
  let answer = 0;

  while (N !== 0) {
    if (N % 2 === 0) {
      N = N / 2;
    } else {
      N--;
      answer++;
    }
  }

  return answer;
}

console.log(solution(N));
