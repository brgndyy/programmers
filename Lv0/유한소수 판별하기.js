const a = 12;
const b = 21;

function solution(a, b) {
  let num = (a / b).toString().split(".")[1].length;

  return num > 15 ? 2 : 1;
}

console.log(solution(a, b));
