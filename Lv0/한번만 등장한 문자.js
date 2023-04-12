const s = "aabbddcc";

function solution(s) {
  let arr = [];
  let splitWords = s.split("").sort();

  for (let i = 0; i < splitWords.length; i++) {
    if (
      splitWords[i] === splitWords[i - 1] ||
      splitWords[i] === splitWords[i + 1]
    ) {
      continue;
    } else {
      arr.push(splitWords[i]);
    }
  }

  if (arr.length === undefined) {
    return "";
  }

  return arr.join("");
}

console.log(solution(s));

// function solution(s) {
//     let res = [];
//     for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
//     return res.sort().join('');
// }
