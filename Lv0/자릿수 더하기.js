const n = 930211;

function solution(n) {
  let answer;
  let splitNums = n.toString().split("");
  answer = splitNums.reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0);

  return answer;
}

console.log(solution(n));
