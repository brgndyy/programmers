function solution(msg) {
  let alphabetMap = new Map();
  let answer = [];

  Array.from({ length: 26 }, (_, index) => {
    let str = String.fromCharCode(index + 65);

    alphabetMap.set(str, index + 1);
  });

  let word = "";

  for (let i = 0; i < msg.length; i++) {
    word += msg[i];

    // 만약 글자 Map이 다음 문자열을 포함하고 있지 않다면
    if (!alphabetMap.get(word + msg[i + 1])) {
      answer.push(alphabetMap.get(word));

      alphabetMap.set(word + msg[i + 1], alphabetMap.size + 1);

      word = "";
    }
  }

  return answer;
}

console.log(solution("KAKAO"));
