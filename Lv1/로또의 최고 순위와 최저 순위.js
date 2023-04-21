const lottos = [0, 0, 0, 0, 0, 0];
const win_nums = [20, 9, 3, 45, 4, 35];

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

console.log(solution(lottos, win_nums));
