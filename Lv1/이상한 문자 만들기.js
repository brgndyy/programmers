const s = "  Try he Llo world ";

function solution(s) {
  let splitS = s.split(" ");
  let answer = "";

  for (let x of splitS) {
    if (x === "") {
      answer += " ";
      continue;
    }

    let splitWord = x.split("");

    for (let i = 0; i < splitWord.length; i++) {
      if (i % 2 === 0) {
        splitWord[i] = splitWord[i].toUpperCase();
      } else {
        splitWord[i] = splitWord[i].toLowerCase();
      }
    }

    answer += splitWord.join("");
  }

  return answer;
}

console.log(solution(s));
