const X = "12321";
const Y = "42531";

function solution(X, Y) {
  let splitX = X.split("");
  let splitY = Y.split("");
  let answerArr = [];
  let answer = "";

  for (let i = 0; i <= 9; i++) {
    let filteredX = splitX.filter((numStr) => i.toString() === numStr).length; //[0, 0]
    let filteredY = splitY.filter((numStr) => i.toString() === numStr).length; // [0]

    let str = i.toString().repeat(Math.min(filteredX, filteredY));

    if (str === "") {
      continue;
    } else {
      answerArr.push(Number(str));
    }
  }

  let sortedArr = answerArr.sort((a, b) => b - a);

  return sortedArr.join("");
}

console.log(solution(X, Y));
