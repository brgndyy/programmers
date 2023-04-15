const strings = ["sun", "bed", "car"];
const n = 1;

function solution(strings, n) {
  var answer = [];

  return strings.sort((a, b) => {
    if (a[n] > b[n]) {
      // a[n]이 b[n] 보다 크다면, 그대로 오름차순 정렬
      return 1;
    } else if (a[n] < b[n]) {
      // a[n]이 b[n]보다 작으면 a[n]이 뒤로 밀림
      return -1;
    } else return a > b ? 1 : -1;
  });

  return strings;
}

console.log(solution(strings, n));
