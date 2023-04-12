const my_string = "BCBdbe";
const letter = "B";

function solution(my_string, letter) {
  return my_string
    .split("")
    .filter((word) => word !== letter)
    .join("");
}

console.log(solution(my_string, letter));
