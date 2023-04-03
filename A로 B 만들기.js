let before = "allpe";
let after = "apple";

function solution(before, after) {
  before = [...before].sort(); // ['a', 'e', 'l', 'l', 'p']
  after = [...after].sort(); //  ['a', 'e', 'l', 'p', 'p']

  return before.filter((a, i) => a === after[i]).length === after.length
    ? 1
    : 0;
}

console.log(solution(before, after));
