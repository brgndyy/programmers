const my_string = "abCdEfghIJ";

function solution(my_string) {
  var answer = [];

  for (let x of my_string) {
    x === x.toLowerCase()
      ? answer.push(x.toUpperCase())
      : answer.push(x.toLowerCase());
  }
  return answer.join("");
}

console.log(solution(my_string));
