const s = "3people unFollowed me";

function solution(s) {
  var answer = [];

  let splitS = s.split(" ");

  for (let i = 0; i < splitS.length; i++) {
    let splitStr = splitS[i].split("");
    let strArr = [];

    if (Number.isInteger(Number(splitStr[0]))) {
      strArr.push(splitStr[0]);

      for (let j = 1; j < splitStr.length; j++) {
        strArr.push(splitStr[i]);
      }

      answer.push(strArr.join(""));
    } else {
      for (let k = 0; k < splitStr.length; k++) {
        if (k === 0) {
          strArr.push(splitStr[k].toUpperCase());
        } else {
          strArr.push(splitStr[k].toLowerCase());
        }
      }

      answer.push(strArr.join(""));
    }
  }

  return answer;
}

console.log(solution(s));
