function solution(n, k) {
  const arr = Array.from({ length: n }, (_, index) => index + 1);

  let answer = [];

  let totalIndex = k - 1;

  while (arr.length) {
    if (totalIndex === 0) {
      answer.push(...arr);
      break;
    }

    // 바뀌는 주기
    let numPeriod = factorial(arr.length - 1);

    // 주기를 나눈 몫으로 어느 그룹에 속해있는지 알수 있음
    let groupIndex = Math.floor(totalIndex / numPeriod);

    // 다음 순환에서 계산한 k 업데이트
    totalIndex = totalIndex % numPeriod;

    answer.push(arr[groupIndex]);

    arr.splice(groupIndex, 1);
  }

  function factorial(n) {
    let res = 1;

    for (let i = 1; i <= n; i++) {
      res *= i;
    }

    return res;
  }

  return answer;
}

console.log(solution(5, 110));
