const s = "foobar";

function solution(s) {
  let splitS = s.split("");
  var answer = [];
  let strArr = [];

  for (let i = 0; i < splitS.length; i++) {
    let count = 0;

    if (i === 0) {
      count = -1;
      strArr.push(splitS[i]);
    } else {
      if (strArr.includes(splitS[i])) {
        count = i - strArr.lastIndexOf(splitS[i]);
      } else {
        count = -1;
      }
      strArr.push(splitS[i]);
    }

    answer.push(count);
  }
  return answer;
}

console.log(solution(s));
