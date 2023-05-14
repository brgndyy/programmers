const A = [1, 4, 2];
const B = [5, 4, 4];

function solution(A, B) {
  var answer = 0;

  let sortA = A.sort((a, b) => a - b);
  let sortB = B.sort((a, b) => b - a);

  for (let i = 0; i < sortA.length; i++) {
    answer += sortA[i] * sortB[i];
  }

  return answer;
}

console.log(solution(A, B));
