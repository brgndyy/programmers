const input = `(()()))`;

const strArr = input.split("");

const stack = [];

for (let i = 0; i < strArr.length; i++) {
  stack.push(strArr[i]);

  if (stack[stack.length - 2] === "(" && stack[stack.length - 1] === ")") {
    stack.pop();
    stack.pop();
  }
}

console.log(stack);
