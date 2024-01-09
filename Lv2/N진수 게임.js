const n = 16;

const t = 16;

const m = 2;

const p = 2;

function solution(n, t, m, p) {
  const totalStr = "";

  const 전체구해야할숫자갯수 = t * m;

  for (let i = 0; i <= 전체구해야할숫자갯수; i++) {
    totalStr += i.toString(2).toUpperCase();
  }

  return totalStr;
}

console.log(solution(n, t, m, p));
