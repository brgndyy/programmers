const numbers = [1, 2, 3, 4, 5, 6];
const k = 5;

function solution(numbers, k) {
  let count = 1;
  let answer = 0;

  for (let i = 0; i < k; i++) {
    count++;
    i += 2;
    if (i === numbers.length) {
      i = i - numbers.length;
    }
    answer = numbers[i];
    if (count === k) {
      break;
    }
  }

  return answer;
}

console.log(solution(numbers, k));
