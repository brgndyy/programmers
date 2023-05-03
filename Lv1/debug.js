const X = "100";
const Y = "123450";

function solution(X, Y) {
  let sortX = X.split("").sort((a, b) => Number(b) - Number(a));
  let sortY = Y.split("").sort((a, b) => Number(b) - Number(a));
  let filtered = sortX.filter((str) => Y.includes(str));

  return filtered;
}

console.log(solution(X, Y));
