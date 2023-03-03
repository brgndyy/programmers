let numbers = [0, 31, 24, 10, 1, 9];

function solution(numbers) {
  let answer;
  const nums = numbers.sort((a, b) => b - a);
  answer = nums[0] * nums[1];

  return answer;
}

console.log(solution(numbers));
