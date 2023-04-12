const my_string = "abcd";

function solution(my_string) {
  var answer = 0;

  const result = my_string.match(/[0-9]+/g);

  if (!result) {
    return 0;
  }

  return result.reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0);
}

console.log(solution(my_string));
