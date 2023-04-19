const N = 4;
const stages = [4, 4, 4, 4, 4];

function solution(N, stages) {
  let hash = new Map();

  for (let i = 1; i <= N; i++) {
    let challenger = stages.filter((num) => num >= i).length; // 8;
    let notClearer = stages.filter((num) => num === i).length;

    let failureRate = notClearer / challenger;

    hash.set(i, failureRate);
  }

  let answer = [...hash.entries()]
    .sort((a, b) => b[1] - a[1])
    .map((num) => num[0]);

  return answer;
}

console.log(solution(N, stages));
