const numbers = [4, 455, 6, 4, -1, 45, 6];
const direction = "left";

function solution(numbers, direction) {
  if (direction === "left") {
    numbers.push(numbers.shift());
  } else {
    numbers.unshift(numbers.pop());
  }

  return numbers;
}

console.log(solution(numbers, direction));
