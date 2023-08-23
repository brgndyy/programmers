const n = 5;
const k = 110;

function solution(n, k) {
  let arr = Array.from({ length: n }, (_, index) => index + 1);
  let answer = [];

  let targetInedx = k - 1;

  while (arr.length) {
    if (targetInedx === 0) {
      answer.push(...arr);
      break;
    }

    let period = factorial(n - 1);

    let groupIndex = Math.floor(targetInedx / period);

    targetInedx = targetInedx % period;

    answer.push(arr[groupIndex]);

    arr.splice(groupIndex, 1);
  }

  function factorial(n) {
    if (n === 1) {
      return 1;
    }

    return n * factorial(n - 1);
  }

  return answer;
}

console.log(solution(n, k));
