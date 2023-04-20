const numbers = [2, 1, 3, 4, 1];

function solution(numbers) {
  let nums = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      nums.push(sum);
    }
  }

  let answer = [...new Set(nums)].sort((a, b) => a - b);

  return answer;
}

console.log(solution(numbers));
