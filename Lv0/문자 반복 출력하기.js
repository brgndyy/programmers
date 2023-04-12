const my_string = "hello";
const n = 3;

function solution(my_string, n) {
  var answer = "";

  let splitWord = my_string
    .split("")
    .map((word) => word.repeat(n))
    .join("");
  return splitWord;
}

console.log(solution(my_string, n));
