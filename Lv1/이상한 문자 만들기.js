const s = "try hello world";

function solution(s) {
  let splitS = s.split(" ");

  let strArr = [];

  for (let i = 0; i < splitS.length; i++) {
    for (let j = 0; j < splitS[i].length; j++) {
      if (j === 0 || j % 2 === 0) {
        splitS[i][j].toUpperCase();
      } else {
        continue;
      }
    }
    strArr.push(splitS[i]);
  }

  return strArr;
}

console.log(solution(s));
