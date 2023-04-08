const numbers = [10, 20, 30, 5, 5, 20, 5];

function solution(numbers) {
  let numbersSum = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      numbersSum.push(numbers[i] * numbers[j]);
    }
  }

  return Math.max(...numbersSum);
}
console.log(solution(numbers));
