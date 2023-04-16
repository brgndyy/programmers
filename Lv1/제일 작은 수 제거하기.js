const arr = [10];

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);

  return arr.length > 0 ? arr : [-1];
}

console.log(solution(arr));
