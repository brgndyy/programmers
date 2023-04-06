const numlist = [1, 2, 3, 4, 5, 6];
const n = 4;

function solution(numlist, n) {
  numlist.sort((a, b) => {
    const [aGab, bGab] = [Math.abs(a - n), Math.abs(b - n)];

    if (aGab === bGab) return b - a;

    return aGab - bGab;
  });

  return numlist;
}

console.log(solution(numlist, n));
