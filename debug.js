function solution(n, k) {
  const answer = [];
  // 배열 만들어 주기
  const arr = Array.from({ length: n }, (_, index) => index + 1);

  let nth = k - 1;

  while (arr.length) {
    if (nth === 0) {
      answer.push(...arr);
      break;
    }

    // 맨 앞 숫자가 바뀌는 주기의 숫자, n이 5일때 24개의 주기로 앞자리수가 변한다.
    const fact = factorial(arr.length - 1);

    // 4
    const index = Math.floor(nth / fact);

    // 현재 순열에서 얼마만큼의 순번이 떨어져있는가
    // 13
    nth = nth % fact;

    answer.push(arr[index]);
    arr.splice(index, 1);
  }

  return answer;
}

const factorial = (n) => {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
};

console.log(solution(5, 110));
