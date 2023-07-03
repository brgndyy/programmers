const s = "3people  unFollowed me";

function solution(s) {
  let answer = [];

  let splitS = s.split(" ");

  for (let i = 0; i < splitS.length; i++) {
    if (splitS[i] === "") {
      answer.push("");
    } else {
      let str = splitS[i].split("");
      let newStr = "";

      for (let j = 0; j < str.length; j++) {
        if (j === 0 && Number.isNaN(str[j]) === true) {
          newStr += str[j];
        } else if (j === 0 && Number.isNaN(str[j]) === false) {
          newStr += str[j].toUpperCase();
        } else {
          newStr += str[j].toLowerCase();
        }
      }

      answer.push(newStr);
    }
  }

  return answer.join(" ");
}

console.log(solution(s));
