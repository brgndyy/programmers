const my_string = "p2o4i8gj2";

function solution(my_string) {
  var answer = [];

  let regex = /[^0-9]/g;

  let onlyNumsArr = my_string.replace(regex, "").split("");

  return onlyNumsArr.sort((a, b) => a - b).map((num) => Number(num));
}

console.log(solution(my_string));
