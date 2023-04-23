const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

function solution(ingredient) {
  let count = 0;
  const stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.slice(-4).join("") === "1231") {
      stack.splice(-4);
      count++;
    }
  }

  return count;
}

console.log(solution(ingredient));
