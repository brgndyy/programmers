const n = 3;
const k = 5;

function solution(n, k) {
  let arr = Array.from({ length: n }, (_, index) => index + 1);
  let answer = [];

  function factorial(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
      res *= i;
    }
    return res;
  }

  let nth = k - 1;

  while (arr.length) {
    if (nth === 0) {
      answer.push(...arr);
      break;
    }

    const fact = factorial(arr.length - 1);
    const index = (nth / fact) >> 0;

    nth = nth % fact;

    answer.push(arr[index]);
    arr.splice(index, 1);
  }

  return answer;
}

console.log(solution(n, k));
