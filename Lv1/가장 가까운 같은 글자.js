const s = "banana";

function solution(s) {
  let splitS = s.split("");
  var answer = [];
  let strArr = [];

  for (let i = 0; i < splitS.length; i++) {
    let count = 0;
    strArr.push(splitS[i]);

    if (i === 0) {
      count = -1;
    } else {
      for (let j = 0; j < strArr.length; j++) {
        if (strArr.includes(splitS[i])) {
          count = i - strArr.lastIndexOf(splitS);
        } else {
          count = -1;
        }
      }
    }

    answer.push(count);
  }
  return answer;
}

console.log(solution(s));
