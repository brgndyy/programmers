function solution(msg) {
  let alphabetMap = new Map();
  let answer = [];

  Array.from({ length: 26 }, (_, index) => {
    let char = String.fromCharCode(index + 65);
    alphabetMap.set(char, index + 1);
  });

  let w = "";
  for (let i = 0; i < msg.length; i++) {
    w += msg[i];
    if (!alphabetMap.get(w + msg[i + 1])) {
      answer.push(alphabetMap.get(w));
      alphabetMap.set(w + msg[i + 1], alphabetMap.size + 1);
      w = "";
    }
  }

  return answer;
}
