const numbers = [1, 2, -3, 4, -5];

function solution(numbers) {
  let maxNum = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    let multiplyNum = numbers[i] * numbers[i + 1];

    if (maxNum < multiplyNum) {
      maxNum = multiplyNum;
    }
  }

  return maxNum;
}

console.log(solution(numbers));
