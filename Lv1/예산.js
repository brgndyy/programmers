const d = [2, 2, 3, 3];
const budget = 10;

function solution(d, budget) {
  let count = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    count++;
    if (budget < 0) {
      count--;
      budget += d[i];
    }
  }

  return count;
}

console.log(solution(d, budget));
