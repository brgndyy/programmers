const price = 3;
const money = 20;
const count = 4;

function solution(price, money, count) {
  let sum = 0;
  let num = 1;

  for (let i = 1; i <= count; i++) {
    sum += price * num;
    num++;
  }

  return sum - money <= 0 ? 0 : sum - money;
}

console.log(solution(price, money, count));
