const numbers = [1, 2, 3, 4];
const k = 2;

function solution(numbers, k) {
  var answer = 0;

  // numbers.length가 짝수일때,

  if (numbers.length % 2 === 0) {
    for (let i = 1; i < k; i++) {
      answer += 2;

      if (answer > numbers.length - 1) {
        answer = numbers[0];
      }
    }
  }

  return answer;
}

console.log(solution(numbers, k));
