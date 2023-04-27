const n = 40;

function solution(n) {
  let i = 0;
  let count = 1;

  while (count <= n) {
    i += 1;
    count++;

    if (i % 3 === 0 || i.toString().includes("3")) {
      while (i % 3 === 0 || i.toString().includes("3")) {
        i += 1;
      }
    }
  }

  return i;
}

console.log(solution(n));
