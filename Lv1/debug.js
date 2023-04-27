const n = 10;
const m = 4;
const section = [2, 3, 6, 10];

function solution(n, m, section) {
  let answer = 0;

  let part = 0;

  section.forEach((wall) => {
    if (wall > part) {
      part = wall + m - 1;

      answer++;
    }
  });

  return answer;
}

console.log(solution(n, m, section));
