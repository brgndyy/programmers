const X = "100";
const Y = "123450";

function solution(X, Y) {
  let sortX = X.split("").sort((a, b) => Number(b) - Number(a));
  let sortY = Y.split("").sort((a, b) => Number(b) - Number(a));

  return sortY;
}

console.log(solution(X, Y));
