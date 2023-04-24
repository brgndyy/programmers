const k = 3;
const score = [10, 100, 20, 150, 1, 100, 200];

function solution(k, score) {
  var answer = [];
  let fameArr = [];

  for (let i = 0; i < score.length; i++) {
    fameArr.push(score[i]); // [0, 300, 40, 300, 20  ]

    if (i < k) {
      answer.push(Math.min(...fameArr));
    } else {
      let sortedFameArr = fameArr.sort((a, b) => b - a);
      answer.push(sortedFameArr[k - 1]);
    }
  }

  return answer;
}

console.log(solution(k, score));
