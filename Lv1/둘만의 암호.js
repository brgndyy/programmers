const s = "aukks";
const skip = "wbqd";
const index = 5;

function solution(s, skip, index) {
  var answer = "";

  //알파벳 배열 만들어주기
  const alphabet = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );

  [...s].forEach((str) => {
    let plusAlphabet;
    let strIndex = alphabet.indexOf(str); // 0

    for (let i = strIndex + 1; i <= index; i++) {
      plusAlphabet = alphabet[i];

      if (skip.includes(plusAlphabet)) {
        i--;
      }

      if (i > 25) {
        i = -1;
      }
    }

    answer += plusAlphabet;
  });

  return answer;
}

console.log(solution(s, skip, index));
