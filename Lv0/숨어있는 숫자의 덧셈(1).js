const my_string = "1a2b3c4d123";

function solution(my_string) {
  var answer = 0;
  let regex = /[^0-9]/g;
  let onlyNumsArr = my_string.replace(regex, "").split("");

  return onlyNumsArr.reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0);
}

console.log(solution(my_string));
