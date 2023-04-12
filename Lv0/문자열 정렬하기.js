const my_string = "Python";
const result = "abcd";

function solution(my_string) {
  let smallWord = my_string.toLowerCase();

  let answer = smallWord.split("").sort().join("");

  return answer;
}

console.log(solution(my_string));
