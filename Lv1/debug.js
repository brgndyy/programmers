const number = 10;
const limit = 3;
const power = 2;

function solution(number, limit, power) {
  let measureArr = [];

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) {
          count++;
        } else {
          count += 2;
        }
      }
    }

    if (count > limit) {
      count = power;
    }

    measureArr.push(count);
  }

  return measureArr.reduce((a, b) => a + b, 0);
}

console.log(solution(number, limit, power));
