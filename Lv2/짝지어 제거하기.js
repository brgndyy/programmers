const s = "cdcd";

function solution(s) {
  let stack = [];

  for (let x of s) {
    stack.push(x);

    if (stack.length > 1) {
      if (stack[stack.length - 1] === stack[stack.length - 2]) {
        stack.pop();
        stack.pop();
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution(s));
