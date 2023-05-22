const dartResult = "1S*2T*3S";

function solution(dartResult) {
  let temp = 0;
  let answer = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] > 0 && dartResult[i] <= 9) {
      if ((dartResult[i] === 1) & (dartResult[i + 1] === 0)) {
        temp = 10;
        i++;
      } else {
        temp = Number(dartResult[i]);
      }
    } else if (dartResult[i] === "S") {
      answer.push(temp);
    } else if (dartResult[i] === "D") {
      answer.push(Math.pow(temp, 2));
    } else if (dartResult[i] === "T") {
      answer.push(Math.pow(temp, 3));
    } else if (dartResult[i] === "#") {
      answer[answer.length - 1] *= -1;
    } else if (dartResult[i] === "*") {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
  }

  return answer.reduce((a, b) => a + b, 0);
}

console.log(solution(dartResult));
