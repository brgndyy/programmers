const number = [-3, -2, -1, 0, 1, 2, 3];

function solution(number) {
  var answer = 0;

  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = i + 2; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer += 1;
        }
      }
    }
  }

  return answer;
}

console.log(solution(number));
