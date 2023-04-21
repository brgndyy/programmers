const X = "100";
const Y = "123450";

function solution(X, Y) {
  let answerArr = [];
  let splitX = X.split(""); //['1', '0', '0']

  for (let i = 0; i < splitX.length; i++) {
    if (Y.includes(splitX[i])) {
      let splitY = Y.split("").splice(Y.indexOf(splitX[i]), 1);
      let joinY = splitY.join("");
    }
  }

  return splitX;
}

console.log(solution(X, Y));
