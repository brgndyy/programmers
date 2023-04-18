const n = 420;

function solution(n) {
  const result = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor);

      n = n / divisor;
    } else {
      divisor++;
    }
  }

  return result;
}

console.log(solution(n));
