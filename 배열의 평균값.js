const numbers = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

function solution(numbers) {
  let sum = numbers.reduce((a, b) => {
    return a + b;
  }, 0);

  return sum / numbers.length;
}

console.log(solution(numbers));
