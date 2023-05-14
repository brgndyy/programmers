const s = "-1 -2 -3 -4";

function solution(s) {
  let numArr = s.split(" ").map((str) => Number(str));

  return Math.min(...numArr) + " " + Math.max(...numArr);
}

console.log(solution(s));
