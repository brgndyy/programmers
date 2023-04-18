const numbers = [1, 2, 3];
const k = 3;

function solution(numbers, k) {
  let answer;
  let count = 0;

  for (let i = 0; i < k; i++) {
    count += 2;

    if (count > numbers.length) {
      count -= numbers.length;
    }
  }

  return count;
}

console.log(solution(numbers, k));
