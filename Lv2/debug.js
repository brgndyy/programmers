const n = 16;

const t = 16;

const m = 2;

const p = 2;

function solution(n, t, m, p) {
  let totalStr = "";

  let answer = "";

  const 전체구해야할숫자갯수 = t * m;

  for (let i = 0; i <= 전체구해야할숫자갯수; i++) {
    totalStr += i.toString(n).toUpperCase();
  }

  for (let i = p - 1; i <= 전체구해야할숫자갯수; i += p) {
    answer += totalStr[i];
  }

  return answer;
}

console.log(solution(n, t, m, p));
