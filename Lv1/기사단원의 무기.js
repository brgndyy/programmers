const number = 10;
const limit = 3;
const power = 2;

function solution(number, limit, power) {
  let knights = Array.from({ length: number }, (_, index) => index + 1);

  let measureArr = [];

  for (let i = 0; i < knights.length; i++) {
    let count = 0;

    for (let j = 1; j <= Math.ceil(knights[i] / 2); j++) {
      if (knights[i] % j === 0) {
        if (knights[i] / j === j) {
          count += 1;
        } else {
          count += 2;
        }
      }
    }

    measureArr.push(count);
  }

  let filterArr = measureArr.map((num) => (num > limit ? (num = power) : num));

  return filterArr.reduce((a, b) => a + b, 0);
}

console.log(solution(number, limit, power));
