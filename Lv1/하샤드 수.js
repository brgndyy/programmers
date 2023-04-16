const x = 12;

function solution(x) {
  return x %
    x
      .toString()
      .split("")
      .reduce((a, b) => Number(a) + Number(b), 0) ===
    0
    ? true
    : false;
}

console.log(solution(x));
