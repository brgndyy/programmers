const box = [10, 8, 6];
const n = 3;

function solution(box, n) {
  var answer = 1;

  let boxNums = box.map((box) => Math.floor(box / n));

  return boxNums.reduce((a, b) => {
    return a * b;
  }, 1);
}

console.log(solution(box, n));
