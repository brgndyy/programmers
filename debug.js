const n = 4;
const k = 6;

function solution(n, k) {
  let arr = Array.from({ length: n }, (_, index) => index + 1);
  let answer = [];

  let totalIndex = k - 1;

  while (arr.length) {
    if (totalIndex === 0) {
      answer.push(...arr);
      break;
    }

    let numPeriod = factorial(arr.length - 1);

    let groupIndex = Math.floor(totalIndex / numPeriod);

    totalIndex = totalIndex % numPeriod;

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
