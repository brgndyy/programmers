const n = 10;

function solution(n) {
  let count = 1;
  let pizza = 6;

  while (pizza % n !== 0) {
    count++;
    pizza += 6;
  }
  return count;
}

console.log(solution(n));
