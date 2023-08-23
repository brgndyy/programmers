const begin = 1;
const end = 10;

function solution(begin, end) {
  let arr = Array.from({ length: end - begin + 1 }, (_, index) => 0);

  // begin부터 end까지 돌면서
  for (let i = begin; i <= end; i++) {
    // 가장 먼저 나누어 떨어지는 제일 작은 약수를 찾아주고
    // i값에서 제일 작은 약수를 나눠준 몫이 해당 배열의 최대 약수이다.
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0 && i / j <= 1000000000) {
        arr[i - begin] = i / j;
        break; // 최대 약수를 찾았으므로 이 중첩 루프를 빠져나옴
      }
    }
    // 약수가 없으면, 값을 1로 설정
    if (arr[i - begin] === 0) {
      arr[i - begin] = 1;
    }
  }

  if (begin === 1) {
    arr[0] = 0;
  } // 첫 번째 요소가 1일 때의 예외 처리

  return arr;
}

console.log(solution(begin, end));
