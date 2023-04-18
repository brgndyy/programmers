const n = 15;

function solution(n) {
  let count = 0;

  let arr = Array.from({ length: n - 3 }, (_, index) => index + 4);

  arr.forEach((num) => {
    let measureCount = 0;
    let compareNum = 1;

    while (compareNum <= num) {
      if (num % compareNum === 0) {
        measureCount++;
      }
      compareNum++;
    }

    if (measureCount >= 3) {
      count++;
    }
  });

  return count;
}

console.log(solution(n));
