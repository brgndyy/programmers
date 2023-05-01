const s = "try hello world";

function solution(s) {
  let splitS = s.split(" ");
  let answer = [];

  for (let i = 0; i < splitS.length; i++) {
    for (let j = 0; j < splitS[i].length; j++) {
      if (j % 2 === 0) {
        answer += splitS[i][j].toUpperCase();
      } else {
        answer += splitS[i][j];
      }
    }
  }

  return answer;
}

console.log(solution(s));
