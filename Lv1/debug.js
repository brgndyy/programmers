const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1, 1, 2, 3, 1];

function solution(ingredient) {
  let answer = 0;
  const stack = [];

  for (let i of ingredient) {
    stack.push(i);

    if (stack.slice(-4).join("") == "1231") {
      stack.splice(-4);
      answer++;
    }
  }
  return answer;
}

console.log(solution(ingredient));
