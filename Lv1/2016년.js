const a = 5;
const b = 24;

function solution(a, b) {
  let answer;
  let days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 해당 전 월까지 잘라주기
  days.splice(a - 1);

  let totalDay = days.reduce((a, b) => a + b, 0) + b;

  return totalDay % 7 === 0
    ? "THU"
    : totalDay % 7 === 1
    ? "FRI"
    : totalDay % 7 === 2
    ? "SAT"
    : totalDay % 7 === 3
    ? "SUN"
    : totalDay % 7 === 4
    ? "MON"
    : totalDay % 7 === 5
    ? "TUE"
    : "WED";
}

console.time("test");

solution(a, b);
console.timeEnd("test");
