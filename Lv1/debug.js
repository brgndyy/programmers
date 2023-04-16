const s = "AB";
const n = 1;

function solution(s, n) {
  let arr = [];
  let answer = "";
  let splitS = s.split("");

  for (let i = 0; i < splitS.length; i++) {
    let charCode = 0;
    if (splitS[i].charCodeAt() === 32) {
      charCode = splitS[i].charCodeAt();
      arr.push(String.fromCharCode(charCode));
    } else {
      charCode = splitS[i].charCodeAt() + n;
      if ((charCode > 90 && charCode < 96) || charCode > 122) {
        charCode -= 26;
        arr.push(String.fromCharCode(charCode));
      } else {
        arr.push(String.fromCharCode(charCode));
      }
    }
  }

  return arr.join("");
}

console.log(solution(s, n));
