function solution(s) {
  let splitS = s.split("");
  let stack = [];

  for (let i = 0; i < splitS.length; i++) {
    stack.push(splitS[i]);

    if (stack[stack.length - 2] === "(" && stack[stack.length - 1] === ")") {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}
