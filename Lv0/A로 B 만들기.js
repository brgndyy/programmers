const before = "olleh";
const after = "hello";

function solution(before, after) {
  let beforeSort = before.split("").sort().join("");
  let afterSort = after.split("").sort().join("");

  return beforeSort === afterSort ? 1 : 0;
}

console.log(solution(before, after));
