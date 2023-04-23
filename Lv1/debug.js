const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

function solution(k, m, score) {
  let answer = 0;
  // 정렬 해준후에 값을 나눈 나머지 인덱스부터 배열 뽑아줌 .
  const sortedScore = score.sort((a, b) => a - b).slice(score.length % m);

  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}

console.log(solution(k, m, score));
