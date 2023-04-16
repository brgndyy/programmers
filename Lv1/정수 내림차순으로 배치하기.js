const n = 118372;

function solution(n) {
  n = n
    .toString()
    .split("")
    .sort((a, b) => b - a, 0)
    .join("");

  return parseInt(n);
}

console.log(solution(n));
