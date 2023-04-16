const n = 12345;

function solution(n) {
  n = n.toString().split("").reverse();

  let answer = n.map((num) => Number(num));

  return answer;
}

console.log(solution(n));
