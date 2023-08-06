const n = 3;

function solution(n) {
  let answer = [];

  while (n > 0) {
    let some = n % 3;

    if (n % 3 === 0) {
      n = n / 3 - 1;
    } else {
      n = Math.floor(n / 3);
    }

    if (some === 0) {
      answer.unshift(4);
    } else if (some === 1) {
      answer.unshift(1);
    } else if (some === 2) {
      answer.unshift(2);
    }
  }

  return answer.join("");
}

console.log(solution(n));
