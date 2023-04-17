const dartResult = "1D2S0T";

function solution(dartResult) {
  const regex = /(\d+)([SDT])([*#]?)/g;
  // matchAll을 통해 받은 이터레이터를 배열화
  const matches = Array.from(dartResult.matchAll(regex));
  const scores = [];

  for (let i = 0; i < matches.length; i++) {
    const [_, num, bonus, option] = matches[i];
    let score = parseInt(num);

    switch (bonus) {
      case "S":
        score = Math.pow(score, 1);
        break;
      case "D":
        score = Math.pow(score, 2);
        break;
      case "T":
        score = Math.pow(score, 3);
        break;
    }

    if (option === "*") {
      if (i > 0) {
        scores[i - 1] *= 2;
      }
      score *= 2;
    } else if (option === "#") {
      score *= -1;
    }

    scores.push(score);
  }

  return scores.reduce((a, b) => a + b);
}

console.log(solution(dartResult));
