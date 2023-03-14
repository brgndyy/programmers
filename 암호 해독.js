const cipher = "dfjardstddetckdaccccdegk";
const code = 4;

function solution(cipher, code) {
  var answer = "";

  for (let i = 0; i < cipher.length; i++) {
    if ((i + 1) % code === 0) {
      answer += cipher[i];
    }
  }
  return answer;
}

console.log(solution(cipher, code));
