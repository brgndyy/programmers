const array = [3, 10, 12, 28];
const n = 20;

function solution(array, n) {
  var answer = 0;
  let minMinusNum = n - array[0]; // 최소값 차 담는 변수

  for (let i = 1; i < array.length; i++) {
    if (n - array[i] < minMinusNum && -(n - array[i]) !== minMinusNum) {
      minMinusNum = n - array[i];
      answer = array[i];
    } else if (n - array[i] > minMinusNum && n - array[i] === -minMinusNum) {
      let minusNum = array[i];

      answer < minusNum ? (answer = answer) : (answer = minusNum);
    } else if (n - array[i] < minMinusNum && n - array[i] === -minMinusNum) {
      let minusNum = array[i];

      answer < minusNum ? (answer = answer) : (answer = minusNum);
    }
  }

  return answer;
}

console.log(solution(array, n));
