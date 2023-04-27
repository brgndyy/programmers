const numbers = [1, 2, 3, 4, 5];
const k = 7;

// result = 3
function solution(numbers, k) {
  let thrower;

  for (let i = 0; i < k; i += 2) {
    thrower = numbers[i];

    if (i > numbers.length - 1) {
      i = -1;
    }
  }

  return thrower;
}

console.log(solution(numbers, k));
