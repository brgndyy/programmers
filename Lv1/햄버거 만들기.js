const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

function solution(ingredient) {
  let stack = [];
  let count = 0;

  for (let x of ingredient) {
    stack.push(x);

    if (stack.length === 4 && stack.join("") === "1231") {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();

      count++;
    }
  }

  return count;
}

console.log(solution(ingredient));
