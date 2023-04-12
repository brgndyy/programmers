const n = 10;

function solution(n) {
  return Array.from({ length: n }, (_, index) => index + 1)
    .filter((num) => num % 2 === 0)
    .reduce((a, b) => {
      return a + b;
    }, 0);
}

console.log(solution(n));
