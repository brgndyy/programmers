const t = "3141592";
const p = "271";

function solution(t, p) {
  var answer = 0;
  let splitT = t.split("");

  let numsArr = [];

  for (let i = 0; i < splitT.length; i++) {
    let spliceStr = splitT.splice(i, p.length);

    if (spliceStr.length !== p.length) {
      continue;
    }

    numsArr.push(Number(spliceStr));
  }

  return numsArr;
}

console.log(solution(t, p));
