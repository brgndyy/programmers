// 내가 풀었던 코드

let common = [4, 16, 64, 256];

function solution(common) {
  var answer = 0;
  if (common[2] % common[1] === 0) {
    let num = common[2] / common[1];
    answer = common.pop() * num;
  } else {
    let num = common[2] - common[1];
    answer = common.pop() + num;
  }
  return answer;
}

console.log(solution(common));
