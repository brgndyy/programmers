const s = "z B a";
const n = 4;

function solution(s, n) {
  let answer = "";

  for (let x of s) {
    let plusStrNum = 0;

    if (x === " ") {
      answer += " ";
      continue;
      // 문자열 소문자일때
    } else if (x.toLowerCase() === x) {
      plusStrNum = x.charCodeAt() + n;

      if (plusStrNum > 122) {
        plusStrNum -= 26;
        answer += String.fromCharCode(plusStrNum);
      } else {
        answer += String.fromCharCode(plusStrNum);
      }
      // 문자열 대문자일때
    } else {
      plusStrNum = x.charCodeAt() + n;

      if (plusStrNum > 90) {
        plusStrNum -= 26;
        answer += String.fromCharCode(plusStrNum);
      } else {
        answer += String.fromCharCode(plusStrNum);
      }
    }
  }

  return answer;
}

console.log(solution(s, n));

// 대문자 아스키 = 65 ~ 90
// 소문자 아스키 = 97 ~ 122;
