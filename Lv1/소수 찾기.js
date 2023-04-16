const n = 10;

function solution(n) {
  let arr = Array.from({ length: n + 1 }, (_, index) => index + 3);

  return arr;
}

console.log(solution(n));
