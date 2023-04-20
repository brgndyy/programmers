const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];

function solution(a, b) {
  let arr = [];

  a.forEach((num, index) => arr.push(num * b[index]));

  return arr.reduce((a, b) => a + b, 0);
}

console.log(solution(a, b));
