const n = 15;

function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    isMixNumber(i) ? count++ : null;
  }
  return count;
}

// 합성수인지 판별하는 함수
function isMixNumber(num) {
  let count = 0;
  // 약수의 개수를 셈
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    num % i === 0 ? count++ : null;
  }
  return count >= 2 ? true : false;
}

console.log(solution(n));

function solution(n) {
  let count = 0;
  // 1부터 n까지 반복문을 돌리는데, 약수의 갯수를 세는 함수를 실행시킨다.
  for (let i = 1; i <= n; i++) {
    isMixNumber(i) ? count++ : null;
  }
  return count;
}

function isMixNumber(number) {
  let count = 0;
  for (let i = 1; i < Math.floor(number / 2); i++) {
    number % i === 0 ? count++ : null;
  }

  return count >= 2 ? true : false;
}
