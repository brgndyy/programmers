const n = 8;
const m = 4;
const section = [2, 3, 6];

function solution(n, m, section) {
  let answer = 0;

  let part = 0;

  for (let i = 0; i < section.length; i++) {
    if (section[i] > part) {
      part = section[i] + m - 1;

      answer++;
    }
  }

  return answer;
}

console.log(solution(n, m, section));
