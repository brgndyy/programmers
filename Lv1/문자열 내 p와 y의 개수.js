const s = "pPoooyY";

function solution(s) {
  let filteredP = s
    .toLowerCase()
    .split("")
    .filter((s) => s === "p").length;

  let filteredY = s
    .toLowerCase()
    .split("")
    .filter((s) => s === "y").length;

  return filteredP === filteredY ? true : false;
}

console.log(solution(s));
