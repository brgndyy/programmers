const s = "aaabbaccccabba";

function solution(s) {
  let sameStack = [];
  let diffStack = [];
  let count = 0;
  let splitS = s.split("");

  sameStack.push(splitS[0]);

  for (let i = 1; i < splitS.length; i++) {
    if (sameStack.length === 0 && diffStack.length === 0) {
      sameStack.push(splitS[i]);
    } else if (sameStack[sameStack.length - 1] === splitS[i]) {
      sameStack.push(splitS[i]);
    } else {
      diffStack.push(splitS[i]);
    }

    if (sameStack.length === diffStack.length) {
      count++;
      sameStack = [];
      diffStack = [];
    }
  }

  return count;
}

console.log(solution(s));
