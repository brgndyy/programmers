const X = "5525";
const Y = "1255";

function solution(X, Y) {
  let answerArr = [];
  let splitX = X.split(""); //['1', '0', '0']
  let splitY = Y.split("");

  for (let i = 0; i < splitX.length; i++) {
    if (Y.includes(splitX[i])) {
      answerArr.push(splitX[i]);
      splitY.splice(Y.indexOf(splitX[i]), 1);
      Y = splitY.join("");
    }
  }

  return answerArr.length === 0
    ? "-1"
    : Number(answerArr.sort((a, b) => b - a).join("")).toString();
}

console.log(solution(X, Y));
