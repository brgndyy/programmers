function solution(n) {
  let count = 0;

  while (n > 0) {
    if (n % 2) {
      count++;
      n = Math.floor(n / 2);
    } else {
      n = n / 2;
    }
  }

  return count;
}

console.log(solution(5000));
