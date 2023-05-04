const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

function solution(ingredient) {
  let stack = [];
  let count = 0;

  [...ingredient].forEach((num) => {
    stack.push(num);

    if (stack.length >= 4) {
      let joinStack = stack.slice(-4).join("");
      if (joinStack === "1231") {
        count++;
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
      }
    }
  });

  return count;
}

console.log(solution(ingredient));
