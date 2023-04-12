const numbers = [1, 3, 5];
const num1 = 1;
const num2 = 2;

function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

console.log(solution(numbers, num1, num2));
