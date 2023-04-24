const k = 4;
const score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

function solution(k, score) {
  var answer = [];

  for (let i = 0; i < score.length; i++) {
    let fameArr = [];

    fameArr.push(score[i]); // [0, 300, 40, 300, 20  ]

    if (i < k) {
      answer.push(Math.min(...fameArr));
    } else {
      let sortedFameArr = fameArr.sort((a, b) => b - a).splice(0, 4);
      answer.push(sortedFameArr[sortedFameArr.length - 1]);
    }
  }

  return answer;
}

console.log(solution(k, score));
