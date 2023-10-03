const msg = `KAKAO`;

function solution(msg) {
  const answer = [];

  let alphabetMap = new Map();

  Array.from({ length: 26 }, (_, index) => {
    let str = String.fromCharCode(index + 65);

    alphabetMap.set(str, index + 1);
  });

  let str = "";

  for (let i = 0; i < msg.length; i++) {
    str += msg[i];

    // 만약 알파벳 Map 객체가 해당 문자 + 다음 문자열을 포함하고 있지 않다면
    if (alphabetMap.get(str) && !alphabetMap.get(str + msg[i + 1])) {
      answer.push(alphabetMap.get(str));

      alphabetMap.set(str + msg[i + 1], alphabetMap.size + 1);

      str = "";
    }
  }

  return answer;
}

console.log(solution(msg));
