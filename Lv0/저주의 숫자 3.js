const n = 40;

function solution(n) {
  let i = 0;

  while (n > 0) {
    i += 1;
    n--;

    if (i % 3 === 0 || i.toString().includes("3")) {
      i += 1;
    }
  }

  return i;
}

console.log(solution(n));
