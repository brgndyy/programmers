const strings = ["abce", "abcd", "cdx"];
const n = 2;

function solution(strings, n) {
  let sorted = strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] < b[n]) {
      return -1;
    } else if (a[n] === b[n]) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  return sorted;
}

console.log(solution(strings, n));
