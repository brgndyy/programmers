function solution(s) {
  let splitS = s.split("");
  let stackCount = 0;

  for (let i = 0; i < splitS.length; i++) {
    if (splitS[i] === "(") {
      stackCount += 1;
    } else if (stackCount === ")") {
      stackCount -= 1;
    }

    if (stackCount < 0) {
      return false;
    }
  }

  return stackCount === 0 ? true : false;
}
