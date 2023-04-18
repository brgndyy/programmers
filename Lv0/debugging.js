const numbers = [1, 2, 3, 4];
const k = 2;

function solution(numbers, k) {
  let answer;
  let catcher;
  let count = 0;

  for (let i = 1; i <= k; i++) {
    catcher = numbers[i - 1];

    i += 1;

    if (i >= numbers.length) {
      i -= numbers.length;
    }

    count++;
    if (count === 5) {
      break;
    }
  }

  return catcher;
}

console.log(solution(numbers, k));
