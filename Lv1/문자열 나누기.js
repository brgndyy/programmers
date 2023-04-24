const s = "aaabbaccccabba";

function solution(s) {
  var answer = 0;

  let splitStr = s.split("");
  let firstStr = splitStr[0]; // a

  let strObj = { firstStr: 0, y: 0 };

  for (let x of s) {
    if (x === firstStr) {
      strObj[firstStr] += 1;
    } else {
      strObj["y"] += 1;
    }
  }

  return strObj;
}

console.log(solution(s));
