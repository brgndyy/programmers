const my_string = "nice to meet you";

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

console.log(solution(my_string));
