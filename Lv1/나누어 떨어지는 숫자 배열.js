const arr = [3, 2, 6];
const divisor = 10;

function solution(arr, divisor) {
  const answer = arr.filter((a) => a % divisor === 0).sort((a, b) => a - b);

  return answer.length === 0 ? [-1] : answer;
}

console.log(solution(arr, divisor));
