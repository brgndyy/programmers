const numbers = [1, 2, 3, 4, 5, 6];
const k = 5;

function solution(numbers, k) {
  let catcher = 0;

  for (let i = 0; i < k; i++) {
    catcher += 2;

    if (catcher > numbers.length) {
      catcher -= numbers.length;
    }
  }

  return numbers[catcher - 2];
}

console.log(solution(numbers, k));
