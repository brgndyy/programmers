const n = 12;
const numlist = [2, 100, 120, 600, 12, 12];

function solution(n, numlist) {
  var answer = [];

  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) {
      answer.push(numlist[i]);
    }
  }
  return answer;
}

console.log(solution(n, numlist));
