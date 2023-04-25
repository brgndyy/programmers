const s = "uakks";
const skip = "wbqd";
const index = 5;

function solution(s, skip, index) {
  var answer = "";

  //알파벳 배열 만들어주기
  const alphabet = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );

  [...s].forEach((str) => {
    let idx = index;
    let plusAlphabet;
    let strIndex = alphabet.indexOf(str); // 0

    while (idx > 0) {
      if (strIndex > 25) {
        strIndex = 0;
        plusAlphabet = alphabet[strIndex];
        if (skip.includes(plusAlphabet)) {
          continue;
        } else {
          idx--;
        }
      } else {
        strIndex += 1;
        plusAlphabet = alphabet[strIndex];

        if (skip.includes(plusAlphabet)) {
          continue;
        } else {
          idx--;
        }
      }
    }

    answer += plusAlphabet;
  });

  return answer;
}

console.log(solution(s, skip, index));
