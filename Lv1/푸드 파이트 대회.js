const food = [1, 3, 4, 1, 3];

function solution(food) {
  let answer = "";

  for (let i = 1; i <= food.length; i++) {
    let num = Math.floor(food[i] / 2);

    if (num === 0) {
      continue;
    } else {
      answer += i.toString().repeat(num);
    }
  }

  return answer + "0" + answer.split("").reverse().join("");
}

console.log(solution(food));
