// function solution(n, a, b) {
//   let minNum = Math.min(a, b);
//   let maxNum = Math.max(a, b);
//   var answer = 0;

//   while (true) {
//     answer++;
//     minNum = Math.ceil(minNum / 2);
//     maxNum = Math.ceil(maxNum / 2);

//     if (minNum % 2 !== 0 && maxNum % 2 === 0 && maxNum - minNum === 1) {
//       break;
//     }
//   }

//   return answer + 1;
// }

function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
