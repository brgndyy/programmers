function solution(numbers) {
  let numbersSum = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      numbersSum.push(numbers[i] * numbers[j]);
    }
  }
  return Math.max(...numbersSum);
}

// const numbers = [1, 2, -3, 4, -5];

// function solution(numbers) {
//   numbers.sort((a, b) => a - b); // [-5, -3, 1, 2, 4];

//   return Math.max(
//     numbers[0] * numbers[1],
//     numbers[numbers.length - 1] * numbers[numbers.length - 2]
//   );
// }
// console.log(solution(numbers));
