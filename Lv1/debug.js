const s = "they are nothing";

function solution(s) {
  let splitS = s.split(" ");

  let strArr = [];

  for (let i = 0; i < splitS.length; i++) {
    let newStr = "";
    for (let j = 0; j < splitS[i].length; j++) {
      if (j === 0 || j % 2 === 0) {
        newStr += splitS[i][j].toUpperCase();
      } else {
        newStr += splitS[i][j];
      }
    }
    strArr.push(newStr);
  }

  return strArr.join(" ");
}

console.log(solution(s));
