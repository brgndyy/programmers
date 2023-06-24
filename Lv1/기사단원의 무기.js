function solution(number, limit, power) {
  let result = 0;
  let numArr = [];

  for (let i = 1; i <= number; i++) {
    let num = i;
    let count = 0;

    for (let j = 1; j <= Math.sqrt(num); j++) {
      if (num % j === 0) {
        if (num / j === j) {
          count++;
        } else {
          count += 2;
        }
      }
    }
    numArr.push(count);
  }

  for (let i = 0; i < number; i++) {
    if (numArr[i] > limit) {
      numArr[i] = power;
    }
  }

  return numArr.reduce((a, b) => a + b, 0);
}
