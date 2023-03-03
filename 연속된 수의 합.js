const num = 3;
const total = 3;

function solution(num, total) {
  var answer = [];
  let a = "a";
  for (let i = 1; i <= num; i++) {
    a += "a" + i;
  }

  return a;
}

console.log(solution(num, total));
