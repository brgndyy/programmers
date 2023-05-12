const n = 15;

function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let count = 1;

    while (sum <= 15) {
      sum += count;

      count++;
    }

    if (sum === 15) {
      answr++;
    }
  }

  return answer;
}

console.log(solution(n));

// 반복문을 돌면서 1,  2, 3 부터 더해짐
