const input = `(A(BC)D)EF(G(H)(IJ)K)LM(N)`;

const strArr = input.split("");

const stack = [];

for (let i = 0; i < strArr.length; i++) {
  stack.push(strArr[i]);

  if (stack[stack.length - 1] === ")") {
    while (stack[stack.length - 1] !== "(") {
      stack.pop();
    }
    stack.pop();
  }
}

console.log(stack.join(""));
