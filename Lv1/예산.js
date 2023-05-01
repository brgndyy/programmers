const d = [2, 2, 3, 3];
const budget = 10;

function solution(d, budget) {
  let sortedD = d.sort((a, b) => a - b);
  let max = 0;

  for (let i = 0; i < sortedD.length; i++) {
    if (budget - sortedD[i] < 0) {
      continue;
    }
    budget -= sortedD[i];
    max++;
  }

  return max;
}

console.log(solution(d, budget));
