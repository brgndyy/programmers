const letter = ".... . .-.. .-.. ---";

function solution(letter) {
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  var answerIndex = [];
  let answer = "";
  const alphabetArr = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );

  const splitLetter = letter.split(" ");

  splitLetter.forEach((letter) => {
    answerIndex.push(morse.indexOf(letter));
  });

  answerIndex.forEach((item) => {
    return (answer += alphabetArr[item]);
  });

  return answer.toLowerCase();
}

console.log(solution(letter));
