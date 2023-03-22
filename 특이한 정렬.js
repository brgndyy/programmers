const numlist = [10000, 20, 36, 47, 40, 6, 10, 7000];
const n = 30;

function solution(numlist, n) {
  var answer = [];
  numlist.sort((a, b) => a - b - n);
  return numlist;
}

console.log(solution(numlist, n));
