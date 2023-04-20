const left = 13;
const right = 17;

function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    let measureCount = [];

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        measureCount.push(j);
      }
    }

    if (measureCount.length % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}

console.log(solution(left, right));
