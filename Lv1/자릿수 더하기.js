const N = 123;

function solution(n) {
  return N.toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);
}

console.log(solution(N));
