const s = "a B z";
const n = 4;

function solution(s, n) {
  let arr = [];
  let splitS = s.split("");

  for (let i = 0; i < splitS.length; i++) {
    if (splitS[i].charCodeAt() === 32) {
      arr.push(splitS[i].charCodeAt());
    }
    arr.push(splitS[i].charCodeAt() + n);
  }

  return arr;
}

console.log(solution(s, n));
